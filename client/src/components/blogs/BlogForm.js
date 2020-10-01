import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { addBlog } from '../../actions/blogActions';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: '',
      title: '',
      image: '',
      errors: {}
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('text', this.state.text);
    formData.append('title', this.state.title);
    formData.append('image', this.state.image);

    this.props.addBlog(formData, this.props.history);
    this.setState({ text: '', title: '' });
    this.inputRef.current.value = '';
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
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
                      info="Title of the blog"
                    />

                    <TextAreaFieldGroup
                      placeholder="Blog content"
                      name="text"
                      value={this.state.text}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired
};

export default connect(null, { addBlog })(BlogForm);
