import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h5>{school}</h5>
    <p>
      <i className="fa fa-calendar"></i>
      <Moment format="MMM YYYY">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="MMM YYYY">{moment.utc(to)}</Moment>}
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
    <hr />
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
