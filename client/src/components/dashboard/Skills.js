import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSkills } from "../../actions/profileActions";

class Skills extends Component {
  onDeleteClick(id) {
    this.props.deleteSkills(id);
  }

  render() {
    const skills = this.props.skills.map((ref) => (
      <tr key={ref._id}>
        <td>{ref.name}</td>
        <td>{ref.level}</td>

        <td>
          <button
            onClick={this.onDeleteClick.bind(this, ref._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h5 className="text-info mb-2">Skills</h5>
        <table className="table table-responsive table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Level</th>

              <th />
            </tr>
            {skills}
          </thead>
        </table>
      </div>
    );
  }
}

Skills.propTypes = {
  deleteSkills: PropTypes.func.isRequired,
};

export default connect(null, { deleteSkills })(Skills);
