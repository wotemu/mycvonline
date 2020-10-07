import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import AvatarImage from '../../img/avatar.jpg';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="profile-body-header">
        <img
          src={profile.filePath ? profile.filePath : AvatarImage}
          alt=""
          className="img-fluid"
        />
        <div className="profile-body-header-content">
          <h4 className="">{profile.user.name}</h4>
          <p className="">{profile.status} </p>

          <p className="">
            {isEmpty(profile.website) ? null : (
              <a
                className=""
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe fa-2x" />
              </a>
            )}
            {isEmpty(profile.linkedin) ? null : (
              <a
                className=""
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            )}
            {isEmpty(profile.github) ? null : (
              <a
                className=""
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <a
                className=""
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <a
                className=""
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <a
                className=""
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <a
                className=""
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x" />
              </a>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
