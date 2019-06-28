import React, { Component } from 'react';
import './About.css';

class About extends Component {
  
  render() {
    return (
      <section className='section about' id='about'>
        <div className='about-header section-header'>
          <h2>{`About me`}</h2>
          <p>{`Who I am and what motivates me`}</p>
        </div>
        <div className='line' />
        <p className='about-content'>
        I'm a recent graduate from Thinkful’s Engineering Immersion fullstack bootcamp.  I'm a self-motivated builder and a fast learner who thrives in a team setting.
        <br /> <br /> 
        From legos as a kid, to working on my Jeep, to programming, I’ve been passionate about building and fixing things throughout my life.  I love web development because it provides endless opportunities to build and fix.  I love the finish-line: creating a product to be proud of, but even more I love the process of getting there: planning, iterating, problem-solving, improving.
        <br /> <br />
        Learning is my other passion, and the rapidly changing world of web development does not disappoint.  The reality that there will always be new technologies to learn and utilize is exciting to me, and I strive to improve myself as an engineer every day.
        <br /> <br />
	      I’m a proud Ohioan who's currently based in Chicago.  When I’m not coding, I’m reading, listening to podcasts, playing squash, or spending time with my fiancé, Veronika.  
        </p>
      </section>
    );
  }
}

export default About