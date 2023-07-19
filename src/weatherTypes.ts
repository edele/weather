export interface ICurrentWeather {
  location: Location;
  temp: string;
  cond: number;
  range: Range;
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
  conditions: number;
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
