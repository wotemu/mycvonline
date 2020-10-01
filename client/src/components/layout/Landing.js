import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mb-3">Create your resume</h1>
              <h3 className=""> Share the link to recruiters</h3>
              <p className="lead"> Create and read feeds</p>
              <hr />

              <Link to="/register" className="btn btn-lg btn-info mr-2 mb-2">
                <i className="fas fa-user-plus"></i> Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-light ">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
