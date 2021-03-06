import { combineReducers } from "redux";

import appReducer from "../containers/App/reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    appReducer,
    ...injectedReducers
  });

  return persistReducer(persistConfig, rootReducer);
}
