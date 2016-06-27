import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import jokesApp from '../reducers/index';

export default function configureStore(initialState) {
  const enhancer = compose(
    devTools()
  );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  return createStore(jokesApp, initialState, enhancer);
}