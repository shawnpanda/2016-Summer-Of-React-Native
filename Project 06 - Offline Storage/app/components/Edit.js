import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import moment from 'moment'
import { Actions } from 'react-native-router-flux'


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { text: this.props.text}

    this.createNote = this.createNote.bind(this)
    this.changeNote = this.changeNote.bind(this)
  }

  createNote() {
    this.props.addNote(this.state.text, moment().format('L'))
    Actions.pop()
  }

  changeNote() {
    this.props.editNote(this.props.id, this.state.text)
    Actions.pop()
  }

  componentDidMount() {
    setTimeout(() => {this.refs.hiddenText.measure((fx, fy, width, height, px, py) => {
      console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
      this.setState({height: height + 20})
      })
    })
  }

  componentWillMount() {
    if (!this.props.text) {
      Actions.refresh({onRight: this.createNote,
                      rightTitle: 'Add'})
    } else {
      Actions.refresh({onRight: this.changeNote,
                      rightTitle: 'Finish'})
    }
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
         style={[styles.input, {height: Math.max(35, this.state.height)}]}
          value={this.state.text}
        />
          <Text ref='hiddenText' style={styles.hidden}>{this.state.text}</Text>
      </View>
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 60
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  hiddenContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  hidden: {
    margin: 5,
    lineHeight: 18,
    position: 'absolute',
    top: 10000,
    left: 10000
  }
})

Edit.PropTypes = {
  addNote: PropTypes.func.isRequired, 
  editNote: PropTypes.func.isRequired
}

export default Edit