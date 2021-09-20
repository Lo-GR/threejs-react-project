import React, {Suspense} from 'react'
import "./FiberThree.css"
import { Canvas } from '@react-three/fiber'
import Box from './Box'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>

          <ambientLight />
          <Box position={[-1.2, 0, 0]}/>
          <Box position={[1.2, 0, 0]} />

      </Canvas>
    </div>
  )
}
