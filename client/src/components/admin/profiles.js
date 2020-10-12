import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import AvatarImg from '../../img/avatar.jpg';
import { getProfiles } from '../../actions/profileActions';

const AllProfiles = ({
  getProfiles,
  profile: { profiles },
  auth: { loading }
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const profileItem = profiles.map((m, index) => (
    <tr key={m.user._id} className="table-justify">
      <td>{m.user._id}</td>
      <td>{m.user.name}</td>
      <td>{m.address}</td>
      <td>{m.phone}</td>
      <td>{m.language}</td>
      <td>{m.status}</td>
      <td>{m.bio}</td>
      <td>
        <Link to={`/profile/${m.user._id}`}>
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
      <h3 className="text-info text-center mb-2 p-3">List of Profiles</h3>

      <table className="table table-responsive table-sm">
        <thead className="thead-dark">
          <tr className="table-center">
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Language</th>
            <th>Status</th>
            <th>Bio</th>
            <th>Image</th>

            <th />
          </tr>

          {!loading ? profileItem : <Spinner />}
        </thead>
      </table>
    </div>
  );
};

AllProfiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(AllProfiles);
