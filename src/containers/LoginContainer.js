import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Login from '../components/Login';
import LoginAction from '../actions/LoginAction';

const jwt = require('jsonwebtoken');

const LoginContainer = () => {
  const dispatch = useDispatch();
  const initialLoginDetails = {
    username: '',
    password: '',
  };
  const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
  const [loading, setLoading] = useState(false);
  const loginState = useSelector(state => state.LoginReducer);
  const { user, error } = loginState;

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction({ username: loginDetails.username, password: loginDetails.password }));
    setLoading(true);
  };

  const handleSuccess = () => {
    setLoading(false);
    if (user.token) {
      toast.success(
        <p className="text-white">
          Login Successful
        </p>,
      );
      const { token } = user;
      const decoded = jwt.decode(token);
      if (decoded.roles[0] === 'Admin') {
        setTimeout(() => window.location.assign('/admindashboard'), 2000);
      } else {
        setTimeout(() => window.location.assign('/attendantdashboard'), 2000);
      }
    }
  };

  const handleErrors = () => {
    setLoading(false);
    if (error) {
      toast.error(
        <p>
          Incorrect username or password.
        </p>,
      );
    }
  };

  useEffect(() => (user ? handleSuccess() : handleErrors()),
    [loginState]);

  return (
    <div>
      <Login onChange={handleChange} onSubmit={handleSubmit} loading={loading} />
      <ToastContainer />
    </div>
  );
};

export default LoginContainer;
