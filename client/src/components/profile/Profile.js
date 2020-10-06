import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';

import ProfileEducation from './ProfileEducation';
import ProfileExperience from './ProfileExperience';

import ProfileReference from './ProfileReference';
import ProfilePersonalinfo from './ProfilePersonalinfo';
import ProfileHobbies from './ProfileHobbies';
import ProfilePortfolio from './ProfilePortfolio';
import ProfileSkills from './ProfileSkills';
import Spinner from '../common/Spinner';
import { getProfileById } from '../../actions/profileActions';

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="back-to">
            <p>
              {' '}
              <Link to="/profiles">
                <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
              </Link>{' '}
              <span className="profile-detail-back-to">
                {profile.user.name ? profile.user.name : ''}'s Profile Details
              </span>{' '}
            </p>
          </div>
          <div className="profile-detail">
            <div className="header">
              <ProfileHeader profile={profile} />
              <ProfilePersonalinfo profile={profile} />
            </div>
            <div className="placeholder"></div>

            <div className="about">
              <h5 className="profile-header">
                {' '}
                {profile.user.name ? profile.user.name : ''}'s Bio
              </h5>
              <div className="profile-body">
                <ProfileAbout profile={profile} />
              </div>
            </div>
            <div className="experience">
              <h5 className="profile-header">Experiences</h5>
              <div className="profile-body">
                {profile.experience.length > 0 ? (
                  <Fragment>
                    {profile.experience.map((experience) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No experience to list</h5>
                )}
              </div>
            </div>
            <div className="education">
              <h5 className="profile-header">Qualifications</h5>
              <div className="profile-body">
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No education to list</h5>
                )}
              </div>
            </div>
            <div className="skills">
              <h5 className="profile-header">Skills Set</h5>
              <div className="profile-body ">
                {profile.skills.length > 0 ? (
                  <Fragment>
                    {profile.skills.map((skill) => (
                      <ProfileSkills key={skill._id} skills={skill} />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No skill to list</h5>
                )}
              </div>
            </div>
            <div className="reference">
              {' '}
              <h5 className="profile-header">References</h5>
              <div className="profile-body ">
                {profile.reference.length > 0 ? (
                  <Fragment>
                    {profile.reference.map((reference) => (
                      <ProfileReference
                        key={reference._id}
                        reference={reference}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No reference to list</h5>
                )}
              </div>
            </div>
            <div className="portfolios">
              {' '}
              <h5 className="profile-header">Portfolios</h5>
              <div className="profile-body ">
                {profile.portfolio.length > 0 ? (
                  <Fragment>
                    {profile.portfolio.map((portfolio) => (
                      <ProfilePortfolio
                        key={portfolio._id}
                        portfolio={portfolio}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No portfolio to list</h5>
                )}
              </div>
            </div>
            <div className="hobby">
              {' '}
              <h5 className="profile-header">Hobbies</h5>
              <div className="profile-body ">
                {profile.hobbies.length > 0 ? (
                  <Fragment>
                    {profile.hobbies.map((hobby) => (
                      <ProfileHobbies key={hobby._id} hobbies={hobby} />
                    ))}
                  </Fragment>
                ) : (
                  <h5>No hobby to list</h5>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
