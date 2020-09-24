import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addReference } from "../../actions/profileActions";

class AddReference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      email: "",

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

    const refData = {
      name: this.state.name,
      email: this.state.email,
      position: this.state.position,
    };

    this.props.addReference(refData, this.props.history);
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
            <div className="add-reference p-5">
              <h5 className="formHeader p-2">Add Reference</h5>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="* Position"
                  name="position"
                  value={this.state.position}
                  onChange={this.onChange}
                  error={errors.position}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
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

AddReference.propTypes = {
  addReference: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addReference })(
  withRouter(AddReference)
);
