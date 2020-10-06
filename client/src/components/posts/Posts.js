import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [displayFeeds, toggleDisplayFeeds] = useState(false);

  return (
    <div className="feeds-page">
      <div className="feeds-page-item">
        <div className="feeds-page-item-body-color"></div>
      </div>
      <div className="feeds-page-item ">
        <input
          onClick={() => toggleDisplayFeeds(!displayFeeds)}
          placeholder="Say something..."
          className="form-control"
        />

        {displayFeeds && <PostForm />}
        <div className="feeds-page-body">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </div>{' '}
      <div className="feeds-page-item">
        <div className="feeds-page-item-body-color"></div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
