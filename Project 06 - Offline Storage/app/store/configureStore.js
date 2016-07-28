import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import notesApp from '../reducers/reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(createLogger()),
    devTools()
  );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  let store = createStore(notesApp, 
              initialState, 
              compose(
                applyMiddleware(createLogger())
              ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}