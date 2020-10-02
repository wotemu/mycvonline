import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_BLOGS,
  BLOG_ERROR,
  BLOG_LIKES,
  DELETE_BLOG,
  ADD_BLOG,
  GET_BLOG,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

// Get blogs
export const getBlogs = () => async (dispatch) => {
  try {
    const res = await api.get('/blogs');

    dispatch({
      type: GET_BLOGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/blogs/like/${id}`);

    dispatch({
      type: BLOG_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/blogs/unlike/${id}`);

    dispatch({
      type: BLOG_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    await api.delete(`/blogs/${id}`);

    dispatch({
      type: DELETE_BLOG,
      payload: id
    });

    dispatch(setAlert('Blog Removed Successfully!', 'success'));
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add blog
export const addBlog = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post('/blogs', formData);

    dispatch({
      type: ADD_BLOG,
      payload: res.data
    });

    dispatch(setAlert('Blog Created Successfully', 'success'));
    history.push('/blogs');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get blog
export const getBlog = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/blogs/${id}`);

    dispatch({
      type: GET_BLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/blogs/comment/${postId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/blogs/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed Successfully', 'success'));
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
