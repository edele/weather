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

  return {
    props: {
      currentWeather,
      hourly,
      dailyForecast,
      detectedIp,
    },
  };
};
