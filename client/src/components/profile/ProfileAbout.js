import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name
      ? profile.user.name.trim().split(" ")[0]
      : "";

    return (
      <div>
        <div className="mb-2 biobgcolor">
          <h5 className="myOpacity personalInfoHeader">{firstName}'s Bio</h5>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
        </div>{" "}
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
