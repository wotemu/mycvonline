import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSkills } from '../../actions/profileActions';

const Skills = ({ skills, deleteSkills }) => {
  const profileSkill = skills.map((skill) => (
    <tr key={skill._id}>
      <td>{skill.name}</td>

      <td>
        <button
          onClick={() => deleteSkills(skill._id)}
          className="btn-small btn-red"
        >
          <i className="fas fa-times fa-sm"></i>
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

            <th />
          </tr>
          {profileSkill}
        </thead>
      </table>
    </div>
  );
};

Skills.propTypes = {
  deleteSkills: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
};

export default connect(null, { deleteSkills })(Skills);
