export interface ICurrentWeather {
  location: Location;
  temp: string;
  weatherText: string;
  range: Range;
  cond: MyWeatherCondition;
}

interface Range {
  min: string;
  max: string;
}

interface Location {
  lat: number;
  lon: number;
  name: string;
}

export interface IHoulyItem {
  datetime: string;
  temperature: string;
  conditions: MyWeatherCondition;
}

export interface IDailyForecastItem {
  datetime: string;
  conditions: number;
  temp: number;
  range: IRange;
  periodRange: IRange;
}

interface IRange {
  min: number;
  max: number;
}

export type MyWeatherCondition =
  | "clear"
  | "cloudy"
  | "fog"
  | "freezing-rain"
  | "haze"
  | "night-clear"
  | "night-cloudy"
  | "night-drizzle"
  | "partly-cloudy"
  | "rain"
  | "snow"
  | "windy";
