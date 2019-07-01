import React, { Component } from 'react'

export default class SocialIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: "LinkedIn",
          className: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/gene-boyd-856930166/"
        },
        {
          name: "Twitter",
          className: "fab fa-twitter-square",
          url: ""
        },
        {
          name: "Instagram",
          className: "fab fa-instagram",
          url: ""
        },
        {
          name: "Github",
          className: "fab fa-github-square",
          url: "https://github.com/Dvon327"
        },
        {
          name: "Youtube",
          className: "fas fa-play",
          url: "https://youtu.be/IRJTQ7FHx0o"
        }

      ]
    }
  }
  render(){
    let { links } = this.state
    return (
      <div className="card">
        <ul className="card-body list-group list-group-horizontal mx-auto">
          {links.map(link => (
            <li key={link.name + link.className} className="list-group-item">
              <a href={link.url}><i className={link.className + " fa-2x"}></i></a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
