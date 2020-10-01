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
  <div className="card card-body mb-1 pb-1">
    <div className="row">
      <div className="col-md-3">
        <Link to={`/profile/${user}`}>
          <img className="avatar rounded-circle" src={AvatarImage} alt="" />
          <p>{name}</p>
        </Link>
      </div>
      <div className="col-md-7">
        <p className="">{text}</p>
      </div>
      <div className="col-md-2">
        <p className="text-muted">
          {' '}
          On <Moment format="MMM DD, YYYY">{date}</Moment>
        </p>
        <p>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deleteComment(postId, _id)}
              type="button"
              className="btn btn-danger btn-sm"
            >
              <i className="fas fa-times fa-sm"></i>
            </button>
          )}{' '}
        </p>
      </div>
    </div>
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
