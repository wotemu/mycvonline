import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

const ProfileItem = ({
  profile: {
    image,
    user: { _id, name, avatar },
    status,
    skills
  }
}) => {
  return (
    <div className="card card-body mb-3 mt-3 border-0 honeydew">
      <div className="row  ">
        <div className="col-md-6 ">
          <Link to={`/profile/${_id}`}>
            <img
              src={isEmpty(image) ? avatar : image}
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
/* 

<div className="col-md-5 d-none d-md-block">
          {skills.length > 0 ? (
            <div>
              <h6>Skills set</h6>
              <ul className="list-group">
                {skills.slice(0, 3).map((skill, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div> */
