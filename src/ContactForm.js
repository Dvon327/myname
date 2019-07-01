import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { addContact } from './db'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      message: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }
  handleSubmit(e){
    e.preventDefault()
    addContact(this.state)
    this.setState({
      name: null,
      email: null,
      message: null
    })
    this.props.history.push('/')
  }
  render(){
    return (
      <div className="container">
      <h1>Message Me</h1>
      <h2>Contact me by phone 415-525-9690</h2>
        <div className="card opacity">
          <div className="card-body">
            <form>
              <div class="form-group">
                <label for="nameInput">Name</label>
                <input name="name" type="text" class="form-control" id="nameInput" placeholder="John Dough" onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <label for="emailInput">Email address</label>
                <input name="email" type="email" class="form-control" id="emailInput" placeholder="name@example.com" onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <label for="messageInput">Message</label>
                <textarea name="message" class="form-control" id="messageInput" rows="3" onChange={this.handleChange}></textarea>
              </div>
              <button onClick={this.handleSubmit} type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
export default withRouter(ContactForm)
