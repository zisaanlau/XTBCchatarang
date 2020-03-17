import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Image from '../src/city.jpg'
import { twitterProvider } from './base'
import { auth, googleProvider } from './base'

class SignIn extends Component {
  state = {
    email: '',
  }

  handleChange = (ev) => {
    this.setState({ email: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    // do something?
  }

  authenticate = () => {
    auth.signInWithPopup(googleProvider)
  }
  authenticate2 = () => {
    auth.signInWithPopup(twitterProvider)
  }

  render() {
    return (
      <div className={`SignIn ${css(styles.signIn)}`}>
        <header className={css(styles.header)}>
          <span className={css(styles.title)}>
            <i className="fas fa-hashtag"></i>
            Chatarang
          </span>
        </header>
        <main className={css(styles.main)}>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <h1 className={css(styles.h2)}>Welcome!</h1>
            {/* <label htmlFor="email" className={css(styles.label)}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className={css(styles.input)}
              onChange={this.handleChange}
              autoFocus
            />
            <button type="submit" className={css(styles.button)}>
              Sign In
            </button>

            <div>or</div> */}

            <button
              type="button"
              className={css(styles.button)}
              onClick={this.authenticate}
            >
              <i className={`fab fa-google ${css(styles.brandIcon)}`}></i>
              Sign in with Google
            </button>


            <br>
            </br>
            <button
              type="button"
              className={css(styles.button)}
              onClick={this.authenticate2}
            >
              <i className={`fab fa-twitter ${css(styles.brandIcon2)}`}></i>
              Sign in with Twitter
            </button>
          </form>

          <div className="blurb">
            <h2 className={css(styles.h2)}>You're in good company.</h2>
            <p className={css(styles.h2)}>Ones of people are already using Chatarang!</p>
          </div>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundImage: `url(${Image})`,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'white',
    backgroundSize:'cover',
  },

  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: '4rem',
    padding: '0 2rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
  },

  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    color: 'white',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '80px',
    fontSize: '2rem',
  },

  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
  },

  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '40rem',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    paddingBottom: '2rem',
  },

  label: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid white',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  h2: {
    color: "white",
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    fontWeight: 'normal',
  },

  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    display: 'block',
    margin: '0 auto',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    color: 'white',
    width: '20rem',
    cursor: 'pointer',
  },

  brandIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    marginRight: '1rem',
  }
})

export default SignIn
