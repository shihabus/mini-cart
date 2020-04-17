/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createReducer from "./rootReducer";

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const middlewares = [];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  // redux persist
  let persistor = persistStore(store);

  return { store, persistor };
}
