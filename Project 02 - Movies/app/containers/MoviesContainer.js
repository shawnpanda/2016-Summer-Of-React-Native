import { connect } from 'react-redux'
import React, { Component} from 'react'
// import { setVisibilityFilter } from '../actions/actions'
import Movies from '../components/Movies'
import fetchMovies from '../api/index'
import receiveMovies from '../actions/actions'

class MoviesContainer extends Component {
	ComponentDidMount() {
		this.fetchData()
	}

	fetchData() {
		fetchMovies('popular').then(movies =>
			receiveMovies('popular', movies)
		)
	}
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

MoviesContainer = connect(mapStateToProps)(Movies)

export default MoviesContainer