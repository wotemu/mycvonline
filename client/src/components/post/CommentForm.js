import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div className="post-comment-body">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <TextAreaFieldGroup
            placeholder="Add a comment..."
            name="text"
            value={text}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
