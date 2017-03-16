import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jlkdsafouiwerkjlasfdj;';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props, cb) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
    .then(res => {
      cb();
      return res;
    });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, cb) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(res => {
    cb();
    return res;
  });

  return {
    type: DELETE_POST,
    payload: request
  };
}
