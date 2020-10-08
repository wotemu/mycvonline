import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AdminPage = ({ isAuthenticated, isAdmin }) => {
  return (
    <Fragment>
      <section className="top-container">
        <header className="showcase">
          <h1>Welcome to Admin Page</h1>
        </header>
      </section>
    </Fragment>
  );
};

AdminPage.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AdminPage);
