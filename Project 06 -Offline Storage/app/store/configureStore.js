import { createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import notesApp from '../reducers/reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
    devTools()
  );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  return createStore(notesApp, initialState, enhancer);
}