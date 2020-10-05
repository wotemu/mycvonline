import React from 'react';
import PropTypes from 'prop-types';

const ProfileReference = ({ reference: { name, email, position } }) => (
  <div className=" ">
    <h6>
      {name}, {position}
    </h6>
    <p>
      <i className="fas fa-envelope"></i>
      {email}
    </p>{' '}
    <hr />
  </div>
);

ProfileReference.propTypes = {
  reference: PropTypes.object.isRequired
};

export default ProfileReference;
