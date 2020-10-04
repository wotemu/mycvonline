import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

const ProfileItem = ({
  profile: {
    filePath,
    user: { _id, name, avatar },
    status
  }
}) => {
  return (
    <Fragment>
      <Link to={`/profile/${_id}`}>
        <img src={isEmpty(filePath) ? avatar : filePath} alt="" />
      </Link>
      <h4>{name}</h4>
      <p>{status} </p>
      <Link to={`/profile/${_id}`} className="btn">
        View Profile
      </Link>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
