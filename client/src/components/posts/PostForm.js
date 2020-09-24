import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: "",
      filePath: "",
      image: "",
      thumbnail: "",
      duration: "",
      errors: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { user } = this.props.auth;

    let formData = new FormData();

    formData.append("text", this.state.text);
    formData.append("filePath", this.state.filePath);
    formData.append("image", this.state.image);
    formData.append("thumbnail", this.state.thumbnail);
    formData.append("duration", this.state.duration);
    formData.append("name", user.name);
    formData.append("avatar", user.avatar);

    this.props.addPost(formData);
    this.inputRef.current.value = "";

    this.setState({ text: "", filePath: "", image: "", thumbnail: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form">
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="form-group ">
            <div className="card card-info border-0  ">
              <h5 className="p-2  formHeader text-white">
                What is on your mind...
              </h5>
              <div className="card-body ">
                <TextAreaFieldGroup
                  placeholder="Start a post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                  className="border-0"
                />

                <input
                  type="file"
                  className="form-input"
                  ref={this.inputRef}
                  onChange={this.onChangeImage}
                />
                <div className="pt-3">
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(PostForm);
