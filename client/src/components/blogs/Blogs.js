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
    <div className="blog">
      <div className="container pt-3" style={{ backgroundColor: 'white' }}>
        <div className="row">
          <div className="col-md-8 m-auto text-center">
            <BolgHeader />
          </div>
        </div>

        {blogs.length === 0 ? (
          <div className="NoBlogsBgc">
            <h5 className="text-center  blogsPageArticles p-2">
              No blogs to display
            </h5>
          </div>
        ) : (
          <div>
            <h2 className="text-center  blogsPageHeader">Blogs</h2>
            <h5 className="text-center  blogsPageArticles">All Blogs</h5>
            <div className="row">
              {blogs.map((blog) => (
                <div className="col-md-3 equalHeightCol" key={blog._id}>
                  <div className="card card-body mb-3  border-0">
                    <Link to={`/blog/${blog._id}`} className="blogsPageLink">
                      <div className="pb-1">
                        <img
                          className="img-fluid blogsPageImage "
                          src={blog.image}
                          alt="blogImage"
                        />
                      </div>
                      <h6 className="blogPageTitle"> {blog.title}</h6>
                      <p className="blogPageText">
                        <ReadMore more={blog.text} />{' '}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
