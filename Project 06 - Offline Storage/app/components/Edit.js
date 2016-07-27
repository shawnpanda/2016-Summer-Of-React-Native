import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { text: this.props.text}
  }

  render() {
    return <View style={styles.container}>
        <Text style={styles.date}>{this.props.date}</Text>
        <TextInput
          {...this.props}
          multiline = {true}
          onChange={(event) => {
           this.setState({
             text: event.nativeEvent.text,
             height: event.nativeEvent.contentSize.height,
           });
         }}
         style={[styles.default, {height: Math.max(35, this.state.height)}]}
          value={this.state.text}
        />
      </View>
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  },
  note: {
    width: 140,
    height: 150,
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    margin:3,
    padding:5
  },
  date: {
    textAlign: 'center'
  }
})

export default Edit