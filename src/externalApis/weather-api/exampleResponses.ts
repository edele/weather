import { type IWAGetCurrentResponse } from "./types";

export const testGetCurrentResponse: IWAGetCurrentResponse = {
  location: {
    name: "Emporia",
    region: "Kansas",
    country: "United States of America",
    lat: 38.4,
    lon: -96.18,
    tz_id: "America/Chicago",
    localtime_epoch: 1690123860,
    localtime: "2023-07-23 9:51",
  },
  current: {
    last_updated_epoch: 1690123500,
    last_updated: "2023-07-23 09:45",
    temp_c: 26.7,
    temp_f: 80.1,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 260,
    wind_dir: "W",
    pressure_mb: 1017,
    pressure_in: 30.03,
    precip_mm: 0,
    precip_in: 0,
    humidity: 62,
    cloud: 0,
    feelslike_c: 29.4,
    feelslike_f: 84.8,
    vis_km: 16,
    vis_miles: 9,
    uv: 5,
    gust_mph: 11.6,
    gust_kph: 18.7,
  },
};
