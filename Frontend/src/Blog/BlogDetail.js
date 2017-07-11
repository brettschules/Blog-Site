import React from 'react'
const BASEURL = "http://localhost:3000/api/v1/blogs/"
export default class BlogDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogDetails: []
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
      blogDetails: data
    }))
  }

  render() {
    return (
      <div>
      <h1>  a blog </h1>
      </div>
    )
  }

}
