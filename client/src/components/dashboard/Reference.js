import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteReference } from "../../actions/profileActions";

class Reference extends Component {
  onDeleteClick(id) {
    this.props.deleteReference(id);
  }

  render() {
    const reference = this.props.reference.map((ref) => (
      <tr key={ref._id}>
        <td>{ref.name}</td>
        <td>{ref.position}</td>
        <td>{ref.email}</td>

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
        <h5 className="text-info mb-2">References</h5>
        <table className="table table-responsive table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th />
            </tr>
            {reference}
          </thead>
        </table>
      </div>
    );
  }
}

Reference.propTypes = {
  deleteReference: PropTypes.func.isRequired,
};

export default connect(null, { deleteReference })(Reference);
