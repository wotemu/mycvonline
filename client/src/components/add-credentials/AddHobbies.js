import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addHobbies } from "../../actions/profileActions";

class AddHobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: "",
      errors: {},
      disabled: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const hobbyData = {
      hobby: this.state.hobby,
    };

    this.props.addHobbies(hobbyData, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

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
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* hobby"
                  name="hobby"
                  value={this.state.hobby}
                  onChange={this.onChange}
                  error={errors.hobby}
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
  }
}

AddHobbies.propTypes = {
  addHobbies: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addHobbies })(withRouter(AddHobbies));
