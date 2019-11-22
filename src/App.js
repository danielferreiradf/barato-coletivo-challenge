import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";
import store from "./store/store";

import "./styles/base/base.css";
import theme from "./styles/theme/theme";

import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
