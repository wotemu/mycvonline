import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import Spinner from "../common/Spinner";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ));
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row" style={{ backgroundColor: "white" }}>
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto ">
              <div className=" border mb-5 mt-3">
                <PostForm />
              </div>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
