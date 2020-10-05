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
    <div>
      <section className="details-blogs-boxes-back-to">
        <Link to="/blogs">
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </Link>
      </section>

      <section className="details-blogs-boxes">
        <BlogItem blog={blog} showActions={true} />
      </section>
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
