import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Letter from './components/Letter';
import Score from './components/Score';
import Solution from './components/Solution';


function App() {
  return (
   <div id='mainContainer'>
     <Solution/>
     <Score/>
     <Letters/>
   </div>
  )
}

export default App;
