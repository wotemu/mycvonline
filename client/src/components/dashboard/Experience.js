import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="MMM YYYY">{exp.from}</Moment> - &nbsp;
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="MMM YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn-small btn-red"
        >
        <i className="fas fa-times fa-sm"></i>
        </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h5 className="text-info mb-2">Experiences Credentials </h5>
        <table className="table table-responsive table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
