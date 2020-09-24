import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map((exp) => (
      <div key={exp._id} className="">
        <h5 className="myOpacity">{exp.company}</h5>
        <p className="calanderColor">
          {" "}
          <i className="fa fa-calendar"></i>
          <Moment format="MMM YYYY">{exp.from}</Moment> - &nbsp;
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="MMM YYYY">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location: </strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description: </strong> {exp.description}
            </span>
          )}
        </p>{" "}
        <hr />
      </div>
    ));

    const eduItems = education.map((edu) => (
      <div key={edu._id} className=" ">
        <h5 className="myOpacity">{edu.school}</h5>
        <p className="calanderColor">
          {" "}
          <i className="fa fa-calendar"></i>
          <Moment format="MMM YYYY">{edu.from}</Moment> - &nbsp;
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="MMM YYYY">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field Of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description: </strong> {edu.description}
            </span>
          )}
        </p>{" "}
        <hr />
      </div>
    ));
    return (
      <div>
        <div className="mb-2 ">
          <h5 className="myOpacity personalInfoHeader">Qualifications</h5>
          {eduItems.length > 0 ? (
            <ul className="list-group ">{eduItems}</ul>
          ) : (
            <p>No Qualifications Listed </p>
          )}
        </div>
        <div className="mb-2 ">
          <h5 className="myOpacity personalInfoHeader">Experiences</h5>
          {expItems.length > 0 ? (
            <ul className="list-group ">{expItems}</ul>
          ) : (
            <p>No Experience Listed </p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
