import React from "react";
import moment from "moment";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

// import { getWeatherForcast } from "../../redux/actions";
import "./Days.scss";

const Days = (props) => {
  // const dispatch = useDispatch();
  const {
    data: { daily, timezone_offset },
  } = useSelector((state) => state);

  // const onSelectDay = (dt) => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const { latitude, longitude } = position.coords;
  //     dispatch(getWeatherForcast(latitude, longitude, dt));
  //   });
  // };
  return (
    <div className="Days">
      {daily &&
        daily.map((day, index) => {
          const { dt, temp, weather } = day;
          const date = new Date(dt * 1000 - timezone_offset * 1000);
          const weekday = moment(date).format("ddd");
          const iconurl =
            "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
          return (
            <div
              key={index}
              className={cn("Days__day", { today: index === 0 })}
              // onClick={() => onSelectDay(dt)}
            >
              <div className="Days__weekday">{weekday}</div>
              <img
                className="Days__icon"
                src={iconurl}
                alt={`${weekday}'s Icon`}
              />
              <div className="Days__temperature">{Math.round(temp.day)}°</div>
            </div>
          );
        })}
    </div>
  );
};

Days.propTypes = {};

export default Days;
