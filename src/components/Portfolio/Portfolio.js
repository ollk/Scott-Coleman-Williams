import React, { Component } from 'react'
import './Portfolio.css'
import Project from '../Project/Project';
import carpeduo from '../../images/carpeduo.png'
import learncyrillic from '../../images/learncyrillic.png'
import mimood from '../../images/mimood.png'

class Portfolio extends Component {
  
  render() {
    return (
      <section className='section portfolio' id='projects'>
        <div className='portfolio-header section-header'>
          <h2>Projects</h2>
          <p>A few of the things I've built</p>
        </div>
        <div className='line' />
        <div className='portfolio-content'>
          <Project 
            title='Carpe Duo'
            image={carpeduo}
            desc={`Carpe Duo is a fullstack React app built to help users organize and schedule a productive weekend. Designed to supplement a conventional calendar app, Carpe Duo allows the user to first create a list of weekend tasks, then drag and drop these tasks into and around a weekend timeline to create a weekend schedule. It's a dynamic to-do list and scheduling tool.`}
            live='https://carpeduo.scottcolemanwilliams.now.sh/'
            repo='https://github.com/ollk/carpe-duo-client'
            tech={
              <div className='tech-logos'>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-mocha-plain"></i>
              </div>
            }
          />
          <Project 
            title='Learn Cyrillic'
            image={learncyrillic}
            desc={`The spaced repetition technique is a learning technique where the learner is exposed to new information in increasingly large intervals.  In this five day project, I utilized the spaced repetition technique and a Linked List data structure to build a fullstack app that teaches users the Russian variety of the Cyrillic alphabet.  Users are asked to translate a Cyrillic letter into its english, Latin alphabet equivalent e.g. (д => d).`}
            live='https://learn-cyrillic.now.sh/'
            repo='https://github.com/thinkful-ei-bee/spacerep-client-scott-donald'
            tech={
              <div className='tech-logos'>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-mocha-plain"></i>
              </div>
            }
          />
          <Project 
            title='miMood journal'
            image={mimood}
            desc={`miMood is a fullstack journaling app and emotion tracker.  Users can write a journal entry, upload a selfie, and select a mood value representing how they're feeling.  The written entry and selfie are analyzed by the Watson and Azure APIs for writing tone and emotional expression.  We then present this analysis to the user, providing deeper insight into emotional state.  Users can review past entries and see trends over time in their emotional data.`}
            live='https://alt-states-mimood.now.sh/'
            repo='https://github.com/thinkful-ei-bee/Altered-States-Capstone'
            tech={
              <div className='tech-logos'>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-mocha-plain"></i>
              </div>
            }
          />
        </div>
      </section>
    );
  }
}

export default Portfolio