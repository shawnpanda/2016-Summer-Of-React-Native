import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import Note from './Note'
import moment from 'moment'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Home extends Component {
  constructor(props) {
    super(props)

    this.renderNote = this.renderNote.bind(this)
  }

  renderNote(note) {
    return <Note note={note}/>
  }

  render() {
    var datetime = moment().format('L')
    var notes = this.props.notes
    return (
        <ListView
          contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(this.props.notes)}
          renderRow={this.renderNote}
        />
    )
  }
}

var styles = StyleSheet.create({
  list: {
    paddingTop: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'

  }
})

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Home