import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="nav navbar mb-4 p-3">
      <Link to="/edit-profile" className="btn btn-light ">
        <i className="fas fa-edit text-info mr-1" /> Edit Profile
      </Link>

      <Link to="/add-experience" className="btn btn-light ">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light ">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
      <Link to="/add-reference" className="btn btn-light ">
        <i className="fa fa-user-plus text-info mr-1" />
        Add Reference
      </Link>
      <Link to="/add-skill" className="btn btn-light ">
        <i className="fa fa-cog text-info mr-1" />
        Add Skills
      </Link>
      <Link to="/add-hobby" className="btn btn-light ">
        <i className="fa fa-star text-info mr-1" />
        Add Hobbies
      </Link>
      <Link to="/add-portfolio" className="btn btn-light ">
        <i className="fa fa-briefcase text-info mr-1" />
        Add Portfolio
      </Link>
    </div>
  );
};

export default ProfileActions;
