import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

import FileUpload from './FileUpload';

class FileUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ''
    };
  }

  updateImages = (newImages) => {
    this.setState({ filePath: newImages });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.filePath);
    this.props.addPost(this.state.filePath);
    window.location = '/feed';
  };

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.onSubmit}>
          <div className="form-group ">
            <div className="card card-info border-0  ">
              <div className="card-body ">
                <FileUpload refreshFunction={this.updateImages} />
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

FileUploadForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(FileUploadForm);
