import React from 'react';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import './App.css'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <main className='App'>
      <Header />
      <Greeting />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
