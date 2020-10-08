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
              <div className="box" key={profile._id}>
                <ProfileItem profile={profile} />
              </div>
            ))
          ) : (
            <div className="NoProfiles">
              <h4>No profiles found...</h4>
              <p>Refresh the page</p>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <section className="headline"></section>
      <section className="headline-profiles">
        <h2>Profiles Available</h2>
      </section>
      <section className="boxes">{profileItems}</section>
    </Fragment>
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
