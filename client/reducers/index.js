import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer // This will handle the routing state
});

export default rootReducer;