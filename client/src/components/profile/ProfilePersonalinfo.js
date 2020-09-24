import React, { Component } from "react";

class ProfilePersonalinfo extends Component {
  render() {
    const { profile } = this.props;

    // Get first name

    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div>
        <h5 className="myOpacity personalInfoHeader">Personal Information</h5>

        <ul className="list-group border-0">
          <p>
            <i className="fas fa-user  mr-2 iconColor"></i> {firstName}
          </p>
          <p>
            <i className="fas fa-address-card  mr-2 iconColor"></i>{" "}
            {profile.address}
          </p>
          <p>
            <i className="fas fa-envelope  mr-2 iconColor"></i>
            {profile.email}
          </p>
          <p>
            <i className="fas fa-phone  mr-2 iconColor"></i>
            {profile.phone}
          </p>

          <p>
            <i className="fas fa-language  mr-2 iconColor"></i>
            {profile.language}
          </p>
        </ul>
      </div>
    );
  }
}

export default ProfilePersonalinfo;
