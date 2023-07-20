import React from "react";

import { Rain } from "./weather/Rain";
import { Thunder } from "./weather/Thunder";
import {
  ICurrentWeather,
  IDailyForecastItem,
  IHoulyItem,
} from "./weatherTypes";

export interface IAppProps {
  currentWeather: ICurrentWeather;
  hourly: IHoulyItem[];
  dailyForecast: IDailyForecastItem[];
}

export default function App(props: IAppProps) {
  const { dailyForecast, currentWeather, hourly } = props;

  return (
    <div id="root">
      <div className="header">
        <div className="location">{currentWeather.location.name}</div>

        <div className="temp">{currentWeather.temp}</div>
        <div className="conditions">
          {currentWeather.cond == 0
            ? "Sunny"
            : currentWeather.cond == 1
            ? "Partly Cloudy"
            : currentWeather.cond == 2
            ? "Cloudy"
            : currentWeather.cond == 3
            ? "Light Rain"
            : currentWeather.cond == 4
            ? "Rain"
            : currentWeather.cond == 5
            ? "Heavy Rain"
            : currentWeather.cond == 6
            ? "Thunder"
            : ""}
          <br />
          H:{currentWeather.range.max} L:{currentWeather.range.min}
        </div>
      </div>

      <div className="forecast">
        <div className="forecast-title">HOURLY FORECAST</div>
        <div className="scroller">
          <div className="forecast-list">
            {hourly.map(({ datetime, temperature }) => (
              <div className="forecast-item" key={datetime}>
                <span>{datetime}</span>
                <span>
                  <Thunder />
                </span>
                <span>{temperature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="daily">
        <div className="daily-title">10-DAY FORECAST</div>
        <div className="daily-list">
          {dailyForecast.map(
            ({
              datetime,
              temp,
              range: { min, max },
              periodRange: { min: lowest, max: highest },
            }) => (
              <div className="daily-row" key={datetime}>
                <div className="daily-time">{datetime}</div>

                <div className="daily-conditions">
                  <Rain />
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
            )
          )}
        </div>
      </div>
    </div>
  );
}
