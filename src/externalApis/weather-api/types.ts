export interface IWAGetCurrentResponse {
  location: IWALocation;
  current: IWACurrent;
}

export interface IWADailyForecastResponse extends IWAGetCurrentResponse {
  forecast: {
    forecastday: IWAForecastDay[];
  };
}

interface IWACurrent {
  last_updated_epoch: number;

  /** @example "2023-07-23 09:45" */
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: IWACondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface IWACondition {
  /** @example "Sunny" */
  text: string;

  /** @example "//cdn.weatherapi.com/weather/64x64/day/113.png" */
  icon: string;

  /** @example 1000 */
  code: number;
}

interface IWALocation {
  /** @example "Emporia" */
  name: string;

  /** @example "Kansas" */
  region: string;

  /** @example "United States of America" */
  country: string;
  lat: number;
  lon: number;

  /** @example "America/Chicago" */
  tz_id: string;

  /** @example 1690123860 */
  localtime_epoch: number;

  /** @example "2023-07-23 9:51" */
  localtime: string;
}

interface IWAForecastDay {
  date: string;
  date_epoch: number;
  day: IWADay;
  astro: IWAAstro;
  hour: IWAHour[];
}

interface IWAHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

interface IWAAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

interface IWADay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}
