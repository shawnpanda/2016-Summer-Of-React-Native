import { normalize, Schema, arrayOf } from 'normalizr';

export function normalized(response) {
	const movie = new Schema('movies')
	response = normalize(response, {
		movies: arrayOf(movie)
	})
	console.log(response)
	return response
}