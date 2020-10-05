import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/postActions';

import AvatarImage from '../../img/avatar.jpg';

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment
}) => (
  <div className="comment-form-feeds">
    <p className="comment-form-text">{text}</p>
    <p className="post-avatar ">
      <span>
        <Link to={`/profile/${user}`}>
          <img className="avatar" src={AvatarImage} alt="" />
        </Link>
      </span>
      <span>Comment by </span> <span>{name}</span>
      <span>on</span>
      <span>
        <Moment format="MMM DD, YYYY">{date}</Moment>
      </span>
      <span>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type="button"
            className="btn-small btn-red"
          >
            <i className="fas fa-times fa-sm"></i>
          </button>
        )}{' '}
      </span>
    </p>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
