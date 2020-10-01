import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';

import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else {
  }

  return (
    <div className="container ">
      <div className="row ">
        <div
          className="col-md-6 m-auto loginForm  p-3"
          style={{ borderRadius: '5px' }}
        >
          <h2 className="myOpacity text-center">Log In</h2>
          <h5 className="myOpacity text-center pb-4">
            Sign in to your account
          </h5>
          <form onSubmit={onSubmit} className="p-3">
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              required
            />

            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
            <input type="submit" className="btn formHeader btn-block" />
            <p className="my-1">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
