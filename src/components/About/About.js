import React, { Component } from 'react'
import './About.css'

class About extends Component {
  
  render() {
    return (
      <section className='section about'>
        <h2 className='about-header'>About me</h2>
        <div className='line' />
        <p className='about-content'>
        A recent graduate from Thinkful’s Engineering Immersion fullstack bootcamp, I love to build I love to learn.
        <br /> <br /> 
        From legos as a kid, to working on my Jeep, to programming, I’ve been passionate about building and fixing things throughout my life.  I love web development because it provides endless opportunities to build and fix and build and fix again.  I love the finish-line: creating a product to be proud of, but even more I love the process of getting there: iterating, experimenting, improving.
        Learning is my other passion, and the rapidly changing world of web development does not disappoint.  The reality that there will always be new technologies to learn and utilize is exciting to me, and I strive to improve myself as an engineer every day.
        <br /> <br />
	      I’m a proud Ohioan who was born in L.A., loves living in Chicago and who also misses Boston.  When I’m not coding, I’m reading, watching spaceX videos on youTube, playing squash, listening to podcasts, or spending time with my fiancé, Veronika.  
        </p>
      </section>
    );
  }
}

export default About