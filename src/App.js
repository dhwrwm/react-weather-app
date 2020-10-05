import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import Heading from "./components/Headline/Headline";
import Temperature from "./components/Temperature/Temperature";
import Location from "./components/Location/Location";
import Days from "./components/Days/Days";
import Forecast from "./components/Forecast/Forecast";
import Loading from "./components/Loading/Loading";
import { getWeatherForcast } from "./redux/actions";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const { data, isFetching } = useSelector((state) => state);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;
      setLocationEnabled(true);
      dispatch(getWeatherForcast(latitude, longitude));
    });
  }, []);

  return (
    <div className="App flex">
      <div className="App__wrapper flex">
        {isLocationEnabled && isEmpty(data) && isFetching ? (
          <Loading />
        ) : (
          <div className="App__enable-location">
            Please enable access to you current location.
          </div>
        )}
        {!isEmpty(data) && (
          <Fragment>
            <Location />
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
