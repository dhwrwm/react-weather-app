import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import Heading from "./components/Headline/Headline";
import Temperature from "./components/Temperature/Temperature";
import Location from "./components/Location/Location";
import Days from "./components/Days/Days";
import Forecast from "./components/Forecast/Forecast";
import { getWeatherForcast } from "./redux/actions";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;

      dispatch(getWeatherForcast(latitude, longitude));
    });
  }, []);

  return (
    <div className="App flex">
      <div className="App__wrapper flex">
        <Location />
        {!isEmpty(data) && (
          <Fragment>
            <Heading />
            <Temperature />
            <div className="App__main">
              <Forecast />
              <Days />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
