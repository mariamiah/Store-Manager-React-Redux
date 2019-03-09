/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AttendantDashboard from '../components/AttendantDashboard';

class AttendantView extends Component {
  render() {
    return (
      <div>
        <AttendantDashboard />
      </div>
    );
  }
}
export default AttendantView;
