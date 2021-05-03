import React, {Component} from 'react'
import './FullPage.css'


export default class FullPage extends Component {
  constructor(){
    super();
    this.state={}
  }

  render(){
    return (
      <div>
        <div className="page-top"> 
          <h3>Welcome to Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button>TELL ME MORE</button>
        </div>
        <div className="services"></div>
        <div className="portfolio"></div>
        <div className="about"></div>
        <div className="team"></div>
        <div className="contact"></div>
      </div>
    )
  }
}