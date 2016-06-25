import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import MovieDetails from '../components/MovieDetails'
import { View, Text, TouchableOpacity } from 'react-native'
import { selectMovie } from '../actions/actions'

const mapStateToProps = ( state, ownProps) => {
  const { movies } = state.movieData
  return {
    title: ownProps.title,
    realMovie: ownProps.movie
  }
}

const MovieDetailsContainer = connect(mapStateToProps, {
  selectMovie
})(MovieDetails)



export default MovieDetailsContainer