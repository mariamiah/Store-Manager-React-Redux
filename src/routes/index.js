/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact strict component={Home} />
      </Switch>
  </BrowserRouter>
);


export default Routes;
