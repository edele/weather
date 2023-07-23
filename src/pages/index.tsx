import { type GetServerSideProps } from "next";
import React from "react";
import requestIp from "request-ip";
import App, { type IAppProps as IAppProperties } from "../App";
import { dailyForecast } from "../data";
import { currentWeatherFromAW, hourlyForecastFromAW } from "../externalApis/accuweather/adapters";
import { getAllTestAWData } from "../externalApis/accuweather/testData";
import { getLocationData } from "../externalApis/geoplugin";
import { getAWDailyForecast, getAllAWData } from "../externalApis/accuweather/requests";

export default function Page(properties: IAppProperties): React.ReactNode {
  return <App {...properties} />;
}

const isDev = process.env.NODE_ENV === "development";

export const getServerSideProps: GetServerSideProps<IAppProperties> = async ({ req }) => {
  const detectedIp = requestIp.getClientIp(req);
  if (!detectedIp) return { notFound: true };

  const ipAddress = process.env.TESTING_FAKE_IP_ADDRESS ?? detectedIp;
  if (!ipAddress) return { notFound: true };

  const geoResponse = await getLocationData(ipAddress);
  if (!geoResponse) return { notFound: true };

  const allAWData = isDev ? getAllTestAWData() : await getAllAWData(geoResponse.lat, geoResponse.long);

  const { awLocation, awCurrentConditions, awHourlyForecast } = allAWData;

  const awDailyForecast = await getAWDailyForecast(awLocation.Key);
  console.log(JSON.stringify(awDailyForecast, null, 2));

  return {
    props: {
      currentWeather: currentWeatherFromAW({ awLocation, awCurrentConditions, awHourlyForecast }),
      hourly: hourlyForecastFromAW(awHourlyForecast),
      dailyForecast,
    },
  };
};
