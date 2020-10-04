import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div >
        <h5 className="profile-header">
          {profile.user.name ? profile.user.name : ''}'s Bio
        </h5>
        <div className="bio-body">
          {isEmpty(profile.bio) ? (
            <p>{profile.user.name} does not have a bio</p>
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
