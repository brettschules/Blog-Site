import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    this.setState({
      e.eventPreventDefault()
      username
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
      <Form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" value={this.state.username} onChange={handleChange} />
        </label>
        <label>password:
          <input type="text" value={this.state.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </Form>

    )
  }
}
