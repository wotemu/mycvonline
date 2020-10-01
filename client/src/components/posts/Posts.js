import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import ModalBox from './modal';
import { getPosts } from '../../actions/postActions';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [displayFeeds, toggleDisplayFeeds] = useState(false);

  return (
    <div className="feed">
      <div className="container">
        <div className="row" style={{ backgroundColor: 'white' }}>
          <div className="col-lg-8 col-md-10 col-sm-12 m-auto ">
            <div className=" border mb-5 mt-3">
              <div className="card-body">
                <p className="text-center text-lead">Say something...</p>
                <input
                  onClick={() => toggleDisplayFeeds(!displayFeeds)}
                  placeholder="Say something..."
                  className="form-control"
                  type="button"
                />

                {displayFeeds && <PostForm />}
              </div>
            </div>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
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
