import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import {Menu, Input, Form} from 'semantic-ui-react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: false,
      activeItem: '',
      username: '',
      password: ''
    }
  }


  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = e => this.setState({
    username: '', password: ''
  })

  render() {

    const { activeItem } = this.state
    const { username, password } = this.state

    if(!this.state.login) {
     return (
       <div>
         <Menu inverted color="blue" position='left' size="huge">
           <Menu.Item as={Link} to="/blogs" name="Blogs" active={activeItem === 'Blog'} onClick={this.handleItemClick} />
           <Menu.Item as={Link} to="/about" name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
           <Menu.Item as={Link} to="/contact" name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
           <Menu.Item as={Link} to="/newblog" name='Add Blog' active={activeItem === 'NewForm'} onClick={this.handleItemClick} />

           <Menu.Menu position="right">
             <Menu.Item >
               <Form onSubmit={this.handleSubmit}>
                 <Form.Group>
                  <Form.Input placeholder='Username' name='username'  onChange={this.handleChange} />
                  <Form.Input placeholder='Password' name='password' onChange={this.handleChange} />
                  <Form.Button content='Login' />
                 </Form.Group>
               </Form>
             </Menu.Item>
             <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
               SignUp
             </Menu.Item>
           </Menu.Menu>
         </Menu>
       </div>
     )

   } else {
     return (
       <Menu inverted color="blue" position='left' size="huge">
       <Menu.Item as={Link} to="/blogs" name="Blogs" active={activeItem === 'Blog'} onClick={this.handleItemClick} />
       <Menu.Item as={Link} to="/about" name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
       <Menu.Item as={Link} to="/contact" name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
       <Menu.Item as={Link} to="/newblog" name='Add Blog' active={activeItem === 'NewForm'} onClick={this.handleItemClick} />
        </Menu>
       )
   }
  }

}


export default Navbar
