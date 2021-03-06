import {useEffect, useState} from "react"
import * as THREE from "three"

export default function VanillaThree() {
  const [rotation, setRotation] = useState(0);
  
  const renderTime = () => {
    const canvas = document.querySelector('canvas');
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial();
    material.color = new THREE.Color(0x00ff00);
    const square = new THREE.Mesh(geometry,material)
    square.rotation.y = rotation;
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
  }

  useEffect(renderTime, [rotation])

  const handleClick = () => {
    setRotation(rotation + .1)
  }
  return (
    <div >
      <canvas 
        className="webgl"
        onClick={handleClick}></canvas>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}
