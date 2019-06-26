import React, { Component } from 'react'
import './Divider.css'

class Divider extends Component {
  
  render() {
    return (
      <div className={`divider ${this.props.class}`}>
        <div className = 'divider-line' />
      </div>
    );
  }
}

export default Divider