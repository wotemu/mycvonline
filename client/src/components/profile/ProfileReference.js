import React from 'react';
import PropTypes from 'prop-types';

const ProfileReference = ({ reference: { name, email, position } }) => (
  <div className="profile-experience-detail ">
    <p>
      {name}, {position}
    </p>
    <p>
      <i className="fas fa-envelope"></i>
      {email}
    </p>{' '}
  </div>
);

ProfileReference.propTypes = {
  reference: PropTypes.object.isRequired
};

export default ProfileReference;
