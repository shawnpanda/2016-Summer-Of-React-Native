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


  render() {
    return (
      <View>
      <SignIn />
      </View>
    );
  }
})

const styles = StyleSheet.create({
});

export default JokesApp
