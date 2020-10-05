import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        {isEmpty(profile.bio) ? (
          <p>{profile.user.name} does not have a bio</p>
        ) : (
          <p>{profile.bio}</p>
        )}
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
