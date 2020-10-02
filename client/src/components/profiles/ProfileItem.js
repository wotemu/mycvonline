import React from 'react';
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
    <div className="card card-body mb-3 mt-3 border-0 honeydew">
      <div className="row  ">
        <div className="col-md-6 ">
          <Link to={`/profile/${_id}`}>
            <img
              src={isEmpty(filePath) ? avatar : filePath}
              alt=""
              className="rounded-circle"
              style={{ maxHeight: '160px', maxWidth: '160px' }}
            />
          </Link>
        </div>
        <div className="col-md-6 ">
          <h6>{name}</h6>
          <p>{status} </p>
          <Link to={`/profile/${_id}`} className="btn btn-sm formHeader">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
