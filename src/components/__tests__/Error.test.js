/* eslint-disable no-undef */
import ReactDOM from 'react-dom';
import React from 'react';
import Error from '../Error';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
});
