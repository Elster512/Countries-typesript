import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeHelper from "./helper/themeHelper";
import { loadAllCountries } from "./slices/countries/countries-asyncActions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
store.dispatch(loadAllCountries());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeHelper>
        <App />
      </ThemeHelper>
    </Provider>
  </BrowserRouter>
);
