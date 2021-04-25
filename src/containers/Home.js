import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import LandingPage from '../components/LandingPage';
import LoginAction from '../actions/LoginAction';
import LoginReducer from '../reducers/LoginReducer';

const jwt = require('jsonwebtoken');
export const Home = () => {
    const initialState = {
      username: '',
      password: '',
    }
    const [state, dispatch] = useReducer(LoginReducer, initialState)
    const [userDetails, setUserDetails] = useState(initialState)


    // useEffect(() => {
    //   if(props.loginState.user) {
    //     handleSuccess(props.loginState)
    //   }
    //   if(!props.loginState.User) {
    //     handleErrors(props)
    //   }
    // }, [props])

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction({
      username: userDetails.username,
      password: userDetails.password,
      loading: true
    }))
  }

  // const handleSuccess = (loginState)  => {
  //   this.setState({
  //     loading: loginState.loading
  //   })
  //   if (loginState.user.token) {
  //     toast.success(
  //       <p className="text-white">
  //         Login Successful
  //       </p>,
  //     );
  //     const { token } = loginState.user;
  //     const decoded = jwt.decode(token);
  //     if (decoded.roles[0] === 'Admin') {
  //       setTimeout(() => window.location.assign('/admindashboard'), 2000);
  //     } else {
  //       setTimeout(() => window.location.assign('/attendantdashboard'), 2000);
  //     }
  //   }
  // }

  // const handleErrors = (props) => {
  //   this.setState({
  //     loading: props.loginState.loading
  //   })
  //   if (props.loginState.error) {
  //     toast.error(
  //       <p>
  //         Incorrect username or password.
  //       </p>
  //     );
  //   }
  // }

    return (
        <>
        <LandingPage onChange={handleChange} onSubmit={handleSubmit} loading={userDetails.loading} />
        <ToastContainer />
      </>
    );
}
Home.propTypes = {
  LoginAction: PropTypes.func,
};
export default Home;
