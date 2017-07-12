
import React from 'react'
import CommentDetails from './CommentDetails'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class CommentContainer extends React.Component {
  constructor() {
    super()

}



  render() {
    return(
  <div>
  <Header as='h3' dividing>Comments</Header>
        {this.props.comments.map(comment =>
      <Comment.Group>


        <Comment>
          <Comment.Avatar src='http://www.aguynamedguy.co.uk/wp-content/uploads/2015/11/stupid-grin-sm.jpg' />
          <Comment.Content>
          <Comment.Author as='a'>{comment.user_id}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.created_at}</div>
          </Comment.Metadata>
          <Comment.Text> <Link to={`/comments/${comment.id}`}>
             {comment.text}
           </Link></Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )}
  </div>
  )
  }
}
