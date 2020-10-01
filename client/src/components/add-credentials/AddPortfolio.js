import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPortfolio } from '../../actions/profileActions';

const AddPortfolio = ({ addPortfolio, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    link: ''
  });

  const { name, link } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    addPortfolio(formData, history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
          <Link to="/dashboard" className="btn btn-light">
            <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
          </Link>
          <div className=" add-reference p-5">
            <h5 className="formHeader p-2">Add Portfolio</h5>

            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* portfolio name"
                name="name"
                value={name}
                onChange={onChange}
                info="The name of your portfolio"
              />
              <TextFieldGroup
                placeholder="* portfolio url"
                name="link"
                value={link}
                onChange={onChange}
                info="URL of your portfolio"
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

AddPortfolio.propTypes = {
  addPortfolio: PropTypes.func.isRequired
};

export default connect(null, { addPortfolio })(AddPortfolio);
