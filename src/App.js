import logo from './logo.svg';
import * as THREE from "three"
import './App.css';

function App() {
  const canvas = document.querySelector('canvas.webgl');
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial();
  material.color = new THREE.Color(0xff000);
  const square = new THREE.Mesh(geometry,material)
  scene.add(square)
  return (
    <div className="App">
      <header className="App-header">
      <canvas className="webgl"></canvas>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
