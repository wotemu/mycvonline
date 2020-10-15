import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import Moment from 'react-moment';

import AvatarImg from '../../img/avatar.jpg';

const AllPosts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const postItem = posts.map((m, index) => (
    <tr key={m._id} className="table-justify">
      <td>{m._id}</td>
      <td>{m.name}</td>
      <td>
        <Moment format="MMM DD, YYYY">{m.date}</Moment>
      </td>
      <td>{m.text}</td>
      <td>
        <img
          src={m.filePath ? m.filePath : AvatarImg}
          alt=""
          className="img-fluid"
          style={{ maxWidth: '60px', maxHeight: '60px' }}
        />
      </td>
    </tr>
  ));
  return (
    <div>
      <h3 className="text-info text-center mb-2 p-3">List of Posts</h3>

      <table className="table table-responsive table-sm">
        <thead className="thead-dark">
          <tr className="table-center">
            <th>ID</th>
            <th>Posted by</th>
            <th>Date Posted</th>
            <th>Text</th>
            <th>Image</th>
            <th />
          </tr>

          {postItem}
        </thead>
      </table>
    </div>
  );
};

AllPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(AllPosts);
