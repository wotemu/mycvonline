import React from 'react';
import PropTypes from 'prop-types';

const ProfilePortfolio = ({ portfolio: { name, link } }) => (
  <div className="">
    <i className="fa fa-check " />
    <span> {name}</span> <a href={link}>&nbsp;&nbsp;View</a>
  </div>
);

ProfilePortfolio.propTypes = {
  portfolio: PropTypes.object.isRequired
};

export default ProfilePortfolio;
