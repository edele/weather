export interface IAWHourlyForecastItem {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: IAWTemperature;
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}

interface IAWTemperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface IAWCurrentConditions {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: {
    Metric: IAWTemperature;
    Imperial: IAWTemperature;
  };
  MobileLink: string;
  Link: string;
}

export interface IAWLocation {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: IAWRegion;
  Country: IAWRegion;
  AdministrativeArea: IAWAdministrativeArea;
  TimeZone: IAWTimeZone;
  GeoPosition: IAWGeoPosition;
  IsAlias: boolean;
  ParentCity: IAWParentCity;
  SupplementalAdminAreas: IAWSupplementalAdminArea[];
  DataSets: string[];
}

interface IAWSupplementalAdminArea {
  Level: number;
  LocalizedName: string;
  EnglishName: string;
}

interface IAWParentCity {
  Key: string;
  LocalizedName: string;
  EnglishName: string;
}

interface IAWGeoPosition {
  Latitude: number;
  Longitude: number;
}

interface IAWTimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange?: any;
}

interface IAWAdministrativeArea {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

interface IAWRegion {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export interface IAWAllData {
  awLocation: IAWLocation;
  awCurrentConditions: IAWCurrentConditions[];
  awHourlyForecast: IAWHourlyForecastItem[];
}
