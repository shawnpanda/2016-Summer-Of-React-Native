import { fakeFetchMovies } from '../api/index' 
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FETCHING_NEXT_PAGE_MOVIES = 'FETCHING_NEXT_PAGE_MOVIES'

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

export function receiveMovies(category, response, page) {
	return {
		type: RECEIVE_MOVIES,
		movies: response,
		category,
		page
	}
}

export const fetchingNextPageMovies = () => {
	return {
		type: FETCHING_NEXT_PAGE_MOVIES
	}
}

export function getMoviesNextPage(page) {
	return dispatch => {
		dispatch(fetchingNextPageMovies())
	}
}

function fetchMovies(category) {
	return dispatch => {
		dispatch(requestMovies())
		return fetch('http://api.themoviedb.org/3/movie/' + category + '?api_key=' + MOVIE_DB, {
			method: 'GET',
			headers: {
		    'Content-Type': 'application/json'
			}
		})
			.then(data => data.json())
			.then(response => dispatch(receiveMovies(category, response.results, response.page)))
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