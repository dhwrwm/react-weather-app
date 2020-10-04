import React from "react";
import { useSelector } from "react-redux";

import "./Headline.scss";

const Headline = () => {
  const {
    data: { current },
  } = useSelector((state) => state);
  if (!current) {
    return null;
  }
  const { weather, humidity, wind_speed } = current;
  const { description } = weather[0];

  return (
    <div className="Headline">
      <div className="Headline__text">It's {description}</div>
      <div className="Headline__details">
        <div className="Headline__detail-items">
          <div className="Headline__details-title">Humidity</div>
          <div className="Headline__details-unit">{humidity} %</div>
        </div>
        <div className="Headline__item-seperator" />
        <div className="Headline__detail-items">
          <div className="Headline__details-title">Wind</div>
          <div className="Headline__details-unit">
            {(wind_speed * 3.6).toFixed(2)} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
