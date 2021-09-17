import logo from './logo.svg';
import * as THREE from "three"
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [clicked, setClicked] = useState(false);
  
  useEffect(() =>{
  const canvas = document.querySelector('canvas');
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial();
  material.color = new THREE.Color(0x00ff00);
  const square = new THREE.Mesh(geometry,material)
  scene.add(square)
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  //Basic pointlight
  const pointLight = new THREE.PointLight(0xffffff, 0.1)
  pointLight.position.x = 2
  pointLight.position.y = 3
  pointLight.position.z = 4
  scene.add(pointLight)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    //alpha true will make background transparent
    alpha: true
  })
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 2
  scene.add(camera)
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)
  }, [])

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <div className="App">
      <header className="App-header">
      <canvas 
        className="webgl"
        onClick={handleClick}></canvas>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
