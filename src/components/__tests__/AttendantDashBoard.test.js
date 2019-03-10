/* eslint-disable no-undef */
import ReactDOM from 'react-dom';
import React from 'react';
import AttendantDashboard from '../AttendantDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttendantDashboard />, div);
});
