import {
  ADD_BLOG,
  GET_BLOGS,
  GET_BLOG,
  DELETE_BLOG,
  BLOG_LOADING,
} from "../actions/types";

const initialState = {
  blogs: [],
  blog: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BLOG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    default:
      return state;
  }
}
