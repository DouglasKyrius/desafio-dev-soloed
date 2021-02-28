import React from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;