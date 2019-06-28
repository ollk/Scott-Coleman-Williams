import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  
  render() {
    return (
      <header className='main-header'>
        <h1><a href='#greeting'>SCW</a></h1>
        <nav className='header-nav'>
          <span><a href='#about'>about me</a></span>
          <span><a href='#skills'>skills</a></span>
          <span><a href='#portfolio'>portfolio</a></span>
          <span><a href='#contact'>contact</a></span>
        </nav>
      </header>
    );
  }
}

export default Header