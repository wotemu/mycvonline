import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="top-container">
        <header className="showcase">
          <h1>Create your resume</h1>
          <h3> Share the link to recruiters</h3>
          <p> Create and read feeds</p>
          <p>
            <Link to="/register" className="btn btn-lg btn-info">
              <i className="fas fa-user-plus"></i> Sign Up
            </Link>
            <span>
              <Link to="/login" className="btn btn-lg btn-info ">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>{' '}
            </span>
          </p>
        </header>

        <div class="top-box top-box-a">
          <h4>Membership</h4>
          <p class="price">Free</p>
          <Link to="/register" className="btn btn-lg btn-info">
            <i className="fas fa-user-plus"></i> Sign Up
          </Link>
        </div>

        <div class="top-box top-box-b">
          <h4>Pro Membership</h4>
          <p class="price">Again Free</p>
          <Link to="/register" className="btn btn-lg btn-info">
            <i className="fas fa-user-plus"></i> Sign Up
          </Link>
        </div>
      </section>
      <section className="boxes">
        <div className="box">
          <i className="fas fa-chart-pie fa-4x"></i>
          <h4>Analytics</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="box">
          <i className="fas fa-globe fa-4x"></i>
          <h4>Marketing</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="box">
          <i className="fas fa-cog fa-4x"></i>
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="box">
          <i className="fas fa-users fa-4x"></i>
          <h4>Support</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="info">
        <img src="../../img/showcase.jpg" alt="" />
        <h2>Your business web</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi
          debitis nam odit modi culpa aliquid animi veritatis ab architecto
          asperiores illum ipsa, eius mollitia accusantium necessitatibus
          laborum minima. Commodi?
        </p>
        <Link to="/login" className="btn btn-lgbtn-info  ">
          <i className="fas fa-sign-in-alt"></i> Buy now
        </Link>
      </section>
      <section className="portfolio">
        <img src="https://source.unsplash.com/random/200x200" alt="" />
        <img src="https://source.unsplash.com/random/201x200" alt="" />
        <img src="https://source.unsplash.com/random/202x200" alt="" />
        <img src="https://source.unsplash.com/random/203x200" alt="" />
        <img src="https://source.unsplash.com/random/204x200" alt="" />
        <img src="https://source.unsplash.com/random/205x200" alt="" />
        <img src="https://source.unsplash.com/random/206x200" alt="" />
        <img src="https://source.unsplash.com/random/207x200" alt="" />
        <img src="https://source.unsplash.com/random/208x200" alt="" />
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
