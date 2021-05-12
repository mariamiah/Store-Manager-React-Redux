/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import Error from './components/Error';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact strict component={LoginContainer} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
