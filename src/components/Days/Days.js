import React, { useState } from "react";
import moment from "moment";
import cn from "classnames";
import { useSelector } from "react-redux";

import "./Days.scss";
import DetailsModal from "../DetailsModal/DetailsModal";

const Days = (props) => {
  const [isModalOpen, toggleModal] = useState(false);
  const [selectedForecast, setSelectedForecast] = useState(null);
  const {
    data: { daily, timezone_offset },
  } = useSelector((state) => state);

  const onSelectDay = (forecast) => {
    setSelectedForecast(forecast);
    toggleModal(true);
  };

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
              onClick={() => onSelectDay(day)}
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

      {isModalOpen && selectedForecast && (
        <DetailsModal
          timezone_offset={timezone_offset}
          details={selectedForecast}
          isOpen={isModalOpen}
          closeModal={() => toggleModal(false)}
        />
      )}
    </div>
  );
};

Days.propTypes = {};

export default Days;
