import React, { Component } from 'react'
import Navbar from './MainPage/Navbar'
import LoginForm from './MainPage/LoginForm'
import BlogDetail from './Blog/BlogDetail'
import BlogContainer from './Blog/BlogContainer'
import CommentDetails from './Comment/CommentDetails'
import NewBlogForm from './Blog/NewBlogForm'
import Home from './MainPage/Home'
import About from './StaticPages/About'
import Contact from './StaticPages/Contact'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
      <Navbar />
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

            <Route path='/about'
              component={About} />

            <Route path='/contact'
              component={Contact} />

          </div>

          </div>
          </Router>


      </div>


    )
  }
}

export default App;
