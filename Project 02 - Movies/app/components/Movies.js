import React, { Component, PropTypes} from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import Movie from './Movie'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Movies extends Component {
	constructor(props) {
		super(props)

		this.renderMovie = this.renderMovie.bind(this)
		this.onEndReached = this.onEndReached.bind(this)
		this.renderFooter = this.renderFooter.bind(this)
	}
	renderMovie(movie) {
		return (
			<Movie movie={movie}/>
		)
	}

	onEndReached() {
		if ( !this.props.movies.length || this.props.isFetching || this.props.isLoadingMore) {
			return
		}
		this.props.getMoviesNextPage('popular', this.props.movies, this.props.page);
	}

	renderFooter() {
		if (this.props.isLoadingMore) {
			return (
				<Text style={{marginVertical: 20}}>Loading More...</Text>
			)
		} else {
			return (
				<Text style={{marginVertical: 20}}>Need to trigger the load more function</Text>
			)
		}
	}

	render() {
		if (this.props.isFetching) {
			return (<View style={styles.topContainer}><Text>Loading .... </Text></View>)
		}
		return (
			<ListView 
				contentContainerStyle={styles.list}
				dataSource={ds.cloneWithRows(this.props.movies)}
				renderRow={this.renderMovie}
				onEndReached={this.onEndReached}
				renderFooter={this.renderFooter}
				enableEmptySections={true}
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
	}).isRequired).isRequired,
	isFetching: PropTypes.bool.isRequired,
	isLoadingMore: PropTypes.bool.isRequired,
	getMoviesNextPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired
}

export default Movies