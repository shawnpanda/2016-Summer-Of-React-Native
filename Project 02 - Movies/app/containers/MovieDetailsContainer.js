import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import MovieDetails from '../components/MovieDetails'
import { View, Text, TouchableOpacity } from 'react-native'
import { selectMovie } from '../actions/actions'

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.selectMovie(this.props.movie.id)
  }
}


MovieDetailsContainer = connect()(MovieDetails)


export default MovieDetailsContainer