import React from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'


export default class NewBlogForm extends React.Component{
  constructor(){
    super()
    this.state = {
      title: "",
      imageUrl: "",
      content: ""
    }
  }

  postBlog() {
    console.log(this.state)
    const data = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/v1/blogs', data)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.postBlog()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Form size="massive" onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Blog Title </label>
          <input name='blogTitle' placeholder='Username' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Blog Content </label>
          <input name='blogContent' placeholder='What will you write about...' onChange={this.handleChange} />
        </Form.Field>
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>

      </Form>
    )
  }
}
