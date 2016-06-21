import React, { Component, PropTypes} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Movie extends Component {

	render() {
		const goViewDetails = () => { Actions.details({overview:this.props.overview}) }
		return (
			<TouchableOpacity style={styles.movie} onPress={goViewDetails}>
				<Text>Movie {this.props.id}: {this.props.title}</Text>
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
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
}

export default Movie