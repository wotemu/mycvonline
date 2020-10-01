import React, { useState } from 'react';
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
  blog: { _id, text, user, likes, comments, title, date, image },
  showActions
}) => {
  const [displayFeeds, setDisplayFeeds] = useState(false);
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const createDate = new Date(date);
  const dateNow = new Date();
  const diffTime = Math.abs(dateNow - createDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 mb-3">
          <img
            className="img-fluid"
            src={image}
            alt="blogImage"
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
        <div className="col-md-5">
          <h5 className="detailsPageHeader"> {title}</h5>
          <p className="detailsPageText">{text}</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 border  m-3 p-2">
          <p className="text-muted ">
            <span className="pl-2">
              {showActions ? (
                <span>
                  <button
                    onClick={() => addLike(_id)}
                    type="button"
                    className="btn btn-light mr-1"
                  >
                    <i className="fas fa-thumbs-up" />{' '}
                    <span>
                      {likes.length > 0 && <span>{likes.length}</span>}
                    </span>
                  </button>
                  <button
                    onClick={() => removeLike(_id)}
                    type="button"
                    className="btn btn-light mr-1"
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
                    comment <i className="fas fa-comment  pl-1 "></i>
                    <span className="badge badge-light">{comments.length}</span>
                  </button>

                  {!auth.loading && user === auth.user._id && (
                    <button
                      onClick={() => deleteBlog(_id)}
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-times fa-sm"></i>
                    </button>
                  )}
                </span>
              ) : null}
            </span>{' '}
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
        </div>{' '}
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          {displayCommentForm && (
            <div>
              <CommentForm postId={_id} />
              <div className="mb-3 pl-2">
                <button
                  type="button"
                  onClick={() => {
                    setDisplayFeeds((prevState) => ({
                      displayFeeds: !prevState.displayFeeds
                    }));
                  }}
                  className="btn btn-default"
                >
                  View Comments{' '}
                  <i className="fas fa-chevron-circle-down pl-2"></i>
                </button>
              </div>
            </div>
          )}

          {displayFeeds &&
            comments.map((comment) => (
              <CommentItem key={comment._id} comment={comment} postId={_id} />
            ))}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
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
