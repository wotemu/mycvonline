import React from 'react';
import Logo from '../../img/logo.png';

export default () => {
  return (
    <footer>
      <section className="section-follow-us">
        <h3>Follow Us on Social Media</h3>
      </section>
      <section className="box-follow">
        <a
          href="https://www.facebook.com/Wotemu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-2x"></i>
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
          target="blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>{' '}
        <a
          href="https://www.instagram.com/watch_arse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </section>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      Copyright &copy; {new Date().getFullYear()} - wotemu@gmail.com
    </footer>
  );
};
