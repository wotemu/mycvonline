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

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
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
      image: '',
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
        pagethree: !this.state.three
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

    let formData = new FormData();

    formData.append('address', this.state.address);
    formData.append('email', this.state.email);
    formData.append('phone', this.state.phone);
    formData.append('status', this.state.status);
    formData.append('language', this.state.language);
    formData.append('website', this.state.website);
    formData.append('linkedin', this.state.linkedin);
    formData.append('github', this.state.github);
    formData.append('company', this.state.company);
    formData.append('bio', this.state.bio);
    formData.append('image', this.state.image);
    formData.append('twitter', this.state.twitter);
    formData.append('facebook', this.state.facebook);
    formData.append('youtube', this.state.youtube);
    formData.append('instagram', this.state.instagram);

    this.props.createProfile(formData, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
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
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
            <div className="p-3 create-profile">
              <h3 className="text-center p-2">Create Your Profile</h3>
              <form onSubmit={this.onSubmit} encType="multipart/form-data">
                {pageone && (
                  <div>
                    <div className="post-form mb-3">
                      <div className="card card-info">
                        <h5 className="p-1  formHeader text-white">
                          Personal Information
                        </h5>
                        <div className="card-body">
                          <TextFieldGroup
                            placeholder="Your address"
                            name="address"
                            value={address}
                            onChange={this.onChange}
                            info="Write your address here"
                          />
                          <TextFieldGroup
                            placeholder="Your email"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            info="Write your email here"
                          />
                          <TextFieldGroup
                            placeholder="Your phone"
                            name="phone"
                            value={phone}
                            onChange={this.onChange}
                            info="Write your phone number here"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {pagetwo && (
                  <div className="card card-info mb-3">
                    <p className="p-2  formHeader text-white">
                      Language Skills, Professional Status and Bio
                    </p>
                    <div className="card-body">
                      <div className="post-form mb-3">
                        <TextFieldGroup
                          placeholder="Language skill"
                          name="language"
                          value={language}
                          onChange={this.onChange}
                          info="Write the list of languages you speak(comma separated)"
                        />
                      </div>
                      <SelectListGroup
                        placeholder="Status"
                        name="status"
                        value={status}
                        onChange={this.onChange}
                        options={options}
                        info="Give us an idea of where you are at in your career"
                      />
                      <TextAreaFieldGroup
                        placeholder="Short Bio"
                        name="bio"
                        value={bio}
                        onChange={this.onChange}
                        info="Tell us a little about yourself"
                      />
                    </div>
                  </div>
                )}
                {pagethree && (
                  <div className="card card-info mb-2">
                    <h6 className="p-2  formHeader text-white">
                      Profile Image and Links to Social Websites
                    </h6>
                    <div className="card-body">
                      <p className="p-1  bg-dark text-white">Upload an Image</p>

                      <input
                        type="file"
                        ref={this.inputRef}
                        className="form-input mb-2"
                        onChange={this.onChangeImage}
                      />

                      <InputGroup
                        placeholder="Website"
                        name="website"
                        icon="fas fa-globe"
                        value={website}
                        onChange={this.onChange}
                        info="Could be your own website"
                        className="form-control input-sm"
                      />

                      <InputGroup
                        placeholder="Linkedin Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={linkedin}
                        onChange={this.onChange}
                      />

                      <InputGroup
                        placeholder="Github Profile URL"
                        name="github"
                        icon="fab fa-github"
                        value={github}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="pl-3 pb-3">
                      <button
                        type="button"
                        onClick={() => {
                          this.setState((prevState) => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                          }));
                        }}
                        className="btn btn-sm  formHeader"
                      >
                        Social Network Links
                      </button>
                      <span className="text-muted pl-2">Optional</span>
                    </div>
                    {displaySocialInputs && (
                      <div className="pl-3 pr-3">
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
                <div className="mt-3 text-center">
                  <button
                    type="submit"
                    onClick={this.prevPage}
                    disabled={pageone ? true : false}
                    className="btn btn-info  btn-sm"
                  >
                    previous
                  </button>{' '}
                  <button
                    type="submit"
                    onClick={this.nextPage}
                    disabled={pagethree ? true : false}
                    className="btn btn-info  btn-sm"
                  >
                    next
                  </button>{' '}
                  <button
                    type="submit"
                    onClick={this.togglePage}
                    disabled={pagethree ? false : true}
                    className="btn btn-info  btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
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
