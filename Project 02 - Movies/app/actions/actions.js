import { fakeFetchMovies } from '../api/index' 
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const FETCHED_TRAILER = 'FETCHED_TRAILER'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FETCHING_NEXT_PAGE_MOVIES = 'FETCHING_NEXT_PAGE_MOVIES'


const MOVIE_API = 'http://api.themoviedb.org/3/movie/'
const MOVIE_DB = '12d413ef356ab41e658251659e1ad04c'

export function selectMovie(id) {
	return dispatch => {
		return fetch(MOVIE_API + id + '/videos?api_key=' + MOVIE_DB, {
			method: 'GET',
			headers: {
		    'Content-Type': 'application/json'
			}
		})
			.then(data => data.json())
			.then(response => dispatch(fetchedTrailer(id, response.results[0].key)))
			.catch((error) => {
				console.warn(error)
			})
	}
}

function fetchedTrailer(id, trailerURL) {
		return {
		type: FETCHED_TRAILER,
		id,
		trailerURL
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

function fetchMovies(category, movies = [], page = 1) {
	return dispatch => {
		return fetch(MOVIE_API + category + 
								'?api_key=' + MOVIE_DB + 
								'&page=' + page, {
			method: 'GET',
			headers: {
		    'Content-Type': 'application/json'
			}
		})
			.then(data => data.json())
			.then(response => {
				for (var i = 0; i < response.results.length; i++ ) {
					movies.push(response.results[i])
				}
				dispatch(receiveMovies(category, movies, response.page))
			})
			.catch((error) => {
				console.warn(error)
			})
	}
}

export function getMoviesNextPage(category, movies, page) {
	return dispatch => {
		dispatch(fetchingNextPageMovies())
		return dispatch(fetchMovies(category, movies, page))
	}
}

export function fetchMoviesIfNeeded(category) {
	return dispatch => {
		dispatch(requestMovies())
		return dispatch(fetchMovies(category))
	}
}