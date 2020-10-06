import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReadMore from './ReadMore';
import Moment from 'react-moment';

import CommentForm from '../post/CommentForm';
import CommentFeed from '../post/CommentFeed';

import { deletePost, addLike, removeLike } from '../../actions/postActions';
import AvatarImage from '../../img/avatar.jpg';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, user, likes, comments, date, filePath },
  showActions
}) => {
  const [displayFeeds, setDisplayFeeds] = useState(false);
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const createDate = new Date(date);
  const dateNow = new Date();
  const diffTime = Math.abs(dateNow - createDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="feeds-item-container">
      <p className="post-avatar ">
        <span className="">
          <img src={AvatarImage} className="avatar" alt="" />
        </span>
        <span>Posted by </span> <span>{name}</span>
        <span>on</span>
        <span>
          <Moment format="MMM DD, YYYY">{createDate}</Moment>
        </span>
      </p>
      <div className="post-main-body">
        <ReadMore more={text} />
      </div>
      <img className="" src={filePath} alt="" />
      <div className="">
        <p className="">
          <span className="pl-2">
            {showActions ? (
              <span>
                <button
                  onClick={() => addLike(_id)}
                  type="button"
                  className="btn-small"
                >
                  <i className="fas fa-thumbs-up" />{' '}
                  <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <button
                  onClick={() => removeLike(_id)}
                  type="button"
                  className="btn-small"
                >
                  <i className="text-secondary fas fa-thumbs-down pl-1" />
                </button>
                <button
                  className="btn-default border-0 p-1 text-muted mr-2"
                  onClick={() => {
                    setDisplayCommentForm((prevState) => ({
                      displayCommentForm: !prevState.displayCommentForm
                    }));
                  }}
                >
                  comment <i className="fas fa-comment   "></i>
                  <span className="badge badge-light">{comments.length}</span>
                </button>

                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deletePost(_id)}
                    type="button"
                    className=" btn-red"
                  >
                    <i className="fas fa-times fa-sm"></i>
                  </button>
                )}
              </span>
            ) : null}
          </span>{' '}
          <span className="pl-4">
            <button className=" btn-small">{diffDays} views</button>

            <span>
              <button className="btn-small">
                <Moment format="MMM DD, YYYY">{createDate}</Moment>
              </button>
            </span>
          </span>
        </p>
      </div>{' '}
      <div className="">
        {displayCommentForm && (
          <div>
            <CommentForm postId={_id} />
            <div className="">
              <button
                type="button"
                onClick={() => {
                  setDisplayFeeds((prevState) => ({
                    displayFeeds: !prevState.displayFeeds
                  }));
                }}
                className="btn-small"
              >
                View Comments{' '}
                <i className="fas fa-chevron-circle-down pl-2"></i>
              </button>
            </div>
          </div>
        )}

        {displayFeeds && <CommentFeed postId={_id} comments={comments} />}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
