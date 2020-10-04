import initialState from "./initialState";
import {
  WEATHER_FORCAST_REQUESTED,
  WEATHER_FORCAST_SUCCEEDED,
  WEATHER_FORCAST_FAILED,
} from "./constants";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_FORCAST_REQUESTED: {
      return Object.assign({}, state, { isFetching: true });
    }

    case WEATHER_FORCAST_SUCCEEDED: {
      return Object.assign({}, state, { isFetching: false, data: action.data });
    }

    case WEATHER_FORCAST_FAILED: {
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    }
    default:
      return state;
  }
}
