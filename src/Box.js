import React, {useRef, useState} from 'react'
import "./FiberThree.css"
import { TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

export default function Box({position}) {
  const [normalMap, roughness, color, displacement] = useLoader(TextureLoader, ["MetalPlates006_1K_NormalGL.jpg", "MetalPlates006_1K_Roughness.jpg", "MetalPlates006_1K_Color.jpg", "MetalPlates006_1K_Displacement.jpg"])
  const mesh = useRef()
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [test, setTest] = useState(2);
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += -.02
  })
  return (
    <mesh
      position={position}
      ref={mesh}
      scale={test}
      
      onClick={(e => setActive(!active))}
      onPointerOver = {e => setHover(true)}
      onPointerOut = {e => setHover(false)}
    >
      <octahedronGeometry args = {[1, 0]} />
      <meshStandardMaterial 
        // color={hovered ? "hotpink" : 0xffffff} 
        map={color}
        metalness={.8}
        roughnessMap={roughness}
        // displacementMap={displacement}
        normalMap={normalMap}
      />
    </mesh>
  )
}
