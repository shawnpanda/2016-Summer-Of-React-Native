import React, { Component, PropTypes} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Movie extends Component {
	render() {
		const goViewDetails = () => { Actions.details({
						title: this.props.movie.title,
						movie: this.props.movie,
						hid: this.props.movie.id
						}) }
		return (
			<TouchableOpacity style={styles.movie} onPress={goViewDetails}>
				<Image 
						source={{ uri: 'http://image.tmdb.org/t/p/w185/' + this.props.movie.poster_path}} 
						style={styles.image}
					/>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	image: {
		height: 250,
		width:180,
		flex:1
	}
})

Movie.propTypes = {
	movie: PropTypes.object.isRequired
}

export default Movie