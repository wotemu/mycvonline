import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSkills } from "../../actions/profileActions";

class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: "",
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

    const skillData = {
      name: this.state.name,
      level: this.state.level,
    };

    this.props.addSkills(skillData, this.props.history);
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
            <div className=" add-reference p-5">
              <h5 className="formHeader p-2">Add Skill</h5>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="like Java"
                />
                <TextFieldGroup
                  placeholder="* Level"
                  name="level"
                  value={this.state.level}
                  onChange={this.onChange}
                  error={errors.level}
                  info="A number from 1 to 100"
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

AddSkills.propTypes = {
  addSkills: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addSkills })(withRouter(AddSkills));
