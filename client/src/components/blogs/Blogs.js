import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blogActions';
import BolgHeader from './BlogHeader';
import ReadMore from './ReadMore';

const Blogs = ({ getBlogs, blog: { blogs } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div>
      <div className="list-of-blogs">
        <h5 className="">Blogs</h5>
      </div>
      <div className="blogs-header-content">
        <div className="blogs-header-body">
          <BolgHeader />
        </div>
      </div>
      <div className="list-of-articles">
        <h5 className="">Articles</h5>
      </div>
      <div className="blogs">
        {blogs.length === 0 ? (
          <h5 className="">No blogs to display</h5>
        ) : (
          blogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <Link to={`/blog/${blog._id}`}>
                <img className=" " src={blog.filePath} alt="blogImage" />
                <h6 className="">
                  {' '}
                  <ReadMore more={blog.title} />
                </h6>
                <p className="">
                  <ReadMore more={blog.text} />{' '}
                </p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogs })(Blogs);
