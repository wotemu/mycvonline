import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import AvatarImg from '../../img/avatar.jpg';

const AllUsers = ({ auth: { user } }) => {
  
  const userItem =
    user &&
    user.map((m, index) => (
      <tr key={m._id}>
        <td>{m._id}</td>
        <td>{m.name}</td>
        <td>{m.email}</td>
        <td>
          <Moment format="MMM DD, YYYY">{m.date}</Moment>
        </td>
        <td>{m.text}</td>
        <td>
          <Link to={`/post/${m.user._id}`}>
            <img
              src={m.filePath ? m.filePath : AvatarImg}
              alt=""
              className="img-fluid"
              style={{ maxWidth: '60px', maxHeight: '60px' }}
            />
          </Link>
        </td>
      </tr>
    ));
  return (
    <div>
      <h5 className="text-info mb-2">List of Users</h5>

      <table className="table table-responsive table-sm">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Posted by</th>
            <th>Date Posted</th>
            <th>Text</th>

            <th>Image</th>

            <th />
          </tr>

          {userItem}
        </thead>
      </table>
    </div>
  );
};

AllUsers.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(AllUsers);
