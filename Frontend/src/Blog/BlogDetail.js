import React from 'react'
import CommentContainer from '../Comment/CommentContainer'
const BASEURL = "http://localhost:3000/api/v1/blogs/"
export default class BlogDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogDetails: [],
      userDetails: [],
      blogComments: []
    }
  }

  componentWillMount() {
    this.fetchURL()
  }

  fetchURL() {

    const URL = BASEURL + this.props.match.params.blogId
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      blogDetails: data,
      userDetails: data.user,
      blogComments: data.comments
    }))
  }

  render() {
    console.log(this.state.blogComments)
    return (
      <div>
        <div>
          <h1>{this.state.blogDetails.title}</h1>
          <p>By: {this.state.userDetails.name}</p>
        </div>
        <div>
          <h1>{this.state.blogDetails.content}</h1>
        </div>
        <div>
          <CommentContainer comments={this.state.blogComments} />
        </div>
      </div>
    )
  }

}
