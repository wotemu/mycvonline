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
            <Link to="/profiles">
              <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
            </Link>
          </div>
          <div className="profile-detail">
            <div className="profile-header">
              <ProfileHeader profile={profile} />
            </div>
            <div className="profile-personal">
              <ProfilePersonalinfo profile={profile} />
            </div>
            <div className="profile-about">
              <ProfileAbout profile={profile} />
            </div>
          </div>

          <div className="profile-credentials">
            <div className="profile-experience">
              {profile.experience.length > 0 ? (
                <Fragment>
                  <h5 className="profile-header">Experiences</h5>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h5 className="profile-header">No experience to list</h5>
              )}
            </div>
            <div className="profile-education">
              {profile.education.length > 0 ? (
                <Fragment>
                  <h5 className="profile-header">Qualifications</h5>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h5 className="profile-header">No education to list</h5>
              )}
            </div>
          </div>
          <div className="profile-others">
            <div className="profile-skills">
              {profile.skills.length > 0 ? (
                <Fragment>
                  <h5 className="profile-header">Skills Set</h5>
                  {profile.skills.map((skill) => (
                    <ProfileSkills key={skill._id} skills={skill} />
                  ))}
                </Fragment>
              ) : (
                <h5 className="profile-header">No skill to list</h5>
              )}
            </div>
            <div className="profile-portfolio">
              {profile.portfolio.length > 0 ? (
                <Fragment>
                  <h5 className="profile-header">Portfolios</h5>
                  {profile.portfolio.map((portfolio) => (
                    <ProfilePortfolio
                      key={portfolio._id}
                      portfolio={portfolio}
                    />
                  ))}
                </Fragment>
              ) : (
                <h5 className="profile-header">No portfolio to list</h5>
              )}
             <div className="profile-hobby">
             {profile.hobbies.length > 0 ? (
              <Fragment>
                <h5 className="profile-header">Hobbies</h5>
                {profile.hobbies.map((hobby) => (
                  <ProfileHobbies key={hobby._id} hobbies={hobby} />
                ))}
              </Fragment>
            ) : (
              <h5 className="profile-header">No hobby to list</h5>
            )}
             </div>
            </div>

            <div className="profile-reference">
              {profile.reference.length > 0 ? (
                <Fragment>
                  <h5 className="profile-header">References</h5>
                  {profile.reference.map((reference) => (
                    <ProfileReference
                      key={reference._id}
                      reference={reference}
                    />
                  ))}
                </Fragment>
              ) : (
                <h5 className="profile-header">No reference to list</h5>
              )}
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
