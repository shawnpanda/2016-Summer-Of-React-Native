
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'

import MoviesContainer from './containers/MoviesContainer'
import MovieDetailsContainer from './containers/MovieDetailsContainer'

let store = configureStore()

const RouterWithRedux = connect()(Router)

class MovieApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<RouterWithRedux>
					<Scene key='home' component={MoviesContainer} title='Home' initial={true}/> 
					<Scene key='details' component={MovieDetailsContainer} title='Details'/>
				</RouterWithRedux>
			</Provider>
		)
	}
}

export default MovieApp