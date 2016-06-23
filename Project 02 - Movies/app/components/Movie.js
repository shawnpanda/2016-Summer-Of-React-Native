import React, { Component, PropTypes} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Movie extends Component {

	render() {
		const goViewDetails = () => { Actions.details({
						title: this.props.movie.title,
						movie: this.props.movie
						}) }
		return (
			<TouchableOpacity style={styles.movie} onPress={goViewDetails}>
				<Text>Movie {this.props.movie.id}: {this.props.movie.title}</Text>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	movie: {
		paddingTop: 5,
		height: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#000'
	}
})

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie