import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileReference from "./ProfileReference";
import ProfilePersonalinfo from "./ProfilePersonalinfo";
import ProfileHobbies from "./ProfileHobbies";
import ProfilePortfolio from "./ProfilePortfolio";
import ProfileSkills from "./ProfileSkills";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.profile.profile === null &&
      prevProps.profile.loading !== this.props.profile.loading
    ) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row mb-3">
            <div className="card card-body  border-0">
              <div className="row">
                <div className="col-lg-5 ">
                  <ProfileHeader profile={profile} />
                </div>
                <div className="col-lg-7">
                  <ProfileAbout profile={profile} />
                  <ProfilePersonalinfo profile={profile} />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="card card-body  border-0">
              <div className="row">
                <div className="col-lg-5 ">
                  <ProfileSkills skills={profile.skills} />
                  <ProfilePortfolio portfolio={profile.portfolio} />
                  <ProfileHobbies hobbies={profile.hobbies} />
                  <ProfileReference reference={profile.reference} />
                </div>
                <div className="col-lg-7">
                  <ProfileCreds
                    education={profile.education}
                    experience={profile.experience}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className="profile">{profileContent}</div>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(
  withRouter(Profile)
);
