/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AdminLanding from '../components/AdminLanding';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AdminLandingView extends Component {
  render() {
    return (
      <div>
        <Header />
        <AdminLanding />
        <Footer />
      </div>
    );
  }
}
export default AdminLandingView;
