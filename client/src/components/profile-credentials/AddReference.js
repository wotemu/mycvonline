import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReference } from '../../actions/profileActions';

const AddReference = ({ addReference, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: ''
  });

  const { name, position, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addReference(formData, history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
          <Link to="/dashboard" className="btn btn-light">
            <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
          </Link>
          <div className="add-reference p-5">
            <h5 className="formHeader p-2">Add Reference</h5>

            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* name"
                name="name"
                value={name}
                onChange={onChange}
              />
              <TextFieldGroup
                placeholder="* Position"
                name="position"
                value={position}
                onChange={onChange}
              />
              <TextFieldGroup
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
              />

              <input
                type="submit"
                value="Submit"
                className="btn bg-dark text-white btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddReference.propTypes = {
  addReference: PropTypes.func.isRequired
};

export default connect(null, { addReference })(AddReference);
