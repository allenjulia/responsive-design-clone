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
        <div className="services"></div>
        <div className="portfolio"></div>
        <div className="about"></div>
        <div className="team"></div>
        <div className="contact"></div>
      </div>
    )
  }
}