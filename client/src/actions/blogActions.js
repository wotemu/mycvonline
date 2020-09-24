import axios from "axios";

import {
  ADD_BLOG,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_BLOGS,
  GET_BLOG,
  BLOG_LOADING,
  DELETE_BLOG,
} from "./types";

// Add Post
export const addBlog = (blogData, history) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/api/blogs", blogData)
    .then((res) => {
      dispatch({
        type: ADD_BLOG,
        payload: res.data,
      });
      history.push("/blogs");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Get Posts
export const getBlogs = () => (dispatch) => {
  dispatch(setBlogLoading());
  axios
    .get("/api/blogs")
    .then((res) =>
      dispatch({
        type: GET_BLOGS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_BLOGS,
        payload: null,
      })
    );
};

// Get Post
export const getBlog = (id) => (dispatch) => {
  dispatch(setBlogLoading());
  axios
    .get(`/api/blogs/${id}`)
    .then((res) =>
      dispatch({
        type: GET_BLOG,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_BLOG,
        payload: null,
      })
    );
};

// Delete Post
export const deleteBlog = (id) => (dispatch) => {
  axios
    .delete(`/api/blogs/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_BLOG,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set loading state
export const setBlogLoading = () => {
  return {
    type: BLOG_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
