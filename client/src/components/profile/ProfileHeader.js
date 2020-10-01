import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    let profileImage;
    if (profile.image) {
      profileImage = (
        <img
          className="img-fluid"
          src={profile.image}
          style={{
            display: 'block'
          }}
          alt=""
        />
      );
    } else {
      profileImage = (
        <img
          src={profile.user.avatar}
          alt=""
          className=" img-fluid rounded-circle p-2"
          style={{
            maxHeight: '200px',
            maxWidth: '200px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      );
    }
    return (
      <div>
        <div className="imagebgc text-white mb-3 border-0">
          <div className="row">
            <div className="col m-auto">{profileImage}</div>
          </div>
          <div className="text-center">
            <h2 className="text-center pt-2">{profile.user.name}</h2>
            <p className="lead text-center">{profile.status} </p>

            <p className="pb-2">
              {isEmpty(profile.website) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe fa-2x" />
                </a>
              )}
              {isEmpty(profile.linkedin) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              )}
              {isEmpty(profile.github) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-2x" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube fa-2x" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a
                  className="text-white p-2"
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
      </div>
    );
  }
}

export default ProfileHeader;
