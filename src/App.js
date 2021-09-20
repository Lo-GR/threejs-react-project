import logo from './logo.svg';
import * as THREE from "three"
import './App.css';
import {useEffect, useState} from "react"
import VanillaThree from './VanillaThree';
import FiberThree from './FiberThree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FiberThree />
      </header>
    </div>
  );
}

export default App;
