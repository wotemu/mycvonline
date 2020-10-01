import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const profileItems = (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 equalHeightCol"
                key={profile._id}
              >
                {' '}
                <ProfileItem profile={profile} />
              </div>
            ))
          ) : (
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <h4 className="text-center pl-3">No profiles found...</h4>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
  return (
    <div className="profiles">
      {' '}
      <div className="row">{profileItems}</div>
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
