import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions/actions'
import Movies from '../components/Movies'

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const MoviesContainer = connect(mapStateToProps)(Movies)

export default MoviesContainer