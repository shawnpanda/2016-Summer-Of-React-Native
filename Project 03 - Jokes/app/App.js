/**
 * Jokes App
 * https://github.com/shawniscool/2016-Summer-Of-React-Native/tree/master/Project%2003%20-%20Jokes
 */

'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SignIn from './components/form'

var JokesApp = React.createClass({
  getInitialState: function() {
    return {FirstName:'', LastName:''};
  },

  render() {
    return (
      <View>
      <SignIn 
        FirstName={this.state.FirstName}
        LastName={this.state.LastName}
      />
      <Text>parent's state.FirstName is {this.state.FirstName}</Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
});

export default JokesApp
