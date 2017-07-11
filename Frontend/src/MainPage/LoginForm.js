import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      login: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      username: e.target.value,
      password: e.target.value
    })
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
      password: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>password:
          <input type="text" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
