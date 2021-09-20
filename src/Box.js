import React, {useRef, useState} from 'react'
import "./FiberThree.css"
import { Canvas, useFrame } from '@react-three/fiber'

export default function Box() {
  const mesh = useRef()
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <div>
      
    </div>
  )
}
