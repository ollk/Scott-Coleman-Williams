import React, { Component } from 'react'
import me from '../../images/me.jpg'
import './Greeting.css'

class Greeting extends Component {
  
  render() {
    return (
      <section className='section greeting' id='greeting'>
        <h1 id='intro'>
          <span id='hi'>Hi,</span>
          <br />
          <span id='name'>I’m Scott Coleman Williams and I’m a fullstack web developer</span>
        </h1>
        <div className='line' />
        <div className='portrait-div'>
          <img src={me} alt='me'/>
        </div>
      </section>
    );
  }
}

export default Greeting