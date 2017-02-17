import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import app from '../redux/modules/index';

import initialState from './initialState';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(app, initialState, applyMiddleware(...middlewares));
};

export default configureStore;
