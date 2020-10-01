import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addHobbies } from '../../actions/profileActions';

const AddHobbies = ({ addHobbies, history }) => {
  const [formData, setFormData] = useState({
    hobby: ''
  });

  const { hobby } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    
    e.preventDefault();
    addHobbies(formData, history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
          <Link to="/dashboard" className="btn btn-light">
            <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
          </Link>
          <div className=" p-5 add-reference">
            <h5 className="formHeader p-2">Add Hobby</h5>

            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* hobby"
                name="hobby"
                value={hobby}
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

AddHobbies.propTypes = {
  addHobbies: PropTypes.func.isRequired
};

export default connect(null, { addHobbies })(AddHobbies);
