import React, { Component } from "react";

class ProfileHobbies extends Component {
  render() {
    const { hobbies } = this.props;

    // Hobbies List

    const hobbiesItems = hobbies.map((hobby) => (
      <div key={hobby._id} className="p-2">
        <i className="fa fa-check" /> {hobby.hobby}
      </div>
    ));

    return (
      <div className=" mb-3 pb-2">
        <h5 className="myOpacity personalInfoHeader">Hobbies</h5>
        {hobbiesItems.length > 0 ? (
          <ul className="list-group">{hobbiesItems}</ul>
        ) : (
          <p>No hobbies Listed </p>
        )}
      </div>
    );
  }
}

export default ProfileHobbies;
