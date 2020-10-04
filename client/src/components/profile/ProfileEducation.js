import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div className="profile-experience-detail ">
    <h5>{school}</h5>
    <p>
      {' '}
      <i className="fa fa-calendar"></i>
      <Moment format="MMM YYYY">{from}</Moment> - &nbsp;
      {to === null ? ' Now' : <Moment format="MMM YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Degree:</strong> {degree}
    </p>
    <p>
      <strong>Field Of Study:</strong> {fieldofstudy}
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

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
