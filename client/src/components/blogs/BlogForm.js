import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { addBlog } from '../../actions/blogActions';
import FileUpload from './FileUpload';

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      title: '',
      filePath: '',
      errors: {}
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let formData = {
      title: this.state.title,
      text: this.state.text,
      filePath: this.state.filePath
    };

    this.props.addBlog(formData, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateImages = (newImages) => {
    this.setState({ filePath: newImages });
  };

  render() {
    return (
      <div className="reigister">
        <div className="register-form">
          <h5>Blog Form</h5>

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <TextFieldGroup
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />

              <TextAreaFieldGroup
                placeholder="Blog content"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
              />
              <div className="upload">
                <h6 className="">Upload an Image</h6>
                <div className="p">
                  <FileUpload refreshFunction={this.updateImages} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired
};

export default connect(null, { addBlog })(BlogForm);
