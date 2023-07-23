import { type IHoulyItem, type ICurrentWeather, type MyWeatherCondition } from "../../weatherTypes";
import { type IAWCurrentConditions, type IAWHourlyForecastItem, type IAWLocation } from "./types";

export function mapAWIconToMyWeatherCondition(iconId: number): MyWeatherCondition {
  switch (iconId) {
    case 1: // Sunny
    case 2: // Mostly Sunny
    case 3: // Partly Sunny
      return "clear";

    case 4: // Intermittent Clouds
      return "partly-cloudy";

    case 5: // Hazy Sunshine
      return "haze";

    case 6: // Mostly Cloudy
    case 7: // Cloudy
    case 8: // Dreary
      return "cloudy";

    case 11: // Fog
      return "fog";

    case 12: // Showers
    case 15: // T-Storms
    case 18: // Rain
      return "night-drizzle";

    case 13: // Mostly Cloudy w/ Showers
    case 14: // Partly Sunny w/ Showers
    case 16: // Mostly Cloudy w/ T-Storms
    case 17: // Partly Sunny w/ T-Storms
      return "rain";

    case 19: // Flurries
    case 20: // Mostly Cloudy w/ Flurries
    case 21: // Partly Sunny w/ Flurries
      return "windy";

    case 22: // Snow
    case 23: // Mostly Cloudy w/ Snow
    case 24: // Ice
    case 25: // Sleet
      return "snow";

    case 26: // Freezing Rain
    case 29: // Rain and Snow
      return "freezing-rain";

    case 30: // Hot
      return "clear";

    case 31: // Cold
    case 32: // Windy
      return "windy";

    case 33: // Clear
    case 34: // Mostly Clear
      return "night-clear";

    case 35: // Partly Cloudy
    case 36: // Intermittent Clouds
      return "night-cloudy";

    case 37: // Hazy Moonlight
      return "fog";

    case 38: // Mostly Cloudy
      return "night-cloudy";

    case 39: // Partly Cloudy w/ Showers
    case 40: // Mostly Cloudy w/ Showers
    case 41: // Partly Cloudy w/ T-Storms
    case 42: // Mostly Cloudy w/ T-Storms
    case 43: // Mostly Cloudy w/ Flurries
    case 44: // Mostly Cloudy w/ Snow
      return "night-drizzle";

    default:
      return "rain";
  }
}

const hourFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  hour12: true,
});

export function formatHour(date: Date): string {
  return hourFormatter.format(date);
}

export function formatTemperature(temperature: number): string {
  return `${Math.round(temperature)}°`;
}

export function currentWeatherFromAW({
  awLocation,
  awCurrentConditions,
  awHourlyForecast,
}: {
  awLocation: IAWLocation;
  awCurrentConditions: IAWCurrentConditions[];
  awHourlyForecast: IAWHourlyForecastItem[];
}): ICurrentWeather {
  const todayTemperatures = awHourlyForecast.map((x) => x.Temperature.Value);

  return {
    location: {
      lat: awLocation.GeoPosition.Latitude,
      lon: awLocation.GeoPosition.Longitude,
      name: awLocation.AdministrativeArea.EnglishName,
    },
    temp: formatTemperature(awCurrentConditions[0].Temperature.Metric.Value),
    weatherText: awCurrentConditions[0].WeatherText,
    cond: mapAWIconToMyWeatherCondition(awCurrentConditions[0].WeatherIcon),
    range: {
      max: formatTemperature(Math.max(...todayTemperatures)),
      min: formatTemperature(Math.min(...todayTemperatures)),
    },
  };
}

export function hourlyForecastFromAW(awHourlyForecast: IAWHourlyForecastItem[]): IHoulyItem[] {
  return awHourlyForecast.map((awHourItem) => {
    return {
      datetime: formatHour(new Date(awHourItem.DateTime)),
      temperature: formatTemperature(awHourItem.Temperature.Value),
      conditions: mapAWIconToMyWeatherCondition(awHourItem.WeatherIcon),
    };
  });
}
