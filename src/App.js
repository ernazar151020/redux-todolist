import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./components/Main";
import { reducer } from "./reduce";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
