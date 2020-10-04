import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div className="profile-experience-detail ">
    <h5 className="">{company}</h5>
    <p>
      {' '}
      <i className="fa fa-calendar"></i>
      <Moment format="MMM YYYY">{from}</Moment> - &nbsp;
      {to === null ? ' Now' : <Moment format="MMM YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Position:</strong> {title}
    </p>
    <p>
      {location === '' ? null : (
        <span>
          <strong>Location: </strong> {location}
        </span>
      )}
    </p>
    <p>
      {description === '' ? null : (
        <span>
          <strong>Description: </strong> {description}
        </span>
      )}
    </p>{' '}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
