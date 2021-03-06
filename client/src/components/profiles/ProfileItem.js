import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import AvatarImg from '../../img/avatar.jpg';

const ProfileItem = ({ profile: { filePath, user, status } }) => {
  return (
    <Fragment>
      <Link to={`/profile/${user && user._id}`}>
        <img
          src={isEmpty(filePath) ? AvatarImg : filePath}
          alt=""
          className="img-fluid"
        />
      </Link>
      <h6>{user && user.name}</h6>
      <p>{status} </p>
      <Link to={`/profile/${user && user._id}`} className="btn-small">
        View Profile
      </Link>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
