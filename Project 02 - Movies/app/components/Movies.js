import React, { Component, PropTypes} from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import Movie from './Movie'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Movies extends Component {
	renderMovie(movie) {
		return (
			<Movie movie={movie}/>
		)
	}

	render() {
		if (this.props.isFetching) {
			return (<View style={styles.topContainer}><Text>Loading .... </Text></View>)
		}
		return (
			<ListView 
				contentContainerStyle={styles.list}
				dataSource={ds.cloneWithRows(this.props.movies)}
				renderRow={this.renderMovie.bind(this)}
			/>
		)
	}
}

var styles = StyleSheet.create({
	list: {
		justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
		paddingTop:60
	},
	topContainer: {
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