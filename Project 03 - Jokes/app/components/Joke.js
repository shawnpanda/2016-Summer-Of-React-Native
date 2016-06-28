import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PanResponder
} from 'react-native';
import { jokes } from '../api/index'

var Joke = React.createClass({
  propType: {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
  },
  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _jokeStyles: {},
  joke: (null : ?{ setNativeProps(props: Object): void }),

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._jokeStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
  },

  componentDidMount: function() {
    this._updateNativeStyles();
  },

   _highlight: function() {
    this._jokeStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  },

  _unHighlight: function() {
    this._jokeStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  },

  _updateNativeStyles: function() {
    this.joke && this.joke.setNativeProps(this._jokeStyles);
  },

  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the joke?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the joke?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    this._highlight();
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    this._jokeStyles.style.left = this._previousLeft + gestureState.dx;
    this._jokeStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  },

  parseJoke(num) {
    var str = jokes[num].joke
    var str1 = str.replace(/Chuck/g, this.props.FirstName)
    return str1.replace(/Norris/g, this.props.LastName)
  },

  renderJoke() {
    var randomNum = Math.floor(Math.random() * 544);
    return this.parseJoke(randomNum)
  },

  render() {
    return (
      <View style={styles.container}>
        <Text ref={(joke) => {
            this.joke = joke;
          }} style={styles.text}{...this._panResponder.panHandlers}>{this.renderJoke()}</Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20
  },
  text: {
    position: 'absolute',
    left: 0,
    top: 0,
  }
});

export default Joke