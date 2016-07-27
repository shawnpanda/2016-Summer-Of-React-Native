import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'


class Home extends Component {
  render() {
    var datetime = moment().format('L')
    return (
      <View style={styles.container}>
        <Text>{datetime}</Text>    
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  }
})

export default Home