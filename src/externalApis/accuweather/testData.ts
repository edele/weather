/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable sonarjs/no-duplicate-string */

import { type IAWAllData, type IAWCurrentConditions, type IAWHourlyForecastItem, type IAWLocation } from "./types";

export const testAccuweatherLocation: IAWLocation = {
  Version: 1,
  Key: "2515394",
  Type: "City",
  Rank: 55,
  LocalizedName: "Narvskiy",
  EnglishName: "Narvskiy",
  PrimaryPostalCode: "",
  Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
  Country: { ID: "RU", LocalizedName: "Russia", EnglishName: "Russia" },
  AdministrativeArea: {
    ID: "SPE",
    LocalizedName: "Saint Petersburg",
    EnglishName: "Seongnam-si",
    Level: 1,
    LocalizedType: "Federal City",
    EnglishType: "Federal City",
    CountryID: "RU",
  },
  TimeZone: {
    Code: "MSK",
    Name: "Europe/Moscow",
    GmtOffset: 3,
    IsDaylightSaving: false,
    NextOffsetChange: null,
  },
  GeoPosition: {
    Latitude: 59.89,
    Longitude: 30.266,
  },
  IsAlias: false,
  ParentCity: {
    Key: "295212",
    LocalizedName: "Saint Petersburg",
    EnglishName: "Saint Petersburg",
  },
  SupplementalAdminAreas: [{ Level: 2, LocalizedName: "Kirovsky", EnglishName: "Kirovsky" }],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
    "Radar",
  ],
};

export const testAWCurrentConditions: IAWCurrentConditions[] = [
  {
    LocalObservationDateTime: "2023-07-22T20:20:00+03:00",
    EpochTime: 1690046400,
    WeatherText: "Partly Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 21.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 67,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink: "http://www.accuweather.com/en/ru/narvskiy/2515394/current-weather/2515394?lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/current-weather/2515394?lang=en-us",
  },
];

export const testAWHourlyForecast: IAWHourlyForecastItem[] = [
  {
    DateTime: "2023-07-23T00:00:00+03:00",
    EpochDateTime: 1690059600,
    WeatherIcon: 33,
    IconPhrase: "Clear",
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 21.1,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 16,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=0&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=0&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T01:00:00+03:00",
    EpochDateTime: 1690063200,
    WeatherIcon: 33,
    IconPhrase: "Clear",
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 19.2,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 20,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=1&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=1&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T02:00:00+03:00",
    EpochDateTime: 1690066800,
    WeatherIcon: 33,
    IconPhrase: "Clear",
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 18.9,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 20,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=2&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=2&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T03:00:00+03:00",
    EpochDateTime: 1690070400,
    WeatherIcon: 33,
    IconPhrase: "Clear",
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 19.1,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 20,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=3&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=3&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T04:00:00+03:00",
    EpochDateTime: 1690074000,
    WeatherIcon: 33,
    IconPhrase: "Clear",
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 12.9,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 20,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=4&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=4&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T05:00:00+03:00",
    EpochDateTime: 1690077600,
    WeatherIcon: 1,
    IconPhrase: "Sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 13.5,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 20,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=5&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=5&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T06:00:00+03:00",
    EpochDateTime: 1690081200,
    WeatherIcon: 1,
    IconPhrase: "Sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 14.2,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 16,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=6&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=6&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T07:00:00+03:00",
    EpochDateTime: 1690084800,
    WeatherIcon: 1,
    IconPhrase: "Sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 15.3,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 7,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=7&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=7&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T08:00:00+03:00",
    EpochDateTime: 1690088400,
    WeatherIcon: 2,
    IconPhrase: "Mostly sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 16.8,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 7,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=8&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=8&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T09:00:00+03:00",
    EpochDateTime: 1690092000,
    WeatherIcon: 2,
    IconPhrase: "Mostly sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 18.1,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 7,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=9&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=9&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T10:00:00+03:00",
    EpochDateTime: 1690095600,
    WeatherIcon: 3,
    IconPhrase: "Partly sunny",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 19,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 7,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=10&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=10&unit=c&lang=en-us",
  },
  {
    DateTime: "2023-07-23T11:00:00+03:00",
    EpochDateTime: 1690099200,
    WeatherIcon: 4,
    IconPhrase: "Intermittent clouds",
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 19.5,
      Unit: "C",
      UnitType: 17,
    },
    PrecipitationProbability: 7,
    MobileLink:
      "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=11&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/ru/narvskiy/2515394/hourly-weather-forecast/2515394?day=2&hbhhour=11&unit=c&lang=en-us",
  },
];

/* eslint-enable sonarjs/no-duplicate-string */
/* eslint-enable unicorn/numeric-separators-style */

export function getAllTestAWData(): IAWAllData {
  return {
    awLocation: testAccuweatherLocation,
    awCurrentConditions: testAWCurrentConditions,
    awHourlyForecast: testAWHourlyForecast,
  };
}
