import React, { Component } from "react";

class ProfileSkills extends Component {
  render() {
    const { skills } = this.props;

    const skillsItems = skills.map((skill) => (
      <div className="progress m-2 " style={{ height: "25px" }} key={skill._id}>
        <div
          className="progress-bar formHeader"
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${skill.level}%`,
          }}
        >
          <p className="text-center text-lead m-2">
            {" "}
            {skill.name} {`${skill.level}%`}
          </p>
        </div>
      </div>
    ));

    return (
      <div className="mb-3">
        <div className="mb-2 biobgcolor">
          <h5 className="myOpacity personalInfoHeader">Skills</h5>
          {skillsItems.length > 0 ? (
            <div className=" ">{skillsItems}</div>
          ) : (
            <p>No Skills listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileSkills;
