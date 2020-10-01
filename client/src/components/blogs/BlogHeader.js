import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blogActions';

import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const BlogHeader = ({ getBlogs, blog: { blogs } }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
      {blogs.map((blog) => (
        <div className="card p-0 border-0 text-center" key={blog._id}>
          <img
            className="img-fluid"
            src={blog.image}
            alt="blogImage"
            style={{ width: 'auto', maxHeight: '600px' }}
          />
          <Link to={`/blog/${blog._id}`} className="blogsPageLink">
            <h5 className="headePageText"> {blog.title}</h5>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

BlogHeader.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogs })(BlogHeader);
