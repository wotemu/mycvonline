import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class BlogItem extends Component {
  render() {
    const { blog } = this.props;

    return (
      <div className="card card-body  border-0">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 mb-3">
            <img
              className="img-fluid"
              src={blog.image}
              alt="blogImage"
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <div className="col-md-5">
            <h5 className="detailsPageHeader"> {blog.title}</h5>
            <p className="detailsPageText">{blog.text}</p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(BlogItem);
