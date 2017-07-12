import React from 'react'
const BASEURL = "http://localhost:3000/api/v1/comments/"

export default class CommentDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      commentText: "",
      commentUser: []
    }
  }

  fetchURL() {
    const URL = BASEURL + this.props.match.params.commentId

    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      commentText: data.text,
      commentUser: data.user
    }))
  }

  componentWillMount(){
    this.fetchURL()
  }


  render() {
    return(

      <div>
        <h1>{this.state.commentText}</h1>
        <p>By: {this.state.commentUser.name}</p>
      </div>
    )
  }
}
