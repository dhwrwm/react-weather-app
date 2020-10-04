import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import "./Forecast.scss";

const Forecast = () => {
  const {
    data: { hourly, timezone_offset },
  } = useSelector((state) => state);
  return (
    <div className="Forecast">
      {hourly &&
        hourly.slice(0, 24).map((forecast, index) => {
          const { dt, temp, weather } = forecast;
          const date = new Date(dt * 1000 - timezone_offset * 1000);
          const hour = moment(date).format("hA");
          const iconurl =
            "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
          return (
            <div key={index} className="Forecast__hour flex">
              <div className="Forecast__hour-time">{hour}</div>
              <div className="Forecast__hour-icon">
                <img src={iconurl} alt={`${hour}'s Icon`} />
              </div>
              <div className="Forecast__hour-temp">{Math.round(temp)}°</div>
            </div>
          );
        })}
    </div>
  );
};

export default Forecast;
