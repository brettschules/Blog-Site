import React, { Component } from 'react'
import Navbar from './MainPage/Navbar'
import LoginForm from './MainPage/LoginForm'
import BlogDetail from './Blog/BlogDetail'
import BlogContainer from './Blog/BlogContainer'
import CommentDetails from './Comment/CommentDetails'
import NewBlogForm from './Blog/NewBlogForm'
import Home from './MainPage/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <Router>
        <div>
          <Route exact path='/blogs'
            component={BlogContainer}/>

          <Route path='/signin'
            component={LoginForm} />

            <Route path='/blogs/:blogId'
            component={BlogDetail} />

            <Route path='/comments/:commentId'
              component={CommentDetails} />

            <Route path='/newblog'
              component={NewBlogForm} />
          </div>
      </Router>

      </div>


    )
  }
}

export default App;
