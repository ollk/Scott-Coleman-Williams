import React, { Component } from 'react';
import me from '../../images/me.jpg';
import './Greeting.css';

class Greeting extends Component {
  
  render() {
    return (
      <section className='section greeting' id='greeting'>
        <div className='portrait-div'>
          <img src={me} alt='me'/>
        </div>
        <h1 id='intro'>
          <span id='hi'>Hi,</span>
          <br />
          <span id='name'>I’m Scott Coleman Williams <br/> and I’m a full-stack <br/> web developer</span>
        </h1>
      </section>
    );
  }
}

export default Greeting