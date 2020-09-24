import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/create-profile/EditProfile";

import Dashboard from "./components/dashboard/Dashboard";

import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import AddSkills from "./components/add-credentials/AddSkills";
import AddHobbies from "./components/add-credentials/AddHobbies";
import AddPortfolio from "./components/add-credentials/AddPortfolio";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import AddReference from "./components/add-credentials/AddReference";

import Posts from "./components/posts/Posts";
import Blogs from "./components/blogs/Blogs";
import BlogForm from "./components/blogs/dashbord/BlogForm";
import Blog from "./components/blogs/details/DetailBlog";
import BlogDashboard from "./components/blogs/dashbord/BlogDashboard";

import NotFound from "./components/not-found/NotFound";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container-fluid">
              <div className="container-width">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:handle" component={Profile} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/create-profile"
                    component={CreateProfile}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/edit-profile"
                    component={EditProfile}
                  />
                </Switch>

                <Switch>
                  <PrivateRoute
                    exact
                    path="/add-experience"
                    component={AddExperience}
                  />
                </Switch>

                <Switch>
                  <PrivateRoute
                    exact
                    path="/add-education"
                    component={AddEducation}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/add-reference"
                    component={AddReference}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/add-portfolio"
                    component={AddPortfolio}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/add-hobby"
                    component={AddHobbies}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/add-skill" component={AddSkills} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/add-blog" component={BlogForm} />
                </Switch>

                <Switch>
                  <PrivateRoute exact path="/feed" component={Posts} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/blogs" component={Blogs} />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/blogs-dashboard"
                    component={BlogDashboard}
                  />
                </Switch>

                <Switch>
                  <PrivateRoute exact path="/blog/:id" component={Blog} />
                </Switch>

                <Route exact path="/not-found" component={NotFound} />
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
