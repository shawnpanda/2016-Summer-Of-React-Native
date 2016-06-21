export const SELECT_MOVIE = 'SELECT_MOVIE'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export function selectMovie(movie) {
	return {
		type: SELECT_MOVIE,
		movie
	}
}

export function requestMovies(movie) {
	return {
		type: REQUEST_MOVIES,
		movie
	}
}

export function receiveMovies(category, response) {
	return {
		type: RECEIVE_MOVIES,
		movies: response,
		category
	}
}

function fetchMovies(movie) {
	return dispatch => {
		dispatch(requestMovies(movie))
		return fetch()
	}
}