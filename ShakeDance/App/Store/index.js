import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import createThunkMiddleware from 'redux-thunk';


export const preloadState = {};

/**
 * @param initialState
 * @returns {{run: *}}
 * @constructor
 */
function Store(initialState = preloadState) {
  const thunkMiddleware = createThunkMiddleware();
  const middleware = [thunkMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return {
    ...store,
    run: sagaMiddleware.run
  }
}
export default Store;