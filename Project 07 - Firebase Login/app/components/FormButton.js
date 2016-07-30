'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'apsl-react-native-button'

var styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor:  '#FF3366'
  }
})

var FormButton = React.createClass({
  render() {
    return (
      <View style={styles.signin}>
        <Button style={styles.button}
                textStyle={{fontSize: 18}}
                isDisabled={this.props.isDisabled}
                onPress={this.props.onPress} >
        {this.props.buttonText}
        </Button>
      </View>
    )
  }
})

export default FormButton