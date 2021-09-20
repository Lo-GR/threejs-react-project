import React, {useRef, useState} from 'react'
import "./FiberThree.css"
import { Canvas, useFrame } from '@react-three/fiber'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>
        <ambientLight />
        <directionalLight color="red" position={[1,1,5]} />
        <mesh>
          <sphereGeometry args={[2, 20, 20]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
