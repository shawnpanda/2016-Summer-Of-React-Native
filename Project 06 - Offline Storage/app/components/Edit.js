import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import moment from 'moment'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { text: this.props.text}
  }

  render() {
    return <View style={styles.container}>
        <Text style={styles.date}>
          {this.props.date?this.props.date:moment().format('L')}
        </Text>
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
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Edit