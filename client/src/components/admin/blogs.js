import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blogActions';
import Moment from 'react-moment';

import AvatarImg from '../../img/avatar.jpg';

const AllBlogs = ({ getBlogs, blog: { blogs } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const blogItem = blogs.map((m, index) => (
    <tr key={m._id} className="table-justify">
      <td>{m._id}</td>
      <td>{m.name}</td>
      <td>
        <Moment format="MMM DD, YYYY">{m.date}</Moment>
      </td>
      <td>{m.title}</td>
      <td>{m.text}</td>
      <td>
        <Link to={`/blog/${m._id}`}>
          <img
            src={m.filePath ? m.filePath : AvatarImg}
            alt=""
            className="img-fluid"
            style={{ maxWidth: '60px', maxHeight: '60px' }}
          />
        </Link>
      </td>
    </tr>
  ));
  return (
    <div>
      <h3 className="text-info text-center mb-2 p-3">List of Blogs</h3>

      <table className="table table-responsive table-sm">
        <thead className="thead-dark">
          <tr className="table-center">
            <th>ID</th>
            <th>Posted by</th>
            <th>Date Posted</th>
            <th>Title</th>
            <th>Text</th>
            <th>Image</th>
            <th />
          </tr>

          {blogItem}
        </thead>
      </table>
    </div>
  );
};

AllBlogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogs })(AllBlogs);
