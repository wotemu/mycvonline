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
                        <div className="p-2">
                          <FileUpload refreshFunction={this.updateImages} />
                        </div>
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
