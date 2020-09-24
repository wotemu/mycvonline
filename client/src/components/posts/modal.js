import React, { Component } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PostForm from "./PostForm";

class ModalBox extends Component {
  state = {
    open: false,
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
            animationDuration={1000}
          >
            <h4 className="myOpacity">What is in your mind...</h4> <hr />
            <PostForm />
          </Modal>
        </div>
      </div>
    );
  }
}

export default ModalBox;
