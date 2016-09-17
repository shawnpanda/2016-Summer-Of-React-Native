import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

class MovieDetails extends Component {
	constructor(props) {
		super(props)
		this.renderImageURL = this.renderImageURL.bind(this)
	}

	renderImageURL(url) {
		return 'https://image.tmdb.org/t/p/w185/' + url		
	} 

	componentDidMount() {
    this.props.selectMovie(this.props.movie.id)
	}

	render() {
		return (
			<View style={styles.details}>
				<ScrollView style={styles.scrollView}>
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
					<Text>Its trailer URL is {this.props.movie.trailerURL}</Text>
					<Text>{this.props.movie.overview}</Text>
				</View>
				</ScrollView>
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
	scrollView: {
    height: 500,
  },
	image: {
		flex: 5,
		width: 10,
		height: 250,
		paddingTop:20
	},
	title: {
		fontSize: 20,
		fontWeight: "500"
	},
	textContainer: {
		flex: 4,
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
	movie: PropTypes.object.isRequired,
	selectMovie: PropTypes.func.isRequired
}

export default MovieDetails