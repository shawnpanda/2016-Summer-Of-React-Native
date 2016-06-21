import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MovieDetails extends Component {
	render() {
		return (
			<View style={styles.details}>
				<Text>{this.props.overview}</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	details: {
		paddingTop:65
	}
})

MovieDetails.propTypes = {
	overview: PropTypes.string.isRequired
}

export default MovieDetails