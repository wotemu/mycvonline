import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';
import LoginWithGoogle from './GoogleLogin';

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
    <div className="reigister">
      <div className="register-form">
        <h2>Sign In</h2>
        <h5>Sign in to your account</h5>
        <form onSubmit={onSubmit}>
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
          <button type="submit" className="btn">
            Submit
          </button>
          <p className="">
            Don't have an account?{' '}
            <Link to="/register" className="link-to-register">
              Sign Up
            </Link>
          </p>
        </form>

        <LoginWithGoogle />
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
