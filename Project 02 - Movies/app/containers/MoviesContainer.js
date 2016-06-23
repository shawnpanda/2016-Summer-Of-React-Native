import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Movies from '../components/Movies'
import { fetchMoviesIfNeeded } from '../actions/actions'
import { View, Text, TouchableOpacity } from 'react-native'

class MoviesContainer extends Component {
	componentDidMount() {
		this.props.fetchMoviesIfNeeded('popular')
		console.log('component did mount')
	}

	render () {
		const { isFetching, movies } = this.props
		return (
			<Movies movies={movies} isFetching={isFetching}/>
		)
	}
}

MoviesContainer.propTypes = {
	movies: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	const	{ isFetching, movies } = state.movieData
  return {
    movies: movies,
    isFetching: isFetching
  }
}


MoviesContainer = connect(mapStateToProps, {
	fetchMoviesIfNeeded
})(MoviesContainer)

export default MoviesContainer