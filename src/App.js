import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Location from "./components/Location/Location";
import Days from "./components/Days/Days";
import "./App.scss";
import { getWeatherForcast } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position);
      dispatch(getWeatherForcast(latitude, longitude));
    });
  }, [dispatch]);

  return (
    <div className="App flex">
      <div className="App__wrapper flex">
        <Location />
        <Days />
      </div>
    </div>
  );
}

export default App;
