import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map((profile) => (
          <div
            className="col-lg-6 col-md-8 col-sm-12 equalHeightCol"
            key={profile._id}
          >
            <ProfileItem profile={profile} />
          </div>
        ));
      } else {
        profileItems = (
          <div className="col-lg-6 col-md-8 col-sm-12 ">
            <h4 className="text-center pl-3">No profiles found...</h4>
          </div>
        );
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="formHeader">
            <h4 className=" text-center pt-2">View Profiles</h4>
            <p className="text-center pb-2">Browse and connect</p>
          </div>

          <div className="row">{profileItems}</div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
