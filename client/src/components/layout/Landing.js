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
      <section className="section-follow-us">
        <h3>Follow Us</h3>
      </section>
      <section className="boxes">
        <div className="box">
          <div className="box-follow-us">
            <a
              href="https://www.facebook.com/Wotemu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-4x"></i>
            </a>
          </div>
        </div>
        <div className="box">
          {' '}
          <div className="box-follow-us">
            {' '}
            <a
              href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-4x"></i>
            </a>
          </div>
        </div>
        <div className="box">
          {' '}
          <div className="box-follow-us">
            {' '}
            <a
              href="https://www.instagram.com/watch_arse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-4x"></i>
            </a>
          </div>
        </div>
        <div className="box">
          {' '}
          <div className="box-follow-us">
            {' '}
            <a
              href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-4x"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="info">
        <img src="../../img/showcase.jpg" alt="" />
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi
          debitis nam odit modi culpa aliquid animi veritatis ab architecto
          asperiores illum ipsa, eius mollitia accusantium necessitatibus
          laborum minima. Commodi?
        </p>
        <Link to="/login" className="btn btn-lgbtn-info  ">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </section>

      <section className="section-portfolio">
        <h3>Portfolios</h3>
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
