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
				<View style={styles.topContainer}>
					<Image 
						source={{ uri: this.renderImageURL(this.props.movie.poster_path)}} 
						style={styles.image}
					/>
					<View style={styles.textContainer}>
						<Text style={styles.title}>{this.props.movie.title}</Text>
						<Text>{this.props.movie.release_date}</Text>
						<Text>{this.props.movie.vote_average}/10</Text>
					</View>
				</View>
				<View style={styles.overview}>
					<Text>Trail URL is {this.props.movie.trailerURL}</Text>
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
	topContainer: {
		flexDirection: 'row',
		flex: 2
	},
	image: {
		flex: 1,
		width: 185,
		height: 250
	},
	title: {
		fontSize: 20,
		fontWeight: "500"
	},
	textContainer: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center'
	},
	overview: {
		flexDirection: 'column',
		paddingTop: 15,
		paddingLeft: 20,
		paddingRight: 20
	}
})

MovieDetails.propTypes = {
	movie: PropTypes.object.isRequired
}

export default MovieDetails