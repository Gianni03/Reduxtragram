import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  // If you use the Redux DevTools extension, this will enable it
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

// Create the store with the default state
const store = createStore(
  rootReducer,
  defaultState,
enhancers)

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;