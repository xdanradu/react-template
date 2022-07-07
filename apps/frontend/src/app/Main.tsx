import React, { lazy } from 'react';
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import('./templates/Home'));
const Test = lazy(() => import('./templates/Test'));


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </main>
);

export default Main;
