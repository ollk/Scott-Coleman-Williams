import React, { Component } from 'react'
import './Project.css'

class Project extends Component {
  
  render() {
    return (
      <div className='project-div'>
        <h3 className='project-title'>{this.props.title}</h3>
        <img className='project-image' src={this.props.image} alt={this.props.title} />
        {this.props.imageTwo && 
          <img className='project-image' src={this.props.imageTwo} alt={this.props.title} />
        }
        <p className='project-description'>{this.props.desc}</p>
        <a href={this.props.live}>Live</a>
        <a href={this.props.repo}>Repo</a>
        {this.props.tech}
      </div>
    );
  }
}

export default Project