import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from './layout/Alert';
import PrivateRoute from './common/PrivateRoute';
import AdminRoute from './common/AdminRoute';
import Register from './auth/Register';
import Login from './auth/Login';
import CreateProfile from './create-profile/CreateProfile';
import EditProfile from './create-profile/EditProfile';

import Dashboard from './mydashboard/Mydashboard';
import AdminPage from './admin/AdminPage';

import AddExperience from './profile-credentials/AddExperience';
import AddEducation from './profile-credentials/AddEducation';
import AddSkills from './profile-credentials/AddSkills';
import AddHobbies from './profile-credentials/AddHobbies';
import AddPortfolio from './profile-credentials/AddPortfolio';
import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';
import AddReference from './profile-credentials/AddReference';

import Posts from './posts/Posts';
import Blogs from './blogs/Blogs';
import BlogForm from './blogs/BlogForm';
import Blog from './blogs/details/DetailBlog';
import NotFound from './not-found/NotFound';
import Search from './common/searchBox';

const Routes = (props) => {
  return (
    <div>
      <Alert />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/search" component={Search} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />

        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/add-reference" component={AddReference} />
        <PrivateRoute exact path="/add-portfolio" component={AddPortfolio} />
        <PrivateRoute exact path="/add-hobby" component={AddHobbies} />
        <PrivateRoute exact path="/add-skill" component={AddSkills} />
        <AdminRoute exact path="/add-blog" component={BlogForm} />
        <AdminRoute exact path="/admin" component={AdminPage} />

        <PrivateRoute exact path="/feed" component={Posts} />
        <PrivateRoute exact path="/blogs" component={Blogs} />
        <PrivateRoute exact path="/blog/:id" component={Blog} />
        <Route exact path="/not-found" component={NotFound} />
      </Switch>
    </div>
  );
};
export default Routes;
