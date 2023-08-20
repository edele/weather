import { type IAWHourlyForecastItem, type IAWCurrentConditions, type IAWLocation, type IAWAllData } from "./types";

const apikey = process.env.ACCUWEATHER_API_KEY;

export async function getAWLocation(lat: string, long: string): Promise<IAWLocation> {
  if (!apikey || typeof apikey !== "string") throw new Error("Failed to obtain ACCUWEATHER_API_KEY");

  const parameters = { q: `${lat},${long}` };
  const url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`;

  console.log(`Requesting ${url}`);

  return await getAccuweatherAPIResponse(url, parameters);
}

export async function getAWCurrentConditions(locationKey: string): Promise<IAWCurrentConditions[]> {
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

  return await getAccuweatherAPIResponse(url);
}

export async function getAWHourlyForecast(locationKey: string): Promise<IAWHourlyForecastItem[]> {
  const parameters = { metric: "true" };
  const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/24hour/${locationKey}`;

  return await getAccuweatherAPIResponse(url, parameters);
}

export async function getAWDailyForecast(locationKey: string): Promise<IAWHourlyForecastItem[]> {
  const parameters = { metric: "true" };
  const url = `https://dataservice.accuweather.com/forecasts/v1/daily/10day/${locationKey}`;

  return await getAccuweatherAPIResponse(url, parameters);
}

async function getAccuweatherAPIResponse<T>(urlStart: string, parameters: Record<string, string> = {}): Promise<T> {
  if (!apikey || typeof apikey !== "string") throw new Error("Failed to obtain ACCUWEATHER_API_KEY");

  const stringifiedParameters = new URLSearchParams({ ...parameters, apikey }).toString();
  const url = `${urlStart}?${stringifiedParameters}`;

  console.log(`Requesting ${url}`);

  return await fetch(url, {
    headers: {
      "accept-encoding": "gzip,deflate",
    },
  })
    .then(async (response) => {
      const responseContentType = response.headers.get("content-type");

      if (!response.ok) {
        if (responseContentType === "application/json") {
          const errorBody = await response.json();
          console.error(`accuweather.com responded with "${response.status}" status code. Response body logged below`);
          console.log(errorBody);
        } else {
          console.error(
            `accuweather.com responded with "${response.status}" status code and ${
              responseContentType ?? "missing"
            } content type.`
          );
        }
      }
      return await response.json();
    })
    .catch((error) => {
      console.error("Failed to get response from accuweather.com. Related error is logged below");
      console.error(error);
    });
}

export async function getAllAWData(lat: string, long: string): Promise<IAWAllData> {
  const awLocation = await getAWLocation(lat, long);

  const awLocationKey = awLocation.Key;

  const [awCurrentConditions, awHourlyForecast] = await Promise.all([
    getAWCurrentConditions(awLocationKey),
    getAWHourlyForecast(awLocationKey),
  ]);

  return {
    awLocation,
    awCurrentConditions,
    awHourlyForecast,
  };
}
