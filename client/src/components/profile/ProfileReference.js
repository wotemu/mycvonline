import React from 'react';
import PropTypes from 'prop-types';

const ProfileReference = ({ reference: { name, email, position } }) => (
  <div className=" mb-3 pb-2">
    <p className="myOpacity">
      {name}, {position}
    </p>
    <p>
      <i className="fas fa-envelope iconImgBgc mr-2"></i>
      {email}
    </p>
  </div>
);

ProfileReference.propTypes = {
  reference: PropTypes.object.isRequired
};

export default ProfileReference;
