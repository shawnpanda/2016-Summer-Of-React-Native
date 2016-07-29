import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers/reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const logger = createLogger()
  const store = createStore(rootReducer, 
              initialState, 
              compose(
                applyMiddleware(thunk, logger),
                devTools({
                  hostname: 'localhost', port: 8081,
                })
              ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}