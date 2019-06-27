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
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          {/* <br/> */}
          <i className="devicon-express-original-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-postgresql-plain-wordmark"></i>
          {/* <br/> */}
          <i className="devicon-jquery-plain-wordmark"></i>
          <i className="devicon-mocha-plain"></i>
          <i className="devicon-react-original-wordmark"></i>
        </div>
      </section>
    );
  }
}

export default Skills