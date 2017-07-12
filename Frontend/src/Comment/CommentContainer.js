import React from 'react'
import CommentDetails from './CommentDetails'

import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class CommentContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  fetchURL() {
    const URL = this.props.commentsURL

    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      comments: data.comments
    }))
  }

  componentWillMount() {
    this.fetchURL()
  }

  render() {
    console.log(this.state.comments)
    if(this.state.comments.length === 0) {
        return(
          <div>
            <h1>Comments are Loading</h1>
          </div>
        )
    } else {
      return(
        <div>
          {this.state.comments.map(comment =>
            <Link to={`/comments/${comment.id}`}>
              {comment.text}
            </Link>

          )}
        </div>
      )
    }

  }
}
