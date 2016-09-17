import React, { Component, PropTypes} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Movie extends Component {
	render() {
		const goViewDetails = () => { Actions.details({
						title: this.props.movie.title,
						movieId: this.props.movie.id
						}) }
		return (
			<TouchableOpacity style={styles.movie} onPress={goViewDetails}>
				<Image 
						style={styles.image}
						source={{ uri: 'https://image.tmdb.org/t/p/w185' + this.props.movie.poster_path}} 
					/>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	image: {
		width:187,
		height: 250
	}
})

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie