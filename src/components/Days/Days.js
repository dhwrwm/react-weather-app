import React from "react";
import { useSelector } from "react-redux";

import "./Days.scss";

const Days = (props) => {
  const { data } = useSelector((state) => state);
  console.log("the data is", data);
  return (
    <div className="Days flex">
      <div className="Days__day">Mon</div>
      <div className="Days__day">Tue</div>
      <div className="Days__day">Thur</div>
      <div className="Days__day">Fri</div>
      <div className="Days__day">Sat</div>
      <div className="Days__day">Sun</div>
    </div>
  );
};

Days.propTypes = {};

export default Days;
