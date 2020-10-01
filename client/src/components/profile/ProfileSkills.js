import React from 'react';
import PropTypes from 'prop-types';

const ProfileSkills = ({ skills: { name } }) => (
  <div className=" pl-3 pr-3 pb-2">
    <ul className="list-group">
      {' '}
      <li className="p-1 ml-4" style={{ listStyleType: 'square' }}>
        {' '}
        {name}
      </li>
    </ul>
  </div>
);

ProfileSkills.propTypes = {
  skills: PropTypes.object.isRequired
};

export default ProfileSkills;
