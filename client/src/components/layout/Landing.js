import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mb-3">Create your resume</h1>
                <h3 className=""> Share the link to recruiters</h3>
                <p className="lead"> Create and read feeds</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  <i className="fas fa-user-plus"></i> Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
