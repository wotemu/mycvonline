import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";
import Spinner from "../../common/Spinner";
import { getBlogs } from "../../../actions/blogActions";

import { deleteBlog } from "../../../actions/blogActions";

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  onDeleteClick(id) {
    this.props.deleteBlog(id);
  }

  render() {
    const { blogs, loading } = this.props.blog;
    const { auth } = this.props;

    let blogContent;

    if (blogs === null || loading) {
      blogContent = <Spinner />;
    } else {
      blogContent = blogs.map((blog) => (
        <div key={blog._id}>
          <div className="row mb-2 pb-2">
            <div className="col-md-3">
              <img
                className="img-fluid"
                src={blog.image}
                alt="blogImage"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div className="col-md-3">{blog.title}</div>
            <div className="col-md-4">
              <Link to={`/blog/${blog._id}`} className="blogsPageLink">
                <ReadMore more={blog.text} />
              </Link>
            </div>
            <div className="col-md-2">
              <span>
                {blog.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, blog._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                ) : null}
              </span>
            </div>
          </div>
          <hr />
        </div>
      ));
    }

    return (
      <div className="container blogsDashboard">
        <h4 className="text-info mb-3 text-center">Blogs Dashboard </h4>
        <div className="btn-group mb-4 p-3" role="group">
          <Link to="/add-blog" className="btn btn-light">
            <i className="fas fa-book text-info mr-1" />
            Add Blog
          </Link>
        </div>
        <div className="row">
          <div className="card card-body border-0 mb-3">{blogContent}</div>
        </div>
      </div>
    );
  }
}

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
  auth: state.auth,
});

export default connect(mapStateToProps, { getBlogs, deleteBlog })(Blogs);
