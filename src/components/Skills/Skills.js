import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {
  
  render() {
    return (
      <section className='section skills' id='skills'>
        <div className='skills-header section-header'>
          <h2>Skills</h2>
          <p>Some of the tools in my belt</p>
        </div>
        <div className='line' />
        <div className='skills-content'>
          <i className="devicon-html5-plain-wordmark first-row first-column"></i>
          <i className="devicon-javascript-plain first-row second-column"></i>
          <i className="devicon-css3-plain-wordmark first-row third-column"></i>
          <i className="devicon-express-original-wordmark second-row  first-column"></i>
          <i className="devicon-nodejs-plain-wordmark second-row second-column"></i>
          <i className="devicon-postgresql-plain-wordmark second-row third-column"></i>
          <i className="devicon-jquery-plain-wordmark third-row first-column"></i>
          <i className="devicon-mocha-plain third-row second-column"></i>
          <i className="devicon-react-original-wordmark third-row third-column"></i>
        </div>
      </section>
    );
  }
}

export default Skills