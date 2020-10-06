import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { deleteBlog, addLike, removeLike } from '../../../actions/blogActions';

const BlogItem = ({
  addLike,
  removeLike,
  deleteBlog,
  auth,
  blog: { _id, text, user, likes, comments, title, date, filePath },
  showActions
}) => {
  const [displayFeeds, setDisplayFeeds] = useState(false);
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const createDate = new Date(date);
  const dateNow = new Date();
  const diffTime = Math.abs(dateNow - createDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <Fragment>
      <div className="details-blogs-box">
        <img src={filePath} alt="blogImage" />
      </div>
      <div className="details-blogs-box">
        <div>
          {' '}
          <h5> {title}</h5>
          <p>{text}</p>
        </div>
      </div>
      <div className="blogs-comment">
        <p className=" ">
          <span className="">
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
                  className="btn-small "
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <button
                  className="btn-small"
                  onClick={() => {
                    setDisplayCommentForm((prevState) => ({
                      displayCommentForm: !prevState.displayCommentForm
                    }));
                  }}
                >
                  comment <i className="fas fa-comment "></i>
                  <span className="badge badge-light">{comments.length}</span>
                </button>

                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deleteBlog(_id)}
                    type="button"
                    className=" btn-red"
                  >
                    <i className="fas fa-times fa-sm"></i>
                  </button>
                )}
              </span>
            ) : null}
          </span>{' '}
          <span className="">
            <button className=" btn-small ">{diffDays} views</button>
            <button className=" btn-small ">
              <Moment format="MMM DD, YYYY">{createDate}</Moment>
            </button>
          </span>
        </p>
      </div>{' '}
      <div className="blogs-comment">
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
                className="btn-small "
              >
                View Comments <i className="fas fa-chevron-circle-down "></i>
              </button>
            </div>
          </div>
        )}

        <div className="displayFeeds">
          {displayFeeds &&
            comments.map((comment) => (
              <CommentItem key={comment._id} comment={comment} postId={_id} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

BlogItem.defaultProps = {
  showActions: true
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deleteBlog })(
  BlogItem
);
