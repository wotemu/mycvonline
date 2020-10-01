import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: '',
      filePath: '',
      image: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('text', this.state.text);
    formData.append('image', this.state.image);

    this.props.addPost(formData);
    this.inputRef.current.value = '';
    this.setState({ text: '' });
    window.location = '/feed';
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="form-group ">
            <div className="card card-info border-0  ">
              <div className="card-body ">
                <TextAreaFieldGroup
                  placeholder="Start a post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  className="border-0"
                />

                <input
                  type="file"
                  className="form-input"
                  ref={this.inputRef}
                  onChange={this.onChangeImage}
                />
                <div className="pt-3">
                  <button type="submit" className="btn formHeader">
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
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
