import React, { Component } from "react";

class ProfileReference extends Component {
  render() {
    const { reference } = this.props;

    const refItems = reference.map((ref) => (
      <li key={ref._id} className="list-group-item border-0">
        <p className="myOpacity">
          {ref.name}, {ref.position}
        </p>
        <p>
          <i className="fas fa-envelope iconImgBgc mr-2"></i>
          {ref.email}
        </p>
        <hr />
      </li>
    ));

    return (
      <div className=" mb-3 pb-2">
        <h5 className="myOpacity personalInfoHeader">References</h5>
        {refItems.length > 0 ? (
          <ul className="list-group border-0">{refItems}</ul>
        ) : (
          <p>No Reference Listed </p>
        )}
      </div>
    );
  }
}

export default ProfileReference;
