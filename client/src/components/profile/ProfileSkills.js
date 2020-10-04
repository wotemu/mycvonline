import React from 'react';
import PropTypes from 'prop-types';

const ProfileSkills = ({ skills: { name } }) => (
  <div className="profile-experience-detail ">
    <ul>
      {' '}
      <li> {name}</li>
    </ul>
  </div>
);

ProfileSkills.propTypes = {
  skills: PropTypes.object.isRequired
};

export default ProfileSkills;
