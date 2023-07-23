import Image from "next/image";
import React, { useMemo } from "react";
import { type ICurrentWeather, type IDailyForecastItem, type IHoulyItem } from "./weatherTypes";
import Head from "next/head";

export interface IAppProps {
  currentWeather: ICurrentWeather;
  hourly: IHoulyItem[];
  dailyForecast: IDailyForecastItem[];
}

export default function App(props: IAppProps): React.ReactNode {
  const { dailyForecast, currentWeather, hourly } = props;

  const hourlyWithCurrent = useMemo(() => {
    const now: IHoulyItem = {
      datetime: "Now",
      temperature: currentWeather.temp,
      conditions: currentWeather.cond,
    };
    return [now, ...hourly];
  }, [currentWeather.cond, currentWeather.temp, hourly]);

  return (
    <div id="root">
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <div className="header">
        <div className="location">{currentWeather.location.name}</div>

        <div className="temp">{currentWeather.temp}</div>
        <div className="conditions">{currentWeather.weatherText}</div>
        <div className="temp-hi-low">
          H:{currentWeather.range.max} &nbsp;L:{currentWeather.range.min}
        </div>
      </div>

      <div className="forecast">
        <div className="forecast-title">HOURLY FORECAST</div>
        <div className="scroller">
          <div className="forecast-list">
            {hourlyWithCurrent.map(({ datetime, temperature, conditions }, index) => {
              const [hour, dayPeriod] = datetime.split(" ");
              const isNow = index === 0;

              return (
                <div className="forecast-item" key={datetime}>
                  <span className="forecast-time">
                    {isNow ? (
                      "Now"
                    ) : (
                      <>
                        <span className="forecast-hour">{hour}</span>
                        <span className="forecast-day-period">{dayPeriod}</span>
                      </>
                    )}
                  </span>
                  <div className="forecast-icon">
                    <Image width={32} height={30} src={`/weather/${conditions}.png`} alt={conditions} />
                  </div>
                  <span className="forecast-temperature">{temperature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="daily">
        <div className="daily-title">10-DAY FORECAST</div>
        <div className="daily-list">
          {dailyForecast.map(({ datetime, temp, range: { min, max }, periodRange: { min: lowest, max: highest } }) => (
            <div className="daily-row" key={datetime}>
              <div className="daily-time">{datetime}</div>

              <div className="daily-conditions">
                <Image width={25.6} height={24} src={`/weather/rain.png`} alt="rain" />
                <span className="probability">60%</span>
              </div>

              <div className="daily-range">
                <span className="daily-min">{min}°</span>
                <span className="range">
                  <span className="range-meter" />
                  <span className="range-current" />
                </span>
                <span className="daily-max">{max}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
