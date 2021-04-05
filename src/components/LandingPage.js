import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadingSpinner } from './Loader';

const LandingPage = ({onSubmit, onChange, loading}) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5" id="signin">
              <div className="card-body">
                <h5 className="card-title text-center"><strong>STORE MANAGER</strong></h5>
                <form className="form-signin" onSubmit={onSubmit}>
                  <div className="form-label-group">
                    <input type="text" id="inputText" className="form-control" placeholder="Username" required autoFocus name="username" onChange={onChange} />
                    <label htmlFor="inputText">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={onChange} />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button className="btn btn-lg btn-success btn-block text-uppercase signin-btn" type="submit">login<span>{loading ? <LoadingSpinner />: null}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
LandingPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default LandingPage;