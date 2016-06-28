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
          }} style={styles.text}>{this.renderJoke()}</Text>
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