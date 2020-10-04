import React from "react";
import { useSelector } from "react-redux";

import "./Location.scss";

const Location = (props) => {
  const {
    data: { timezone },
  } = useSelector((state) => state);

  if (!timezone) {
    return null;
  }
  return <div className="Location">{timezone}</div>;
};

export default Location;
