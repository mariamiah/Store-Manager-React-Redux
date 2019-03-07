/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Error from '../components/Error';
import AdminLandingView from '../containers/AdminLandingView';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/admindashboard" exact strict component={AdminLandingView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default Routes;
