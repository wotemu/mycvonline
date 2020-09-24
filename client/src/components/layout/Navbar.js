import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import Logo from "../../img/logo.png";
import AvatarImage from "../../img/avatar.jpg";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">
            <i className="fas fa-rss"></i> Blogs
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            <i className="fas fa-book"></i> Feed
          </Link>
        </li>

        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt=""
              style={{ width: "25px", marginRight: "5px" }}
              title=""
            />{" "}
            {user.name}
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="nav-link  pl-2" to="/dashboard">
              <i className="fas fa-address-card"></i>{" "}
              <span className="dropdown-menu-link"> Profile dashboard</span>
            </Link>

            <Link className="nav-link pl-2" to="/blogs-dashboard">
              <i className="fas fa-rss"></i>{" "}
              <span className="dropdown-menu-link"> Blog dashboard</span>
            </Link>

            <Link className="nav-link pl-2 " to="">
              <p onClick={this.onLogoutClick.bind(this)}>
                <i className="fas fa-sign-out-alt"></i>{" "}
                <span className="dropdown-menu-link"> Logout</span>
              </p>
            </Link>
          </div>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <i className="fas fa-user-plus"></i> Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/profiles">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
