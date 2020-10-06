import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import Logo from '../../img/logo.png';
import AvatarImage from '../../img/avatar.jpg';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
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
            src={AvatarImage}
            alt=""
            style={{ width: '25px', marginRight: '5px' }}
            title=""
          />{' '}
          {user && user.name}
        </span>
        <div className="dropdown-menu pl-3" aria-labelledby="navbarDropdown">
          <Link className="nav-link  pl-2" to="/dashboard">
            <i className="fas fa-address-card"></i>{' '}
            <span className="dropdown-menu-link"> My Dashboard</span>
          </Link>

          <Link className="nav-link pl-2" to="/add-blog">
            <i className="fas fa-rss"></i>{' '}
            <span className="dropdown-menu-link"> Add Blog</span>
          </Link>

          <Link className="nav-link pl-2 " to="">
            <span onClick={logout}>
              <i className="fas fa-sign-out-alt"></i>{' '}
              <span className="dropdown-menu-link"> Logout</span>
            </span>
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
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
