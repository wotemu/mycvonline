import React, { Component } from 'react';
import AllBlogs from './blogs';
import AllPosts from './posts';
import AllProfiles from './profiles';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: true,
      posts: false,
      blogs: false
    };
  }
  profilespage = () => {
    this.setState({
      profiles: true,
      posts: false,
      blogs: false
    });
  };

  postspage = () => {
    this.setState({
      posts: true,
      profiles: false,
      blogs: false
    });
  };

  blogspage = () => {
    this.setState({
      blogs: true,
      posts: false,
      profiles: false
    });
  };

  render() {
    const { blogs, profiles, posts } = this.state;
    return (
      <div className="admin-page">
        <div className="admin-content">
          <div className="admin-header">
            <h2>Admin Page </h2>{' '}
          </div>
          <div className="mynavbar">
            <ul>
              <button
                type="button"
                onClick={this.profilespage}
                className="bg-info"
              >
                All Profiles
              </button>
              <button
                type="button"
                onClick={this.postspage}
                className="bg-info"
              >
                All Posts
              </button>
              <button
                type="button"
                onClick={this.blogspage}
                className="bg-info"
              >
                All Blogs
              </button>
              <button
                type="button"
                onClick={this.blogspage}
                className="bg-info"
              >
                All Users
              </button>
            </ul>
          </div>
        </div>

        <div className="dashbord-content">
          {profiles ? <AllProfiles /> : ''}
          {posts ? <AllPosts /> : ''}
          {blogs ? <AllBlogs /> : ''}
        </div>
      </div>
    );
  }
}

export default AdminPage;
