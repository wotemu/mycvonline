import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import FileUpload from './FileUpload';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      filePath: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let formData = {
      text: this.state.text,
      filePath: this.state.filePath
    };

    this.props.addPost(formData);
    this.setState({ text: '', filePath: '' });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateImages = (newImages) => {
    this.setState({ filePath: newImages });
  };

  render() {
    return (
      <div className="feeds-page-post-form-container">
        <form onSubmit={this.onSubmit} className="feeds-page-post-form">
          <div className="post-form ">
            <TextAreaFieldGroup
              placeholder="Start a post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              className="border-0"
            />
            <FileUpload refreshFunction={this.updateImages} />
            <div className="pt-1">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>{' '}
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
