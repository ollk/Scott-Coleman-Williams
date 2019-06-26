import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  
  render() {
    return (
      <header className='main-header'>
        <h1>SCW</h1>
        <nav className='header-nav'>
          <span>about me</span>
          <span>projects</span>
          <span>contact</span>
        </nav>
      </header>
    );
  }
}

export default Header