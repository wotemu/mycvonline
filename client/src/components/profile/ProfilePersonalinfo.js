import React, { Component } from 'react';

class ProfilePersonalinfo extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <div className="personal-info">
          <p>
            {' '}
            <i className="fas fa-address-card  profile-body-icon"></i>{' '}
            {profile.address}
          </p>
          <p>
            {' '}
            <i className="fas fa-envelope  profile-body-icon"></i>
            {profile.email}
          </p>
          <p>
            {' '}
            <i className="fas fa-phone  profile-body-icon "></i>
            {profile.phone}
          </p>
          <p>
            {' '}
            <i className="fas fa-language  profile-body-icon"></i>
            {profile.language}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfilePersonalinfo;
