import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
  FirstName: t.String,
  LastName: t.String
})


var SignIn = React.createClass({

  getInitialState: function() {
    return {FirstName:'', LastName:''};
  },

  onPress() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      this.setState({
        FirstName: value.FirstName,
        LastName: value.LastName,
      })
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      <Text>this.state.FirstName is {this.state.FirstName}</Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default SignIn
