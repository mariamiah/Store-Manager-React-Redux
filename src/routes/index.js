import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Error from '../components/Error';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default Routes;
