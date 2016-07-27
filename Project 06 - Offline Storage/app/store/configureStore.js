import { createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import notesApp from '../reducers/reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
    devTools()
  );
  // Note: passing enhancer as last argument requires redux@>=3.1.0
  const store = createStore(notesApp, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}