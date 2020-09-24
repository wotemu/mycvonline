import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteHobbies } from "../../actions/profileActions";

class Hobbies extends Component {
  onDeleteClick(id) {
    this.props.deleteHobbies(id);
  }

  render() {
    const hobbies = this.props.hobbies.map((ref) => (
      <tr key={ref._id}>
        <td>{ref.hobby}</td>

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
        <h5 className="text-info mb-2">Hobbies</h5>
        <table className="table table-responsive table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Hobby</th>

              <th />
            </tr>
            {hobbies}
          </thead>
        </table>
      </div>
    );
  }
}

Hobbies.propTypes = {
  deleteHobbies: PropTypes.func.isRequired,
};

export default connect(null, { deleteHobbies })(Hobbies);
