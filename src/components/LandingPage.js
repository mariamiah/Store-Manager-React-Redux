/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class LandingPage extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5" id="signin">
              <div className="card-body">
                <h5 className="card-title text-center"><strong>STORE MANAGER</strong></h5>
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={onSubmit}>
                  <div className="form-label-group">
                    <input type="text" id="inputText" className="form-control" placeholder="Username" required autoFocus name="username" onChange={onChange} />
                    <label htmlFor="inputText">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={onChange} />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
                    <i className="fab fa-google mr-2" />
                    {' '}
Sign in with Google
                  </button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
                    <i className="fab fa-facebook-f mr-2" />
                    {' '}
Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LandingPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
