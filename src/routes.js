import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Sale from "./pages/Sale/Sale";
import Payment from "./pages/Payment/Payment";

export default function routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/sales/:id" component={Sale} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}
