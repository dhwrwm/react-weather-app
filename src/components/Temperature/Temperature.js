import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./Temperature.scss";

const Temperature = (props) => {
  const {
    data: {
      current: { temp },
    },
  } = useSelector((state) => state);
  if (!temp) {
    return null;
  }
  return (
    <div className="Temperature">
      <span className="Temperature__number">
        {temp}°<span className="Temperature__unit">C</span>
      </span>
      <div />
    </div>
  );
};

Temperature.propTypes = {};

export default Temperature;
