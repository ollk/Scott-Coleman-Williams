import React from 'react';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import './App.css'
import About from './components/About/About';
import Divider from './components/Divider/Divider';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <main className='App'>
      <Header />
      <Greeting />
      <Divider class='greeting-line'/>
      <About />
      <Divider class='about-line'/>
      <Skills />
      <Divider class='skills-line' />
      <Portfolio />

    </main>
  );
}

export default App;
