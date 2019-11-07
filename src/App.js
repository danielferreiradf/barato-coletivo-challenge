import React from "react";

import "./styles/base/base.css";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <h1>Header</h1>
      <Routes />
      <h1>Footer</h1>
    </>
  );
};

export default App;
