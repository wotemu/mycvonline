import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import Spinner from '../../layout/Spinner';

import { getBlog } from '../../../actions/blogActions';

const Blog = ({ getBlog, blog: { blog, loading }, match }) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog, match.params.id]);

  return loading || blog === null ? (
    <Spinner />
  ) : (
    <div className="card card-body  border-0">
      <div className="row">
        <div className="col-md-1"></div>
        <Link to="/blogs" className="btn btn-light mb-3">
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </Link>
      </div>
      <BlogItem blog={blog} showActions={true} />
    </div>
  );
};

Blog.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlog })(Blog);
