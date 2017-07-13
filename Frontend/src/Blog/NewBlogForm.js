import React from 'react'
import BlogDetail from './BlogDetail'
import NewlyCreatedBlogs from './NewlyCreatedBlogs'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'


export default class NewBlogForm extends React.Component{
  constructor(){
    super()
    this.state = {
      title: "",
      imageUrl: "",
      content: "",
      blog_id: "",
      blogRedirect: false
    }
  }

  postBlog() {
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
    this.setState({
         blogRedirect: true
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
      if(!this.state.blogRedirect) {
    return(

      <div>
      <Form size="massive" onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Blog Title </label>
          <input name='title' placeholder='Username' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Blog Content </label>
          <input name='content' placeholder='What will you write about...' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>UserId </label>
          <input name='user_id' placeholder='UserId' onChange={this.handleChange} />
        </Form.Field>
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>

      </Form>

        </div>
      )
      } else if (this.state.blogRedirect) {
        debugger
        return(
        <NewlyCreatedBlogs blogtitle={this.state.title} imageUrl={this.state.imageUrl} content={this.state.content} />
      )
    }
  }
}


// a second and maybe better option:
  // have another component to render newly created blog posts.
  // once submitted, still send the data to be stored in the DB
  // then redirect to that component instead of the show component with the appropriate data
