import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getBlogs } from "../../actions/blogActions";
import BolgHeader from "./BlogHeader";

import ReadMore from "./ReadMore";

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    const { blogs, loading } = this.props.blog;
    let blogContent;

    if (blogs === null || loading) {
      blogContent = <Spinner />;
    } else {
      blogContent = blogs.map((blog) => (
        <div className="col-md-3 equalHeightCol" key={blog._id}>
          <div className="card card-body mb-3  border-0">
            <Link to={`/blog/${blog._id}`} className="blogsPageLink">
              <div className="pb-1">
                <img
                  className="img-fluid blogsPageImage "
                  src={blog.image}
                  alt="blogImage"
                />
              </div>
              <h6 className="blogPageTitle"> {blog.title}</h6>
              <p className="blogPageText">
                <ReadMore more={blog.text} />{" "}
              </p>
            </Link>
          </div>
        </div>
      ));
    }

    return (
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto text-center">
              <BolgHeader />
            </div>
          </div>

          {blogContent.length === 0 ? (
            <div className="NoBlogsBgc">
              <h5 className="text-center  blogsPageArticles p-2">
                No blogs to display
              </h5>
              <div className="text-center p-2">
                <Link className="nav-link pl-2" to="/blogs-dashboard">
                  <p className="">
                    {" "}
                    <i className="fas fa-rss"></i> Create Blog
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-center  blogsPageHeader">Blogs</h2>
              <h5 className="text-center  blogsPageArticles">All Blogs</h5>
              <div className="row">{blogContent}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlogs })(Blogs);
