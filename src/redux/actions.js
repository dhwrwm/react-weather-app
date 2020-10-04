import { CALL_API } from "./middleware";
import {
  WEATHER_API_URL,
  WEATHER_FORCAST_REQUESTED,
  WEATHER_FORCAST_SUCCEEDED,
  WEATHER_FORCAST_FAILED,
} from "./constants";

export const getWeatherForcast = (lat, lon) => {
  const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=4d1cf36dcca326ade6f981bb8e276164`;
  return {
    [CALL_API]: {
      url,
      method: "get",
      types: [
        WEATHER_FORCAST_REQUESTED,
        WEATHER_FORCAST_SUCCEEDED,
        WEATHER_FORCAST_FAILED,
      ],
    },
  };
};
