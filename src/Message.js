import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import axios from 'axios'
import Avatar from './Avatar'
import Metadata from './Metadata'
import Reaction from './Reaction'

class Message extends Component {
  state = {
    showPicker: false,
    selectedFile: null,
  }
  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    axios.post('my-domain.com/file-upload', this.state.selectedFile)
  }

  togglePicker = () => {
    this.setState({ showPicker: !this.state.showPicker })
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    // '/files' is your node.js route that triggers our middleware
    axios.post('/files', data).then((response) => {
      console.log(response); // do something with the response
    })
  }

  handleEmojiSelect = (emoji) => {
    this.props.addReaction({ ...this.props.message }, emoji.colons)
    this.togglePicker()
  }

  // handleFileSelect = (evt) => {
  //   var files = evt.target.files; // FileList object

  //   // files is a FileList of File objects. List some properties.
  //   var output = [];
  //   for (var i = 0, f; f = files[i]; i++) {
  //     output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
  //       f.size, ' bytes, last modified: ',
  //       f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
  //       '</li>');
  //   }
  //   document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  // }



  // uploadHandler = () => { ... }
  //document.getElementById('files').addEventListener('change', handleFileSelect, false);


  render() {
    const { message } = this.props
    const reactions = message.reactions || {}

    return (
      <div className={`Message ${css(styles.message)}`}>
        <Avatar user={message.user} />
        <div className={css(styles.details)}>
          <Metadata message={message} />
          <div className="body">
            {message.body}
          </div>
          <div className={css(styles.reactionList)}>
            {
              Object.keys(reactions).map(
                emoji => (
                  <Reaction
                    key={emoji}
                    message={message}
                    emoji={emoji}
                    addReaction={this.props.addReaction}
                  />
                )
              )
            }
          </div>
          <button
            className={`reactionButton ${css(styles.reactionButton)}`}
            onClick={this.togglePicker}
          >
            <i className="far fa-smile"></i>
          </button>


          {/* <input type="file" onChange={this.handleUploadFile} /> */}
          <button
            onClick={this.handleUploadFile}
            className={`uploadButton ${css(styles.upload)}`}
          >
            <i class="fa fa-upload" aria-hidden="true"></i>
          </button>


        </div>
        {
          this.state.showPicker &&
          <Picker
            showPreview={false}
            style={pickerStyles}
            onSelect={this.handleEmojiSelect}
          />
        }
      </div >
    )
  }
}

const styles = StyleSheet.create({
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
    position: 'relative',
    zIndex: 1,

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  reactionButton: {
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    padding: 0,
    color: 'grey',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',

    ':hover': {
      color: '#3366ff',
    },
  },

  reactionList: {
    display: 'flex',
    marginTop: '0.5rem',
  },

  upload: {
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    padding: 0,
    color: 'grey',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    padding: 0,
    top: '0.5rem',
    right: '2rem',
  },

})

const pickerStyles = {
  position: 'absolute',
  top: '-20rem',
  right: '2rem',
}

export default Message
