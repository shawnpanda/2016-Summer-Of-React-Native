import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const logger = createLogger()
  const store = createStore(rootReducer, 
              initialState, 
              compose(
                applyMiddleware(logger),
                global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope
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