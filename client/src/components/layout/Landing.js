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
          <h1>CV-Online</h1>
          <h3>Create your resume</h3>
          <h5> Share the link to recruiters</h5>
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

        <div className="top-box top-box-a">
          <h4>Feeds</h4>

          <Link className="nav-link" to="/feed">
            <i className="fas fa-book fa-3x"></i>
          </Link>
        </div>

        <div className="top-box top-box-b">
          <h4>Blogs</h4>

          <Link className="nav-link" to="/blogs">
            <i className="fas fa-rss fa-3x"></i>
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
        <h2>About CV-Online</h2>
        <p>
          CV-online is developed by Tamire. It is your online destination for
          creating and sharing your resumes to recruiters.
        </p>
        <p>
          You can read, create and share your views in the blogs feeds section
          of the app.
        </p>
        <p>Enjoy the app reading feeds, user comments, and other services.</p>

        <h3>Interested?</h3>
        <p>Leave us your e-mail address and we’ll keep you up to date.</p>
        <p>
          <Link className="btn" to="/register">
            <i className="fas fa-user-plus"></i> Sign Up
          </Link>
        </p>

        <p>
          A professional offering services listed above and interested in
          featuring on cv-online app?
        </p>
        <p>
          <Link to="/login" className="btn ">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>{' '}
        </p>
        <p> You can also checkout our Facebook and Twitter</p>
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
