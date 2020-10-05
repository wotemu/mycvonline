import React from 'react';
import PropTypes from 'prop-types';

const ProfileSkills = ({ skills: { name } }) => (
  <ul>
    {' '}
    <li> {name}</li>
  </ul>
);

ProfileSkills.propTypes = {
  skills: PropTypes.object.isRequired
};

export default ProfileSkills;
