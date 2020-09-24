import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import TextFieldGroup from "../../common/TextFieldGroup";
import { addBlog } from "../../../actions/blogActions";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: "",
      title: "",
      image: "",
      errors: {},
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
    formData.append("title", this.state.title);
    formData.append("image", this.state.image);
    formData.append("name", user.name);
    formData.append("avatar", user.avatar);

    console.log(formData);

    this.props.addBlog(formData, this.props.history);
    this.setState({ text: "", title: "", image: "" });
    this.inputRef.current.value = "";
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
      <div className="post-form mb-3">
        <div className="card card-info border-0">
          <div className="card-header bg-info text-white text-center">
            Blog Form
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit} encType="multipart/form-data">
              <div className="form-group">
                <div className="post-form mb-2">
                  <div className="card card-info">
                    <h5 className="p-1  formHeader text-white">
                      Upload an Image
                    </h5>

                    <input
                      type="file"
                      ref={this.inputRef}
                      className="form-input p-3"
                      onChange={this.onChangeImage}
                    />
                  </div>
                </div>
                <TextFieldGroup
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="Title of the blog"
                />

                <TextAreaFieldGroup
                  placeholder="Blog content"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addBlog })(withRouter(BlogForm));
