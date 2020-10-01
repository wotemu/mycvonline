import React from 'react';
import PropTypes from 'prop-types';

const ProfileReference = ({ reference: { name, email, position } }) => (
  <div className=" mb-3">
    <p className="myOpacity pl-3">
      {name}, {position}
    </p>
    <p className="pl-3">
      <i className="fas fa-envelope iconImgBgc mr-2"></i>
      {email}
    </p>{' '}
    <hr />
  </div>
);

ProfileReference.propTypes = {
  reference: PropTypes.object.isRequired
};

export default ProfileReference;
