import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
// import { setVisibilityFilter } from '../actions/actions'
import Movies from '../components/Movies'
import { fetchMoviesIfNeeded } from '../actions/actions'
import { View, Text, TouchableOpacity } from 'react-native'

class MoviesContainer extends Component {
	componentDidMount() {
		this.props.fetchMoviesIfNeeded('popular')
		console.log('component did mount')
	}

	render () {
		const { movies } = this.props
		return (
			<View>
			<View>
				<Movies movies={movies}/>
			</View>
			<View>
				<TouchableOpacity onPress={fetchMoviesIfNeeded}>
					<Text>REFRESH</Text>
				</TouchableOpacity>
			</View>
			</View>
		)
	}
}

MoviesContainer.propTypes = {
	movies: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	const	{ movies } = state.movieData
  return {
    movies: movies
  }
}


MoviesContainer = connect(mapStateToProps, {
	fetchMoviesIfNeeded
})(MoviesContainer)

export default MoviesContainer