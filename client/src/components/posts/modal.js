import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PostForm from './PostForm';

class ModalBox extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="p-2">
        <div className="card-body">
          <input
            onClick={this.onOpenModal}
            placeholder="Say something..."
            className="form-control"
          />
          <Modal
            open={open}
            onClose={this.onCloseModal}
            center
            animationDuration={200}
          >
            <h5 className="p-1 mr-4 formHeader text-white">
              What is on your mind...
            </h5>
            <hr />
            <PostForm />
          </Modal>
        </div>
      </div>
    );
  }
}

export default ModalBox;
