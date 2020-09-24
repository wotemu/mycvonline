import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3 mt-3 border-0">
        <div className="row">
          <div className="col-md-3 ">
            <img
              src={isEmpty(profile.image) ? profile.user.avatar : profile.image}
              alt=""
              className="rounded-circle"
              style={{ maxHeight: "160px", maxWidth: "160px" }}
            />
          </div>
          <div className="col-md-4 ">
            <h6>{profile.user.name}</h6>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>

            <Link to={`/profile/${profile.handle}`} className="btn formHeader">
              View Profile
            </Link>
          </div>
          <div className="col-md-5 d-none d-md-block">
            {profile.skills.length > 0 ? (
              <div>
                <h6>Skills set</h6>
                <ul className="list-group">
                  {profile.skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className="list-group-item">
                      <i className="fa fa-check pr-1" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
