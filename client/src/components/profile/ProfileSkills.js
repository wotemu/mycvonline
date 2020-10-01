import React from 'react';
import PropTypes from 'prop-types';

const ProfileSkills = ({ skills: { name, level } }) => (
  <div className="mb-3">
    <div className="mb-2">
      <div className="progress m-2 " style={{ height: '25px' }}>
        <div
          className="progress-bar "
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${level}%`
          }}
        >
          <p className="text-center text-lead m-2">
            {' '}
            {name} {`${level}%`}
          </p>
        </div>
      </div>
    </div>
  </div>
);

ProfileSkills.propTypes = {
  skills: PropTypes.object.isRequired
};

export default ProfileSkills;
