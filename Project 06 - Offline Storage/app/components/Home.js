import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'


class Home extends Component {
  constructor(props) {
    super(props)

    this.renderNote = this.renderNote.bind(this)
  }

  renderNote(note) {
    return <View>
      <Text>{note.date}:{note.note}</Text>
    </View>

  }

  render() {
    var datetime = moment().format('L')
    var notes = this.props.notes
    return (
      <View style={styles.container}>
        <Text>abc</Text>
        <Text>{this.props.notes.length}</Text>
        {this.renderNote(notes[0])}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  }
})

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Home