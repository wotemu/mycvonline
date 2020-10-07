import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';
import { options } from './Options';
import FileUpload from './FileUpload';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageone: true,
      pagetwo: false,
      pagethree: false,
      displaySocialInputs: false,
      address: '',
      email: '',
      phone: '',
      language: '',
      website: '',
      linkedin: '',
      github: '',
      company: '',
      status: '',
      bio: '',
      filePath: '',
      twitter: '',
      facebook: '',
      youtube: '',
      instagram: ''
    };
  }

  prevPage = () => {
    if (this.state.pagetwo === true) {
      this.setState({
        pageone: !this.state.pageone,
        pagetwo: !this.state.pagetwo
      });
    } else if (this.state.pagethree === true) {
      this.setState({
        pagethree: !this.state.pagethree,
        pagetwo: !this.state.pagetwo
      });
    }
  };

  nextPage = () => {
    if (this.state.pageone === true) {
      this.setState({
        pageone: !this.state.pageone,
        pagetwo: !this.state.pagetwo
      });
    } else if (this.state.pagetwo === true) {
      this.setState({
        pagetwo: !this.state.pagetwo,
        pagethree: !this.state.pagethree
      });
    }
  };

  togglePage = () => {
    this.setState({
      pageone: !this.state.pageone,
      pagetwo: !this.state.pagetwo
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let formData = {
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      status: this.state.status,
      language: this.state.language,
      website: this.state.website,
      linkedin: this.state.linkedin,
      github: this.state.github,
      company: this.state.company,
      bio: this.state.bio,
      filePath: this.state.filePath,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(formData, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateImages = (newImages) => {
    this.setState({ filePath: newImages });
  };

  render() {
    const {
      displaySocialInputs,
      address,
      email,
      phone,
      status,
      website,
      language,
      linkedin,
      github,
      bio,
      twitter,
      facebook,
      youtube,
      instagram,
      pagethree,
      pageone,
      pagetwo
    } = this.state;

    return (
      <div className="reigister">
        <div className="register-form">
          <h2 className="">Edit Your Profile</h2>
          <form onSubmit={this.onSubmit}>
            {pageone && (
              <div className="address-info">
                <label htmlFor="address">Address: </label>
                <TextFieldGroup
                  placeholder="Street address, zip code, city"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                  info=""
                />
                <label htmlFor="email">Email</label>
                <TextFieldGroup
                  placeholder="Your email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
                <label htmlFor="phone">Phone: </label>
                <TextFieldGroup
                  placeholder="Your phone"
                  name="phone"
                  value={phone}
                  onChange={this.onChange}
                />
                <label htmlFor="language">Language Skills: </label>
                <TextFieldGroup
                  placeholder="Language skill (comma separated list)"
                  name="language"
                  value={language}
                  onChange={this.onChange}
                />
                <label htmlFor="status">Professional Status: </label>

                <SelectListGroup
                  placeholder="Your current career status"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                  options={options}
                />
              </div>
            )}
            {pagetwo && (
              <div className="address-info">
                <label htmlFor="bio">Tell us a little about yourself: </label>

                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={bio}
                  onChange={this.onChange}
                />

                <div className="address-info">
                  <p>Upload profile Image</p>
                  <FileUpload refreshFunction={this.updateImages} />
                </div>
              </div>
            )}
            {pagethree && (
              <div>
                <label htmlFor="website">Link to your Websites: </label>

                <InputGroup
                  placeholder="Website"
                  name="website"
                  icon="fas fa-globe"
                  value={website}
                  onChange={this.onChange}
                  className="form-control"
                />

                <label htmlFor="linkedin">
                  Link to your Linkedin Profile URL:{' '}
                </label>
                <InputGroup
                  placeholder="Linkedin Profile URL"
                  name="linkedin"
                  icon="fab fa-linkedin"
                  value={linkedin}
                  onChange={this.onChange}
                />

                <label htmlFor="github">
                  Link to your Github Profile URL:{' '}
                </label>
                <InputGroup
                  placeholder="Github Profile URL"
                  name="github"
                  icon="fab fa-github"
                  value={github}
                  onChange={this.onChange}
                />

                <p>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState((prevState) => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn-small"
                  >
                    Social Network Links
                  </button>
                  <span className="">Optional</span>
                </p>
                {displaySocialInputs && (
                  <div className="address-info">
                    <InputGroup
                      placeholder="Twitter Profile URL"
                      name="twitter"
                      icon="fab fa-twitter"
                      value={twitter}
                      onChange={this.onChange}
                    />

                    <InputGroup
                      placeholder="Facebook Page URL"
                      name="facebook"
                      icon="fab fa-facebook"
                      value={facebook}
                      onChange={this.onChange}
                    />

                    <InputGroup
                      placeholder="YouTube Channel URL"
                      name="youtube"
                      icon="fab fa-youtube"
                      value={youtube}
                      onChange={this.onChange}
                    />

                    <InputGroup
                      placeholder="Instagram Page URL"
                      name="instagram"
                      icon="fab fa-instagram"
                      value={instagram}
                      onChange={this.onChange}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="border-top-to-btn">
              <button
                type="button"
                onClick={this.prevPage}
                disabled={pageone ? true : false}
                className="btn-small"
              >
                Previous
              </button>{' '}
              <button
                type="button"
                onClick={this.nextPage}
                disabled={pagethree ? true : false}
                className="btn-small"
              >
                Next
              </button>{' '}
              <button
                type="submit"
                onClick={this.togglePage}
                disabled={pagethree ? false : true}
                className="btn-small"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
