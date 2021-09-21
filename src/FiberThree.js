import React, {Suspense} from 'react'
import "./FiberThree.css"
import { Canvas } from '@react-three/fiber'
import Box from './Box'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>
        <Suspense fallback={null} >
          <pointLight position={[1.73, 1.13, .14]}/>
          <ambientLight />
          <Box position={[-1.2, 0, 0]}/>
          <Box position={[1.2, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
