import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  
  render() {
    return (
      <div className='project-div'>
        <div className='project-links'>
          <a href={this.props.live}>{this.props.title}</a>
          {` / `}
          <a href={this.props.repo}>Repo</a>
        </div>
        <img className='project-image' src={this.props.image} alt={this.props.title} />
        {this.props.imageTwo && 
          <img className='project-image' src={this.props.imageTwo} alt={this.props.title} />
        }
        {this.props.tech}
        <p className='project-description'>{this.props.desc}</p>
        
        
      </div>
    );
  }
}

export default Project