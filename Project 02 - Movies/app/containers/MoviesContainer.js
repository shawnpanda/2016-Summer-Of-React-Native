import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Movies from '../components/Movies'
import { fetchMoviesIfNeeded, getMoviesNextPage } from '../actions/actions'
import { View, Text, TouchableOpacity } from 'react-native'

class MoviesContainer extends Component {
	componentDidMount() {
		this.props.fetchMoviesIfNeeded('popular')
	}

  render () {
		const { isFetching, movies, isLoadingMore, page } = this.props
		return (
			<Movies movies={movies} 
        isFetching={isFetching} 
        isLoadingMore={isLoadingMore}
        getMoviesNextPage={this.props.getMoviesNextPage}
        page={page}
      />
		)
	}
}

MoviesContainer.propTypes = {
	movies: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	const	{ isFetching, movies, isLoadingMore, page } = state.movieData
  return {
    movies,
    isFetching,
    isLoadingMore,
    page
  }
}


MoviesContainer = connect(mapStateToProps, {
	fetchMoviesIfNeeded, getMoviesNextPage
})(MoviesContainer)

export default MoviesContainer