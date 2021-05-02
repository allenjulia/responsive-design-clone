import React, {Component} from 'react'
import './Header.css'
import './Reset.css'


export default class Nav extends Component {
  constructor(){
    super();
    this.state={
      menuOpen: false,
    }
  }

  handleClick = () => {
    this.setState = ({menuOpen: !this.state.menuOpen})
  }
  render(){
    return (
      <div className="header">
        <img src="https://cdn.discordapp.com/attachments/794686145707507722/835573003685199882/header-bg.jpg" alt="background-img" className="background-img"/>
        <div className="home-button">Start Bootstrap</div>
        <nav className='dynamic-nav'>
          <a>SERVICES</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>TEAM</a>
          <a>CONTACT</a>
        </nav>

      </div>
    )
  }
}