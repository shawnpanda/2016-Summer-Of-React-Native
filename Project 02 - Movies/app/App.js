
import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import movieApp from './reducers/reducers'
import MoviesContainer from './containers/MoviesContainer'
import MovieDetails from './components/MovieDetails'

let store = createStore(movieApp)
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