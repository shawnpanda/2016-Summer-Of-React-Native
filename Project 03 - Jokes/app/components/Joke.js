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
  getInitialState: function() {
    return {
      x: 0,
      y: 0
    }
  },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._onStartShouldSetResponder,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: this.setPosition,
      onPanResponderRelease: this.resetPosition,
    })
  },

  setPosition: function(nativeEvent, gestureState) {
    //Update our state with the deltaX/deltaY of the movement
    this.setState({
      x: this.state.x + gestureState.dx,
      y: this.state.y + gestureState.dy
    });
    //Set our drag to be the new position so our delta can be calculated next time correctly
    console.log('this.state.x is' + this.state.x)
  },
  resetPosition: function(nativeEvent, gestureState) {
    this.dragging = false;
    //Reset on release
    this.setState({
      x: 0,
      y: 0,
    })
  },
  _onStartShouldSetResponder: function(nativeEvent, gestureState) {
    this.dragging = true;
    //Setup initial drag coordinates
    console.log('in onStart, this.state.x is' + this.state.x)
    return true;
  },
  _onMoveShouldSetResponder: function(nativeEvent, gestureState) {
    return true;
  },
  getJokeStyle: function() {
    var transform = [{translateX: this.state.x}, {translateY: this.state.y}];
    return {transform: transform};
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
      <View 
        {...this._panResponder.panHandlers}
        style={[styles.container, this.getJokeStyle()]}>
        <Text
          style={ styles.text }>JOKE HEREE HEREAREWAREAWREARSADF</Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Joke