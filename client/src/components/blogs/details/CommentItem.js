import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../../actions/blogActions';
import AvatarImage from '../../../img/avatar.jpg';

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment
}) => (
  <div className="commented-by">
    <p className="">{text}</p>
    <p>
      {' '}
      <Link to={`/profile/${user}`}>
        <img className="" src={AvatarImage} alt="" />
        <span>{name}</span>
      </Link>
      <span className="" style={{ fontSize: '12px' }}>
        Posted on <Moment format="MMM DD, YYYY">{date}</Moment>
      </span>
      <span className="">
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type="button"
            className="btn-red "
          >
            <i className="fas fa-times fa-sm"></i>
          </button>
        )}
      </span>
    </p>
    <hr />
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
