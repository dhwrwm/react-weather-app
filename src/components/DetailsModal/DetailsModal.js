import React from "react";
import Modal from "react-modal";
import moment from "moment";

import "./DetailsModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DetailsModal = ({ isOpen, closeModal, details, timezone_offset }) => {
  console.log("The details is", details);
  const { dt, temp, weather, wind_speed, humidity } = details;
  const { description, icon } = weather[0];
  const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  const sunriseTime = new Date(dt * 1000 - timezone_offset * 1000);
  const date = moment(sunriseTime).format("ddd ll");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Forecast details modal"
    >
      <div className="Details">
        <div className="Details__date">{date}</div>
        <div className="Details__heading">It's {description}</div>
        <img src={iconurl} alt="Details modal" className="Details__image" />
        <div className="Headline__details">
          <div className="Details__block-title">Temperatures</div>
          <div className="Headline__detail-items">
            <div className="Headline__details-title">Day</div>
            <div className="Headline__details-unit">
              {temp.day}°<span className="Temperature__unit">C</span>
            </div>
          </div>
          <div className="Headline__detail-items">
            <div className="Headline__details-title">Night</div>
            <div className="Headline__details-unit">
              {temp.night}°<span className="Temperature__unit">C</span>
            </div>
          </div>
          <div className="Headline__detail-items">
            <div className="Headline__details-title">Maximum</div>
            <div className="Headline__details-unit">
              {temp.max}°<span className="Temperature__unit">C</span>
            </div>
          </div>
          <div className="Headline__detail-items">
            <div className="Headline__details-title">Minimum</div>
            <div className="Headline__details-unit">
              {temp.min}°<span className="Temperature__unit">C</span>
            </div>
          </div>
          <div className="Headline__item-seperator" />
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
    </Modal>
  );
};

export default DetailsModal;
