import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PanResponder
} from 'react-native';
import { jokes } from '../api/index'
import Dimensions from 'Dimensions'

var windowSize = Dimensions.get('window')

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
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: this._onStartShouldSetResponder,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: this.setPosition,
      onPanResponderRelease: this.resetPosition,
    })
  },

  setPosition: function(nativeEvent, gestureState) {
    //Update our state with the deltaX/deltaY of the movement
    this.setState({
      x: gestureState.dx,
      y: gestureState.dy
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
  getRotationDegree: function(rotateTop, x) {
    var rotation = ( (x/windowSize.width) * 100)/3;
    var rotate = rotateTop ? 1 : -1
    var rotateString = (rotation * rotate) + 'deg'
    return rotateString;
  },

  _onStartShouldSetResponder: function(nativeEvent, gestureState) {
    this.dragging = true;
    //Setup initial drag coordinates
    this.rotateTop = nativeEvent.locationY <= 300
    console.log("_onStartShouldSetResponder is called")
    return true;
  },

  getJokeStyle: function() {
    var transform = [{translateX: this.state.x}, {translateY: this.state.y}];
    if (this.dragging) {
      transform.push({rotate: this.getRotationDegree(this.rotateTop, this.state.x)})
    }
    console.log('this.rotateTop is ' + this.rotateTop + ' and dragging is ' + this.dragging)

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