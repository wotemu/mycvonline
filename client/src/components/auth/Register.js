import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-8 col-xs-12 m-auto loginForm p-3"
          style={{ borderRadius: '5px' }}
        >
          <h2 className="myOpacity text-center">Sign Up</h2>
          <h5 className="myOpacity text-center pb-4">Create account</h5>
          <form noValidate onSubmit={onSubmit} className="p-3">
            <TextFieldGroup
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
            <TextFieldGroup
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
            />
            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
            />
            <TextFieldGroup
              placeholder="Confirm Password"
              name="password2"
              type="password"
              value={password2}
              onChange={onChange}
            />
            <input type="submit" className="btn formHeader btn-block" />

            <p className="my-3">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
