import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <div className="mb-2 ">
      <ul className="list-group ">
        <h5 className="myOpacity">{company}</h5>
        <p className="calanderColor">
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
        <hr />
      </ul>
    </div>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
