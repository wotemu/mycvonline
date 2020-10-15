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
import AvatarImage from '../../img/avatar.jpg';

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
      <h4 className="dashbord-header">Dashboard </h4>
      <Fragment>
        <div className="dashbord-img">
          <img
            src={
              profile && profile.filePath
                ? profile && profile.filePath
                : AvatarImage
            }
            alt=""
          />

          <span className="">{user && user.name} </span>
        </div>
        {profile !== null ? (
          <Fragment>
            <div className="dashbord-content">
              <ProfileActions />
              <Skills skills={profile.skills} />
              <Hobbies hobbies={profile.hobbies} />
              <Portfolio portfolio={profile.portfolio} />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
              <Reference reference={profile.reference} />
            </div>
            <div className="">
              <button className=" btn-red" onClick={() => deleteAccount()}>
                <i className="fas fa-times" /> Account
              </button>
            </div>
          </Fragment>
        ) : (
          <div className="dashbord-content">
            <h2 style={{ color: 'black' }}>You have not yet setup a profile</h2>
            <Link to="/create-profile" className="btn btn-info m-2 ">
              Create Profile
            </Link>
          </div>
        )}
      </Fragment>
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
