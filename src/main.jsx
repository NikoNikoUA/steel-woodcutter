import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Globalstyle } from "../GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainColor: "#3030df",
    sectionColor: "#f4f4fd",
    darkColor: "#000000",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Globalstyle />
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/steel-woodcutter">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
