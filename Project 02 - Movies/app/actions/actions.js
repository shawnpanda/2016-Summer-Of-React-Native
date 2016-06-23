import { fakeFetchMovies } from '../api/index' 
import { normalized } from '../helper/helper'

export const SELECT_MOVIE = 'SELECT_MOVIE'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

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
		response
	}
}

function fetchMovies(category) {
	return dispatch => {
		dispatch(requestMovies())
		return fakeFetchMovies('popular')
			.then(data => normalized(data))
			.then(response =>dispatch(receiveMovies(category, response)))
	}
}

export function fetchMoviesIfNeeded(category) {
	return dispatch => {
		return dispatch(fetchMovies(category))
	}
}