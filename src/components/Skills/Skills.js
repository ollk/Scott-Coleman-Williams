import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {
  
  render() {
    return (
      <section className='section skills' id='skills'>
        <h2 className='skills-header'>Skills</h2>
        <div className='line' />
        <div className='skills-content'>
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <br/>
          <i className="devicon-express-original-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-postgresql-plain-wordmark"></i>
          <br/>
          <i className="devicon-jquery-plain-wordmark"></i>
          <i className="devicon-mocha-plain"></i>
          <i className="devicon-react-original-wordmark"></i>
        </div>
      </section>
    );
  }
}

export default Skills