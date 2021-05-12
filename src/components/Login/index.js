/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import './login.css';

const Login = ({ onSubmit, onChange, loading }) => (
  <form className="login" onSubmit={onSubmit} data-testid="login-form">
    <h5 className="store-title">STORE MANAGER</h5>
    <input type="text" placeholder="Username" name="username" onChange={onChange} required />
    <input type="password" placeholder="Password" name="password" onChange={onChange} required />
    <button type="submit">
      {loading ? 'Login...' : 'Login'}
    </button>
  </form>
);


Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
