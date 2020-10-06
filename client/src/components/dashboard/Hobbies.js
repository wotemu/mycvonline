import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteHobbies } from '../../actions/profileActions';

const Hobbies = ({ hobbies, deleteHobbies }) => {
  const hobbyItem = hobbies.map((ref, index) => (
    <tr key={ref._id}>
      <td>{ref.hobby}</td>
      <td>
        <button onClick={() => deleteHobbies(ref._id)} className="btn-red">
          <i className="fas fa-times fa-sm"></i>
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
          {hobbyItem}
        </thead>
      </table>
    </div>
  );
};

Hobbies.propTypes = {
  hobbies: PropTypes.array.isRequired,
  deleteHobbies: PropTypes.func.isRequired
};

export default connect(null, { deleteHobbies })(Hobbies);
