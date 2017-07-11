import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: true
    }
  }

  render() {
    return (
      <div>
      {this.state.login ? <LoginForm /> : ""}
        <h1>Login</h1>
        <h1>Sign Up</h1>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    )
  }

}


export default Navbar
