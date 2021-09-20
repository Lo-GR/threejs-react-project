import React from 'react'
import "./FiberThree.css"
import { Canvas } from '@react-three/fiber'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[1,1,5]} />
        <mesh>
          <sphereGeometry args={[2, 20, 20]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
