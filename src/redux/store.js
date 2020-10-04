import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import middleware from "./middleware";

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(middleware))
  );

  return {
    store,
  };
}
