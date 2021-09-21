import React, {Suspense} from 'react'
import "./FiberThree.css"
import { Canvas } from '@react-three/fiber'
import Box from './Box'

export default function FiberThree() {
  return (
    <div className="three-container">
      <Canvas>
        <Suspense fallback={null} >
          <pointLight position={[1.73, 2, 1.14]} color={0x3a86ff}/>
          <pointLight position={[-1.1, -1.8, 1.8]} color={0xfb5607} />
          <ambientLight />
          <Box position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
