import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./components/Home";

/**
 * 0.13 升级到 1.0版本出现的问题
 * Linking to Index routes 
 * address: (https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v1.0.0.md)
 */
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);