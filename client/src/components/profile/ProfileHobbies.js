import React from 'react';
import PropTypes from 'prop-types';

const ProfileHobbies = ({ hobbies: { hobby } }) => (
  <div className=" mb-3 pb-2">
    <h5 className="myOpacity personalInfoHeader">Hobbies</h5>

    <ul className="list-group">
      {' '}
      <div className="p-2">
        <i className="fa fa-check" /> {hobby}
      </div>
    </ul>
  </div>
);

ProfileHobbies.propTypes = {
  hobbies: PropTypes.object.isRequired
};

export default ProfileHobbies;
