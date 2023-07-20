import { GetServerSideProps } from "next";
import React from "react";
import requestIp from "request-ip";
import App, { IAppProps } from "../App";
import { currentWeather, dailyForecast, hourly } from "../data";

export default function Page(props: IAppProps) {
  return <App {...props} />;
}

export const getServerSideProps: GetServerSideProps<IAppProps> = async ({
  req,
}) => {
  const detectedIp = requestIp.getClientIp(req);

  if (!detectedIp) console.error("Failed to detect IP address");

  const cityName = await getCityName(
    process.env.TESTING_FAKE_IP_ADDRESS ?? detectedIp
  );

  return {
    props: {
      currentWeather: {
        ...currentWeather,
        location: { ...currentWeather.location, name: cityName },
      },
      hourly,
      dailyForecast,
    },
  };
};

function getCityName(ip: string) {
  const url = `http://www.geoplugin.net/json.gp?${new URLSearchParams({ ip })}`;

  console.log(`Requesting IP info from ${url}`);

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `geoplugin.net responded with "${response.status}" status code.`
        );
      }
      return response.json();
    })
    .then((json) => {
      return json.geoplugin_city;
    })
    .catch((error) => {
      console.error(
        "Failed to get city name from geoplugin.net. Related error is logged below"
      );
      console.error(error);
    });
}
