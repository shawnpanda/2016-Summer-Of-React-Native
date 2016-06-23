import { fakeFetchMovies } from '../api/index' 
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

const MOVIE_DB = '12d413ef356ab41e658251659e1ad04c'

export function selectMovie(movie) {
	return {
		type: SELECT_MOVIE,
		movie
	}
}

export function requestMovies() {
	return {
		type: REQUEST_MOVIES,
	}
}

export function receiveMovies(category, response) {
	return {
		type: RECEIVE_MOVIES,
		movies: response,
		category
	}
}

function fetchMovies(category) {
	return dispatch => {
		dispatch(requestMovies())
		return fetch('http://api.themoviedb.org/3/movie/popular?api_key=' + MOVIE_DB, {
			method: 'GET',
			headers: {
		    'Content-Type': 'application/json',
		    'Host': 'api.themoviedb.org',
			}
		})
			.then(data => {
				console.log(data)
				return data.json()
			})
			.then(formatted => {
				console.log(formatted.results)
				return formatted.results
			})
			.then(response => dispatch(receiveMovies(category, response)))
			.catch((error) => {
				console.warn(error)
			})
	}
}

export function fetchMoviesIfNeeded(category) {
	return dispatch => {
		return dispatch(fetchMovies(category))
	}
}