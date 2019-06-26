import React from 'react';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import './App.css'
import About from './components/About/About';
import Divider from './components/Divider/Divider';

function App() {
  return (
    <main className='App'>
      <Header />
      <Greeting />
      <Divider class='greeting-line'/>
      <About />

    </main>
  );
}

export default App;
