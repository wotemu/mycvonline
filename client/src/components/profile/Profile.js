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
          <div className="row">
            <div className="col-lg-2 mb-2">
              <Link to="/profiles" className="btn btn-light">
                <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
              </Link>
            </div>
          </div>

          <div className="row mb-3">
            <div className="card card-body  border-0">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-11 ml-auto mr-auto ">
                  <ProfileHeader profile={profile} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-11 ml-auto mr-auto">
                  <ProfileAbout profile={profile} />
                  <ProfilePersonalinfo profile={profile} />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="card card-body  border-0">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-11 ml-auto mr-auto  ">
                  <div className="mb-2">
                    {profile.skills.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">Skills Set</h5>
                        {profile.skills.map((skill) => (
                          <ProfileSkills key={skill._id} skills={skill} />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No skill to list</h6>
                    )}
                  </div>
                  <div className="mb-2">
                    {profile.portfolio.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">Portfolios</h5>
                        {profile.portfolio.map((portfolio) => (
                          <ProfilePortfolio
                            key={portfolio._id}
                            portfolio={portfolio}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No portfolio to list</h6>
                    )}
                  </div>
                  <div className="mb-2">
                    {profile.hobbies.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">Hobbies</h5>
                        {profile.hobbies.map((hobby) => (
                          <ProfileHobbies key={hobby._id} hobbies={hobby} />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No hobby to list</h6>
                    )}
                  </div>
                  <div className="mb-2">
                    {profile.reference.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">References</h5>
                        {profile.reference.map((reference) => (
                          <ProfileReference
                            key={reference._id}
                            reference={reference}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No reference to list</h6>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-11 ml-auto mr-auto">
                  <div className="mb-2">
                    {profile.experience.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">Experiences</h5>
                        {profile.experience.map((experience) => (
                          <ProfileExperience
                            key={experience._id}
                            experience={experience}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No experience to list</h6>
                    )}
                  </div>
                  <div className="mb-2">
                    {profile.education.length > 0 ? (
                      <Fragment>
                        <h5 className=" personalInfoHeader">Qualifications</h5>
                        {profile.education.map((education) => (
                          <ProfileEducation
                            key={education._id}
                            education={education}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h6>No education to list</h6>
                    )}
                  </div>
                </div>
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
