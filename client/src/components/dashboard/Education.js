import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { deleteEducation } from '../../actions/profileActions';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>

      <td>
        <Moment format="MMM YYYY">{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format="MMM YYYY">{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} className="btn-red">
          <i className="fas fa-times fa-sm"></i>
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h5 className="text-info mb-2">Education Credentials</h5>
      <table className="table table-responsive table-sm">
        <thead className="thead-dark">
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
          {educations}
        </thead>
      </table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
