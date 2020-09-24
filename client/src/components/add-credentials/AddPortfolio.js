import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPortfolio } from "../../actions/profileActions";

class AddPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "",
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

    const portfolioData = {
      name: this.state.name,
      link: this.state.link,
    };

    this.props.addPortfolio(portfolioData, this.props.history);
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
              <h5 className="formHeader p-2">Add Portfolio</h5>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* portfolio name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="The name of your portfolio"
                />
                <TextFieldGroup
                  placeholder="* portfolio url"
                  name="link"
                  value={this.state.link}
                  onChange={this.onChange}
                  error={errors.link}
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
  }
}

AddPortfolio.propTypes = {
  addHobbies: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPortfolio })(
  withRouter(AddPortfolio)
);
