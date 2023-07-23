import { type IUserLocationData } from "../locationTypes";

const geopluginTestResponse: IGeopluginResponse = {
  geoplugin_request: "92.100.181.24",
  geoplugin_status: 200,
  geoplugin_delay: "1ms",
  geoplugin_credit:
    "Some of the returned data includes GeoLite data created by MaxMind, available from <a href='http://www.maxmind.com'>http://www.maxmind.com</a>.",
  geoplugin_city: "St Petersburg",
  geoplugin_region: "St.-Petersburg",
  geoplugin_regionCode: "SPE",
  geoplugin_regionName: "St.-Petersburg",
  geoplugin_areaCode: "",
  geoplugin_dmaCode: "",
  geoplugin_countryCode: "RU",
  geoplugin_countryName: "Russia",
  geoplugin_inEU: 0,
  geoplugin_euVATrate: false,
  geoplugin_continentCode: "EU",
  geoplugin_continentName: "Europe",
  geoplugin_latitude: "59.8983",
  geoplugin_longitude: "30.2618",
  geoplugin_locationAccuracyRadius: "5",
  geoplugin_timezone: "Europe/Moscow",
  geoplugin_currencyCode: "RUB",
  geoplugin_currencySymbol: "руб",
  geoplugin_currencySymbol_UTF8: "руб",
  geoplugin_currencyConverter: 90.2898,
};

interface IGeopluginResponse {
  geoplugin_request: string;
  geoplugin_status: number;
  geoplugin_delay: string;
  geoplugin_credit: string;
  geoplugin_city: string;
  geoplugin_region: string;
  geoplugin_regionCode: string;
  geoplugin_regionName: string;
  geoplugin_areaCode: string;
  geoplugin_dmaCode: string;
  geoplugin_countryCode: string;
  geoplugin_countryName: string;
  geoplugin_inEU: number;
  geoplugin_euVATrate: boolean;
  geoplugin_continentCode: string;
  geoplugin_continentName: string;
  geoplugin_latitude: string;
  geoplugin_longitude: string;
  geoplugin_locationAccuracyRadius: string;
  geoplugin_timezone: string;
  geoplugin_currencyCode: string;
  geoplugin_currencySymbol: string;
  geoplugin_currencySymbol_UTF8: string;
  geoplugin_currencyConverter: number;
}

const localhostIp = "::1";

export async function getLocationData(ip: string): Promise<IUserLocationData | null> {
  const stringifiedParameters = new URLSearchParams({ ip }).toString();
  const url = `http://www.geoplugin.net/json.gp?${stringifiedParameters}`;

  if (ip === localhostIp) return cityDataFromGeopluginResponse(geopluginTestResponse);

  console.log(`Requesting IP info from ${url}`);

  return await fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`geoplugin.net responded with "${response.status}" status code.`);
      }
      return await response.json();
    })
    .then(cityDataFromGeopluginResponse)
    .catch((error) => {
      console.error("Failed to get city name from geoplugin.net. Related error is logged below");
      console.error(error);

      return null;
    });
}

function cityDataFromGeopluginResponse(json: IGeopluginResponse): IUserLocationData {
  return {
    cityName: json.geoplugin_city,
    lat: json.geoplugin_latitude,
    long: json.geoplugin_longitude,
  };
}
