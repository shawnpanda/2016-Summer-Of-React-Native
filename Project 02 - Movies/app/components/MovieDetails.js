import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class MovieDetails extends Component {
	constructor(props) {
		super(props)
		this.renderImageURL = this.renderImageURL.bind(this)
	}

	renderImageURL(url) {
		return 'http://image.tmdb.org/t/p/w185/' + url		
	} 

	render() {
		return (
			<View style={styles.details}>
				<View style={styles.top}>
					<Image 
						source={{ uri: this.renderImageURL(this.props.movie.poster_path)}} 
						style={{width: 185, height: 250}}
					/>
					<Text>{this.props.movie.title}</Text>
				</View>
			<View style={styles.overview}>
				<Text>{this.props.movie.overview}</Text>
			</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	details: {
		paddingTop:65,
	},
	top: {
		flexDirection: 'row'
	},
	overview: {
		flexDirection: 'column'
	}
})

MovieDetails.propTypes = {
	movie: PropTypes.object.isRequired
}

export default MovieDetails