import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import classnames from "classnames";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import ReadMore from "../posts/ReadMore";
import PostForm from "../posts/PostForm";
import { getPost, getPosts } from "../../actions/postActions";

import Moment from "react-moment";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFeeds: false,
      displayCommentForm: false,
    };
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter((like) => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    this.props.getPosts();
  }

  render() {
    const { post, posts, loading } = this.props.post;

    const { auth, showActions } = this.props;
    const { displayFeeds, displayCommentForm } = this.state;

    const createDate = post.date ? new Date(post.date) : new Date();
    const dateNow = new Date();
    const diffTime = Math.abs(dateNow - createDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let postContent;
    let postItems;

    let commentFeeds;
    let commentForm;

    if (displayFeeds) {
      commentFeeds = <CommentFeed postId={post._id} comments={post.comments} />;
    }

    if (displayCommentForm) {
      commentForm = (
        <div>
          <CommentForm postId={post._id} />
          <div className="mb-3 pl-2">
            <button
              type="button"
              onClick={() => {
                this.setState((prevState) => ({
                  displayFeeds: !prevState.displayFeeds,
                }));
              }}
              className="btn btn-default"
            >
              View Comments <i className="fas fa-chevron-circle-down pl-2"></i>
            </button>
          </div>
        </div>
      );
    }

    if (posts === null || loading) {
      postItems = <Spinner />;
    } else {
      postItems = posts.map((post) => <PostItem key={post._id} post={post} />);
    }
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <div className="row">
            <div className="col-md-2">
              <div className="border p-2">Ads</div>
            </div>
            <div className="col-md-7 ">
              <div className=" border mb-2">
                <PostForm />
              </div>
              <div className="border p-2">
                <div className="row no-gutters pt-2 pb-2">
                  <div className="col-auto">
                    <img
                      src={post.avatar}
                      className="avatar rounded-circle "
                      alt=""
                    />
                  </div>

                  <div className="card-block ">
                    <p className="text-muted pt-2">{post.name}</p>
                    <p className="text-muted">
                      <span> Posted on </span> &nbsp;
                      <Moment format="MMM DD, YYYY">{createDate}</Moment>
                    </p>
                  </div>
                </div>
                <div className="pt-3 pb-2">
                  <ReadMore more={post.text} />
                </div>
                <video
                  className="detail-page-video"
                  src={post.filePath}
                  controls
                ></video>
                <div className="border p-2">
                  <p className="text-muted ">
                    <span className="pl-2">
                      {showActions ? (
                        <span>
                          <button
                            onClick={this.onLikeClick.bind(this, post._id)}
                            type="button"
                            className="btn btn-light mr-1"
                          >
                            Like
                            <i
                              className={classnames("fas fa-thumbs-up pl-1", {
                                "text-info": this.findUserLike(post.likes),
                              })}
                            />
                            <span className="badge badge-light">
                              {post.likes.length}
                            </span>
                          </button>
                          <button
                            onClick={this.onUnlikeClick.bind(this, post._id)}
                            type="button"
                            className="btn btn-light mr-1"
                          >
                            dislike{" "}
                            <i className="text-secondary fas fa-thumbs-down pl-1" />
                          </button>
                          <button
                            className="btn-default border-0 p-1 text-muted mr-2"
                            onClick={() => {
                              this.setState((prevState) => ({
                                displayCommentForm: !prevState.displayCommentForm,
                              }));
                            }}
                          >
                            comment <i className="fas fa-comment  pl-1 "></i>
                            <span className="badge badge-light">
                              {post.comments.length}
                            </span>
                          </button>

                          {post.user === auth.user.id ? (
                            <button
                              onClick={this.onDeleteClick.bind(this, post._id)}
                              type="button"
                              className="btn btn-danger btn-sm mr-1"
                            >
                              <i className="fas fa-times" />
                            </button>
                          ) : null}
                        </span>
                      ) : null}
                    </span>{" "}
                    <span className="pl-4">
                      <button className=" btn btn-default p-1 border-0 text-muted">
                        {diffDays} views
                      </button>

                      <span>
                        <button className="btn btn-default p-1 border-0 ml-3">
                          <Moment format="MMM DD, YYYY">{createDate}</Moment>
                        </button>
                      </span>
                    </span>
                  </p>
                </div>{" "}
                <div className="">
                  {commentForm}

                  {commentFeeds}
                </div>{" "}
              </div>
            </div>
            <div className="col-md-3">
              <div className="border p-2">Ads</div>
            </div>
          </div>{" "}
          <hr />
          <div className="row p-2">{postItems}</div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/feed" className="btn btn-light mb-3">
              Back To Feed
            </Link>
          </div>
        </div>
        <div className="post p-2" style={{ backgroundColor: "white" }}>
          {postContent}
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  showActions: true,
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getPost,
  getPosts,
  deletePost,
  addLike,
  removeLike,
})(Post);
