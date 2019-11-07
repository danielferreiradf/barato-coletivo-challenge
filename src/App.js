import React from "react";
import "./styles/base/base.css";

import { ThemeProvider } from "react-jss";
import theme from "./styles/theme/theme";

import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
