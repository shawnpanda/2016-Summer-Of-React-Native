import React, { Component, PropTypes } from 'react';
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
  propType: {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    submitName: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      value: {
        FirstName: '',
        LastName: ''
      }
    };
  },

  onChange(value) {
    this.setState({ value });
  },

  onPress() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.submitName(value.FirstName, value.LastName);
      this.setState({ value: null });
    }
  },

  render() {
    var value = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Jokes on {this.state.value.FirstName} {this.state.value.LastName}</Text>
        <Form
          ref="form"
          type={Person}
          value={this.state.value}
          onChange={this.onChange}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
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
  titleText: {
    color: '#000000',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center'
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
