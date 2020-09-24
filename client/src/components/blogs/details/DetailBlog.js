import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BlogItem from "./BlogItem";

import Spinner from "../../common/Spinner";
import { getBlog } from "../../../actions/blogActions";

class Blog extends Component {
  componentDidMount() {
    this.props.getBlog(this.props.match.params.id);
  }

  render() {
    const { blog, loading } = this.props.blog;
    let blogContent;

    if (blog === null || loading || Object.keys(blog).length === 0) {
      blogContent = <Spinner />;
    } else {
      blogContent = (
        <div>
          <BlogItem blog={blog} showActions={false} />
        </div>
      );
    }

    return (
      <div className="blog">
        <div className="row">
          <Link to="/blogs" className="btn btn-light mb-3">
            Back To Blogs
          </Link>
        </div>
        <div className="row">{blogContent}</div>
      </div>
    );
  }
}

Blog.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlog })(Blog);
