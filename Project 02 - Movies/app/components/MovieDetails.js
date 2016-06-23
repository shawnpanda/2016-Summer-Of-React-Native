import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class MovieDetails extends Component {
	render() {
		return (
			<View style={styles.details}>
				<Image 
					source={{uri: 'http://image.tmdb.org/t/p/w185/' + this.props.imageUrl}} 
					style={{width: 185, height: 250}}
				/>
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