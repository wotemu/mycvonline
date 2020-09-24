import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import { options } from "./Options";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      pageone: true,
      pagetwo: false,
      pagethree: false,
      displaySocialInputs: false,
      address: "",
      email: "",
      phone: "",
      language: "",
      website: "",
      linkedin: "",
      github: "",
      company: "",
      status: "",
      bio: "",
      image: "",
      twitter: "",
      facebook: "",
      youtube: "",
      instagram: "",
      errors: {},
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors,
      });
    }

    if (prevProps.profile.profile !== this.props.profile.profile) {
      const profile = prevProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : "";

      profile.address = !isEmpty(profile.address) ? profile.address : "";
      profile.email = !isEmpty(profile.email) ? profile.email : "";
      profile.phone = !isEmpty(profile.phone) ? profile.phone : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.language = !isEmpty(profile.language) ? profile.language : "";
      profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : "";
      profile.github = !isEmpty(profile.github) ? profile.github : "";

      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.image = !isEmpty(profile.image) ? profile.image : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        address: profile.address,
        email: profile.email,
        phone: profile.phone,
        language: profile.language,
        website: profile.website,
        linkedin: profile.linkedin,
        github: profile.github,
        status: profile.status,
        bio: profile.bio,
        image: profile.image,
        twitter: profile.twitter,
        facebook: profile.facebook,
        youtube: profile.youtube,
        instagram: profile.instagram,
      });
    }
  }

  prevPage = () => {
    if (this.state.pagetwo === true) {
      this.setState({
        pageone: !this.state.pageone,
        pagetwo: !this.state.pagetwo,
      });
    } else if (this.state.pagethree === true) {
      this.setState({
        pagethree: !this.state.pagethree,
        pagetwo: !this.state.pagetwo,
      });
    }
  };

  nextPage = () => {
    if (this.state.pageone === true) {
      this.setState({
        pageone: !this.state.pageone,
        pagetwo: !this.state.pagetwo,
      });
    } else if (this.state.pagetwo === true) {
      this.setState({
        pagetwo: !this.state.pagetwo,
        pagethree: !this.state.three,
      });
    }
  };

  togglePage = () => {
    this.setState({
      pageone: !this.state.pageone,
      pagetwo: !this.state.pagetwo,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("handle", this.state.handle);
    formData.append("address", this.state.address);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("status", this.state.status);
    formData.append("language", this.state.language);
    formData.append("website", this.state.website);
    formData.append("linkedin", this.state.linkedin);
    formData.append("github", this.state.github);
    formData.append("company", this.state.company);
    formData.append("bio", this.state.bio);
    formData.append("image", this.state.image);
    formData.append("twitter", this.state.twitter);
    formData.append("facebook", this.state.facebook);
    formData.append("youtube", this.state.youtube);
    formData.append("instagram", this.state.instagram);

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
      errors,
      displaySocialInputs,
      handle,
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
      pagetwo,
    } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div className="pl-3 pr-3">
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

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
                            placeholder="* Profile Handle"
                            name="handle"
                            value={handle}
                            onChange={this.onChange}
                            error={errors.handle}
                            info="A unique handle for your profile URL. Your name, nickname"
                          />
                          <TextFieldGroup
                            placeholder="Your address"
                            name="address"
                            value={address}
                            onChange={this.onChange}
                            error={errors.address}
                            info="Write your address here"
                          />
                          <TextFieldGroup
                            placeholder="Your email"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            error={errors.email}
                            info="Write your email here"
                          />
                          <TextFieldGroup
                            placeholder="Your phone"
                            name="phone"
                            value={phone}
                            onChange={this.onChange}
                            error={errors.phone}
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
                          error={errors.language}
                          info="Write the list of languages you speak(comma separated)"
                        />
                      </div>
                      <SelectListGroup
                        placeholder="Status"
                        name="status"
                        value={status}
                        onChange={this.onChange}
                        options={options}
                        error={errors.status}
                        info="Give us an idea of where you are at in your career"
                      />
                      <TextAreaFieldGroup
                        placeholder="Short Bio"
                        name="bio"
                        value={bio}
                        onChange={this.onChange}
                        error={errors.bio}
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
                        error={errors.website}
                        info="Could be your own website"
                        className="form-control input-sm"
                      />

                      <InputGroup
                        placeholder="Linkedin Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                      />

                      <InputGroup
                        placeholder="Github Profile URL"
                        name="github"
                        icon="fab fa-github"
                        value={github}
                        onChange={this.onChange}
                        error={errors.github}
                      />
                    </div>

                    <div className="pl-3 pb-3">
                      <button
                        type="button"
                        onClick={() => {
                          this.setState((prevState) => ({
                            displaySocialInputs: !prevState.displaySocialInputs,
                          }));
                        }}
                        className="btn btn-sm btn-info"
                      >
                        Social Network Links
                      </button>
                      <span className="text-muted pl-2">Optional</span>
                    </div>
                    {socialInputs}
                  </div>
                )}
                <div className="mt-3 text-center">
                  <button
                    type="submit"
                    onClick={this.prevPage}
                    disabled={pageone ? true : false}
                    className="btn btn-info  btn-sm"
                  >
                    Previous
                  </button>{" "}
                  <button
                    type="submit"
                    onClick={this.nextPage}
                    disabled={pagethree ? true : false}
                    className="btn btn-info  btn-sm"
                  >
                    Next
                  </button>{" "}
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
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
