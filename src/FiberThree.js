import React from 'react'
import "./FiberThree.css"
import { Canvas } from '@react-three/fiber'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>
        <ambientLight intensity={.1} />
        <directionalLight color="red" position={[0,0,5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
