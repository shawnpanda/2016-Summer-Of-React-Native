
import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import movieApp from './reducers/reducers'
import MoviesContainer from './containers/MoviesContainer'
import MovieDetails from './components/MovieDetails'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger'


const logger = createLogger()
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, logger),
    devTools()
  );

  const store = createStore(movieApp, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

let store = configureStore()



const RouterWithRedux = connect()(Router)

class MovieApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<RouterWithRedux>
					<Scene key='home' component={MoviesContainer} title='Home' initial={true}/> 
					<Scene key='details' component={MovieDetails} title='Details'/>
				</RouterWithRedux>
			</Provider>
		)
	}
}

export default MovieApp