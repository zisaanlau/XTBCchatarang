import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Select from 'react-select'
import Image from '../src/city3.jpg'
import 'react-select/dist/react-select.css'

class DirectMessageForm extends Component {
  state = {
    room: {
        name: '',
        description: 'Direct message',
        public: false,
        members: [],
        dm: true,
    },
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
    this.props.history.push(`/rooms/${this.state.room.name}`)
  }

  handleChange = (ev) => {
    const room = {...this.state.room}
    const target = ev.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    room[target.name] = value
    this.setState({ room })
  }

  handleSelectChange = (selectedValue) => {
    const room = {...this.state.room}
    room.members = selectedValue
    this.setState({ room })

    console.log(selectedValue)
  }

  users = () => {
    const { users } = this.props
    delete users[this.props.user.uid]

    return Object.keys(users).map(
      uid => {
        const user = this.props.users[uid]
        return {
          value: uid,
          label: `${user.displayName} (${user.email})`,
        }
      }
    )
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}>
            Direct Message
          </h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <div>
              <label
                htmlFor="users"
                className={css(styles.label)}
              >
                Start a conversation
              </label>
              <Select
                name="members"
                multi
                value={this.state.room.members}
                options={this.users()}
                onChange={this.handleSelectChange}
                className={css(styles.input)}
                placeholder="Invite other people..."
              />
            </div>

            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.history.goBack}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css(styles.button)}
              >
                Go
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  roomForm: {
    backgroundImage: `url(${Image})`,
    backgroundSize:'cover',
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },

  title: {
    color: 'white',
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },

  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    padding: '2rem',
  },

  label: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  textInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    color:'white',
    width: '20rem',
  },

  h2: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    fontWeight: 'normal',
  },

  buttonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
  },

  cancel: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    color: 'white',
  },
})

export default DirectMessageForm
