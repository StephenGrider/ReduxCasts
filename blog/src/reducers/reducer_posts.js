import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POST:
    return { ...state, [action.payload.data.id]: action.payload.data };
  case FETCH_POSTS:
    const newPosts = _.mapKeys(action.payload.data, 'id');
    return { ...state, ...newPosts };
  case CREATE_POST:
    return {...state, [action.payload.data.id]: action.payload.data};
  case DELETE_POST:
    return _.omit(state, action.payload.data.id);
  default:
    return state;
  }
}
