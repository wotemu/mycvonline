import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';
import Reference from './Reference';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Portfolio from './Portfolio';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="personalInfoHeader text-center">Dashboard </h4>
            <Fragment>
              <div className="p-3">
                <img
                  src={
                    profile && profile.filePath
                      ? profile && profile.filePath
                      : user && user.avatar
                  }
                  alt=""
                  className="rounded-circle"
                  style={{ maxHeight: '100px', maxWidth: '100px' }}
                />
                <span className="pl-3">{user && user.name} </span>
              </div>
              {profile !== null ? (
                <Fragment>
                  <div>
                    <ProfileActions />
                    <Skills skills={profile.skills} />
                    <Hobbies hobbies={profile.hobbies} />
                    <Portfolio portfolio={profile.portfolio} />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                    <Reference reference={profile.reference} />

                    <div style={{ marginBottom: '60px' }} />
                    <div className="my-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteAccount()}
                      >
                        <i className="fas fa-times" /> Account
                      </button>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <p>You have not yet setup a profile</p>
                  <Link to="/create-profile" className="btn formHeader">
                    Create Profile
                  </Link>
                </Fragment>
              )}
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
