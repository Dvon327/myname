import React, { Component } from 'react'
import SocialIcons from './SocialIcons'

export default class AboutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/images/devonte.jpg",
      title: "SOCialMedia",
      description: "I am an upcoming Software Developer focused on developing my own Music Software I also create my own music and I like really long walks listening to my own music"
    }
  }
  render(){
    let { image, title, description } = this.state
    return (
        <div className="card w-75 mb-4 mx-auto opacity">
          <img src={image} class="card-img-top" alt={title}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <SocialIcons/>
        </div>
      </div>
    )
  }
}
