import React, {Component} from 'react'
import FullPage from './FullPage'
import './Reset.css'
import './Header.css'


export default class Header extends Component {
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
        <FullPage/>
        <img src="https://cdn.discordapp.com/attachments/794686145707507722/835573003685199882/header-bg.jpg" alt="background-img" className="background-img"/>
        <div className="nav-bar">
          <div className="home-button">Start Bootstrap</div>
          <nav className="dynamic-nav">
            <a>SERVICES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
          </nav>
        </div>  
      </div>
    )
  }
}