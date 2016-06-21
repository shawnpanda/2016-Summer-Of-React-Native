import React, { Component, PropTypes} from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import Movie from './Movie'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Movies extends Component {
	renderMovie(movie) {
		return (
			<Movie id={movie.id} title={movie.title} overview={movie.overview}/>
		)
	}

	render() {
		return (
			<ListView 
				style={styles.list}
				dataSource={ds.cloneWithRows(this.props.movies)}
				renderRow={this.renderMovie.bind(this)}
			/>
		)
	}
}

var styles = StyleSheet.create({
	list: {
		paddingTop:60
	}
})

Movies.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default Movies