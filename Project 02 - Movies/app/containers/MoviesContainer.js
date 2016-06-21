import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
// import { setVisibilityFilter } from '../actions/actions'
import Movies from '../components/Movies'
// import fetchMovies from '../api/index'
import { receiveMovies, fetchMovies } from '../actions/actions'
import { View, Text } from 'react-native'

class MoviesContainer extends Component {
	componentDidMount() {
		fetchMovies('popular')
		console.log('component did mount')
	}

	componentWillReceiveProps(nextProps) {
	    if (nextProps.category !== this.props.category) {
	      const { dispatch, category } = nextProps
	      dispatch(fetchMovies(category))
	    }
	  }

	render () {
		const { movies } = this.props
		return (
			<Movies movies={movies}/>
		)
	}
}

MoviesContainer.propTypes = {
	movies: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

MoviesContainer = connect(mapStateToProps)(MoviesContainer)

export default MoviesContainer