import { combineReducers } from 'redux'
import { RECEIVE_MOVIES } from '../actions/actions'

const initialState =[
		{id: 1, title: 'move titile', 
		overview: 'Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok.', 
		vote_average: 7},
		{id: 2, title: 'move titile2', 
		overview: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy),", 
		vote_average: 7},
		{id: 3, title: 'move titile3', 
		overview: "X-Men: Apocalypse is a 2016 American superhero film based on the fictional X-Men characters that appear in Marvel Comics. It is the ninth installment in the X-Men film series and a sequel to 2014's X-Men: Days of Future Past.", 
		vote_average: 7}
]
	
function movies(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_MOVIES:
			return Object.assign({}, state, 
				action.movies
			)
		default:
			return state
	}
}

function page(state = 1, action) {
	switch (action.type) {
		default:
			return state
	}
}

const movieApp = combineReducers({movies, page})

export default movieApp