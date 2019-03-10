/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Error from '../components/Error';
import AdminLandingView from '../containers/AdminLandingView';
import RegisterEmployeeView from '../containers/RegisterEmployeeView';
import AttendantView from '../containers/AttendantView';

const Routes = () => (
  <BrowserRouter>

    <div>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/admindashboard" exact strict component={AdminLandingView} />
        <Route path="/employees" exact strict component={RegisterEmployeeView} />
        <Route path="/attendantDashboard" exact strict component={AttendantView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default Routes;
