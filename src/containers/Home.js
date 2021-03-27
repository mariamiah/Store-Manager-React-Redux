/* eslint-disable react/require-default-props */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import LandingPage from '../components/LandingPage';
import LoginAction from '../actions/LoginAction';

const jwt = require('jsonwebtoken');
// eslint-disable-next-line react/prefer-stateless-function
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginState.user) {
      this.handleSuccess(nextProps.loginState);
    }

    if (!nextProps.loginState.user) {
      this.handleErrors(nextProps);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.LoginAction({username: this.state.username, password: this.state.password});
    this.setState({
      loading: true
    })
  }

  handleSuccess(loginState) {
    this.setState({
      loading: loginState.loading
    })
    if (loginState.user.token) {
      toast.success(
        <p className="text-white">
          Login Successful
        </p>,
      );
      const { token } = loginState.user;
      const decoded = jwt.decode(token);
      if (decoded.roles[0] === 'Admin') {
        setTimeout(() => window.location.assign('/admindashboard'), 2000);
      } else {
        setTimeout(() => window.location.assign('/attendantdashboard'), 2000);
      }
    }
  }

  handleErrors(props) {
    this.setState({
      loading: props.loginState.loading
    })
    if (props.loginState.error) {
      toast.error(
        <p>
          Incorrect username or password.
        </p>,
      );
    }
  }

  render() {
    return (
      <div>
        <LandingPage onChange={this.handleChange} onSubmit={this.handleSubmit} loading={this.state.loading} />
        <ToastContainer />
      </div>
    );
  }
}
Home.propTypes = {
  LoginAction: PropTypes.func,
};

const mapStateToProps = state => ({
  username: state.LoginReducer.username,
  password: state.LoginReducer.password,
  loginState: state.LoginReducer,
});
export default connect(mapStateToProps, { LoginAction })(Home);
