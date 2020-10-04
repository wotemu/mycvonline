import React, { Component } from 'react';

class ProfilePersonalinfo extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <h5 className="profile-header">Personal Information</h5>
        <div className="personalinfo-list">
          <p>
            {' '}
            <i className="fas fa-user  personalinfo-icon"></i>{' '}
            {profile.user.name}
          </p>
          <p>
            {' '}
            <i className="fas fa-address-card  personalinfo-icon"></i>{' '}
            {profile.address}
          </p>
          <p>
            {' '}
            <i className="fas fa-envelope  personalinfo-icon"></i>
            {profile.email}
          </p>
          <p>
            {' '}
            <i className="fas fa-phone  personalinfo-icon "></i>
            {profile.phone}
          </p>
          <p>
            {' '}
            <i className="fas fa-language  personalinfo-icon"></i>
            {profile.language}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfilePersonalinfo;
