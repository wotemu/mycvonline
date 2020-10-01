import React from 'react';
import PropTypes from 'prop-types';

const ProfilePortfolio = ({ portfolio: { name, link } }) => (
  <div>
    <div className="mb-2">
    
      <div className="p-2">
        <i className="fa fa-check" />
        <span className="mr-2"> {name}</span> <a href={link}>View</a>
      </div>
    </div>
  </div>
);

ProfilePortfolio.propTypes = {
  portfolio: PropTypes.object.isRequired
};

export default ProfilePortfolio;
