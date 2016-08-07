import React, { Component, PropTypes } from 'react'
import FilterLink from '../containers/FilterLink'
import {View, StyleSheet} from 'react-native'

class FilterTab extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<View style={styles.filtersContainer}>
				<FilterLink filter="SHOW_ALL">Show All</FilterLink>
				<FilterLink filter="SHOW_COMPLETED">Show Completed</FilterLink>
				<FilterLink filter="SHOW_ACTIVE">Show Active</FilterLink>
			</View>
		)
		
	}
}

var styles = StyleSheet.create({
	filtersContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#F7F7F7',
		paddingTop: 70,
		paddingBottom:5,
		borderRightWidth:2
	}
})

export default FilterTab