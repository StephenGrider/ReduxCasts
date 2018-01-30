import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
          /*const post = action.payload.data;
          const postid = action.payload.data.id
          const newstate = { ...state }; // this spread operator does't seem to have a real utility on my opinion
          newstate[postid] = post;// add a new property for the obj newstate with the id as a key and post as a value
          return newstate;*/
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
