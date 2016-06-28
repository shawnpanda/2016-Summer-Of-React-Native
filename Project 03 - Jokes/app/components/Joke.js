import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Joke = React.createClass({
  propType: {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.FirstName} : {this.props.LastName}</Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  }
});

export default Joke