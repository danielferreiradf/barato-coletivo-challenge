import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/Payment/Payment";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/offer/:id" component={Offer} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}
