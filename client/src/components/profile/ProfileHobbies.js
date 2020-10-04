import React from 'react';
import PropTypes from 'prop-types';

const ProfileHobbies = ({ hobbies: { hobby } }) => (
  <div className="profile-experience-detail ">
    <i className="fa fa-check " /> {hobby}
  </div>
);

ProfileHobbies.propTypes = {
  hobbies: PropTypes.object.isRequired
};

export default ProfileHobbies;
