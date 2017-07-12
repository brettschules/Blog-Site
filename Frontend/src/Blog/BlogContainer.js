import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const URL = "http://localhost:3000/api/v1/blogs"
export default class BlogContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogs: []
    }

  }

  componentWillMount(){
    this.fetchURL()
  }

  fetchURL() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      blogs: data}))
  }




  render() {
    return (
      <div>
      {this.state.blogs.map(blog =>
        <Link to={`/blogs/${blog.id}`}>
        {blog.title}
        </Link>
      )}
      </div>
    )
  }

}
