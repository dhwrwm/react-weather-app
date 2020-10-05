import React from "react";
import { useSelector } from "react-redux";

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

export default Temperature;
