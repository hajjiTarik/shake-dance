import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk  from 'redux-thunk';

export const preloadState = {};

/**
 * @param initialState
 * @returns {{run: *}}
 * @constructor
 */
export class Store {
  constructor(initialState = preloadState) {
    const middleware = [thunk];

    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    );

    Object.assign(this, store);
  }
}

// singleton
export const store = Object.freeze(new Store({}));

