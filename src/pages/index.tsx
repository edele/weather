/* eslint-disable sonarjs/no-duplicate-string */
import { type GetServerSideProps } from "next";
import { readFileSync } from "node:fs";
import React from "react";
import requestIp from "request-ip";
import App, { type IAppProps as IAppProperties } from "../App";
import { dailyForecast } from "../data";
import { currentWeatherFromAW, hourlyForecastFromAW } from "../externalApis/accuweather/adapters";
import { getAllTestAWData } from "../externalApis/accuweather/testData";
import { getLocationData } from "../externalApis/geoplugin";
import { type IWADailyForecastResponse } from "../externalApis/weather-api/types";
import { type ICurrentWeather, type IDailyForecastItem, type IHoulyItem } from "../weatherTypes";

export default function Page(properties: IAppProperties): React.ReactNode {
  return <App {...properties} />;
}

// const isDev = process.env.NODE_ENV === "development";

export const getServerSideProps: GetServerSideProps<IAppProperties> = async ({ req }) => {
  const detectedIp = requestIp.getClientIp(req);
  if (!detectedIp) return { notFound: true };

  const ipAddress = process.env.TESTING_FAKE_IP_ADDRESS ?? detectedIp;
  if (!ipAddress) return { notFound: true };

  const geoResponse = await getLocationData(ipAddress);
  if (!geoResponse) return { notFound: true };

  // const allAWData = isDev ? getAllTestAWData() : await getAllAWData(geoResponse.lat, geoResponse.long);
  const allAWData = getAllTestAWData();

  const { awLocation, awCurrentConditions, awHourlyForecast } = allAWData;

  // const awDailyForecast = await getAWDailyForecast(awLocation.Key);
  // console.log(JSON.stringify(awDailyForecast, null, 2));

  // console.log(`${geoResponse.lat},${geoResponse.long}`);

  // const forecast = await getWADailyForecast(geoResponse.lat, geoResponse.long);
  console.log("forecast");
  // console.log(JSON.stringify(forecast, null, 2));

  // writeFileSync("debug.json", JSON.stringify(forecast, null, 2), "utf8");

  // return {
  //   props: await getPropsFromWA()
  // }

  // return {
  //   props: {
  //     currentWeather: currentWeatherFromAW({ awLocation, awCurrentConditions, awHourlyForecast }),
  //     hourly: hourlyForecastFromAW(awHourlyForecast),
  //     dailyForecast,
  //   },
  // };

  return {
    props: await getPropsFromWA(),
  };
};

async function getPropsFromWA(): Promise<IAppProperties> {
  const waResponse = JSON.parse(readFileSync("debug.json", "utf8")) as unknown as IWADailyForecastResponse;

  console.log(waResponse.location.country);

  const hourly: IHoulyItem[] = [
    { datetime: "12 AM", temperature: 21, conditions: "night-clear" },
    { datetime: "1 AM", temperature: 19, conditions: "night-clear" },
    { datetime: "2 AM", temperature: 19, conditions: "night-clear" },
    { datetime: "3 AM", temperature: 19, conditions: "night-clear" },
    { datetime: "4 AM", temperature: 13, conditions: "night-clear" },
    { datetime: "5 AM", temperature: 14, conditions: "clear" },
    { datetime: "6 AM", temperature: 14, conditions: "clear" },
    { datetime: "7 AM", temperature: 15, conditions: "clear" },
    { datetime: "8 AM", temperature: 17, conditions: "clear" },
    { datetime: "9 AM", temperature: 18, conditions: "clear" },
    { datetime: "10 AM", temperature: 19, conditions: "clear" },
    { datetime: "11 AM", temperature: 20, conditions: "partly-cloudy" },
  ];

  const currentWeather: ICurrentWeather = {
    location: {
      name: waResponse.location.name,
    },
    temp: Math.round(waResponse.current.temp_c),
    weatherText: waResponse.current.condition.text,
    range: {
      min: "string",
      max: "string",
    },
    cond: "rain",
  };

  const dailyForecast: IDailyForecastItem[] = [
    {
      datetime: "Today",
      conditions: 2,
      temp: 21,
      range: { min: 15, max: 25 },
      periodRange: { min: 12, max: 29 },
    },
    {
      datetime: "Fri",
      conditions: 2,
      temp: 19,
      range: { min: 17, max: 20 },
      periodRange: { min: 12, max: 29 },
    },
    {
      datetime: "Sat",
      conditions: 2,
      temp: 21,
      range: { min: 12, max: 18 },
      periodRange: { min: 12, max: 29 },
    },
  ];

  return {
    currentWeather,
    hourly,
    dailyForecast,
  };
}

const key = process.env.WEATHER_API_KEY;

async function getWADailyForecast(lat: string, long: string): Promise<IWADailyForecastResponse> {
  const url = "https://api.weatherapi.com/v1/forecast.json";

  const parameters = {
    q: `${lat},${long}`,
    days: "10",
    aqi: "no",
    alerts: "no",
  };

  return await getWeatherAPIResponse(url, parameters);
}

async function getWeatherAPIResponse<T>(urlStart: string, parameters: Record<string, string> = {}): Promise<T> {
  if (!key || typeof key !== "string") throw new Error("Failed to obtain WEATHER_API_KEY");

  const apiHost = new URL(urlStart).host;

  const stringifiedParameters = new URLSearchParams({ ...parameters, key }).toString();
  const url = `${urlStart}?${stringifiedParameters}`;

  console.log(`Requesting ${url}`);

  try {
    const response = await fetch(url, {
      headers: {
        "accept-encoding": "gzip,deflate",
      },
    });

    const responseContentType = response.headers.get("content-type");

    if (!response.ok) {
      // Handle json error response
      if (responseContentType === "application/json") {
        const errorBody = await response.json();
        console.error(`${apiHost} responded with "${response.status}" status code. Response body logged below`);
        console.log(errorBody);
      } else {
        // Error response content is not json. Log generic error
        console.error(
          `${apiHost} responded with "${response.status}" status code and ${
            responseContentType ?? "missing"
          } content type.`
        );
      }
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to get response from ${apiHost}. Related error is logged below`);
    console.error(error);

    throw error;
  }
}

/* eslint-enable sonarjs/no-duplicate-string */
