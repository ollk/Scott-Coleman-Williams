import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  
  render() {
    return (
      <section className='section contact' id='contact'>
        <div className='contact-header  section-header'>
          <h2>Contact me</h2>
          <p>I'd love to hear from you</p>
        </div>
        <div className='line' />
        <div className='contact-content'>
          <a href='https://www.linkedin.com/in/scott-williams-8334b2189/' target="_blank" rel="noopener noreferrer">Linkedin</a>
          <br/>
          <a href='https://github.com/ollk'>Github</a>
          <br/>
          <a href='mailto:scottcolemanwilliams@gmail.com' target="_blank" rel="noopener noreferrer">scottcolemanwilliams@gmail.com</a>
        </div>
      </section>
    );
  }
}

export default Contact
