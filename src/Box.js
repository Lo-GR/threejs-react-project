import React, {useRef, useState} from 'react'
import "./FiberThree.css"
import { TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

export default function Box({position}) {
  // const textureLoader = new TextureLoader;
  // const normalMap = textureLoader.load('/textures/NormalMap.png')
  const normalMap = useLoader(TextureLoader, "NormalMap.png")
  const mesh = useRef()
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // const [ normalMap ] = useLoader(TextureLoader, ['/textures/NormalMap.png'])
  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      
      onClick={(e => setActive(!active))}
      onPointerOver = {e => setHover(true)}
      onPointerOut = {e => setHover(false)}
    >
      <boxGeometry args = {[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? "hotpink" : "orange"} 
        // metalness={.7}
        // roughness={.2}
        normalMap={normalMap}
      />
    </mesh>
  )
}
