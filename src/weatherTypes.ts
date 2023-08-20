export interface ICurrentWeather {
  location: ILocation;
  temp: number;
  weatherText: string;
  range: IRange;
  cond: MyWeatherCondition;
}

interface IRange {
  min: string | number;
  max: string | number;
}

interface ILocation {
  name: string;
}

export interface IHoulyItem {
  datetime: string;
  temperature: number;
  conditions: MyWeatherCondition;
}

export interface IDailyForecastItem {
  datetime: string;
  conditions: number;
  temp: number;
  range: IRange;
  periodRange: IRange;
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
