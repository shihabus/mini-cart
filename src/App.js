import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import RootApp from "./containers/App";

import configureStore from "./store/configureStore";

const initialState = {};
const { store, persistor } = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
