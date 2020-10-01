import React from 'react';
import PropTypes from 'prop-types';

const ProfilePortfolio = ({ portfolio: { name, link } }) => (
  <div className="pl-3 pb-2">
    <i className="fa fa-check pr-2" />
    <span className="mr-2"> {name}</span> <a href={link}>View</a>
  </div>
);

ProfilePortfolio.propTypes = {
  portfolio: PropTypes.object.isRequired
};

export default ProfilePortfolio;
