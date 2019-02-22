
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    );
  }
}

export default Navigation;
