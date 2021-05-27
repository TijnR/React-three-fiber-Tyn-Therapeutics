/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: sucholudek (https://sketchfab.com/sucholudek)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cell-shaded-double-helix-fc666762303f465fa6e82233552de89c
title: Cell Shaded Double Helix
*/

import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'
import { useSpring, a } from 'react-spring/three'

export default function HelixModel(props) {
  const [slowing, setSlowing] = useState(false)

  const group = useRef()
  const { nodes } = useGLTF('/models/dna_helix/scene.gltf')

  let rotateSpeed = 0.01

  useFrame((state, delta) => {
    group.current.rotation.y += rotateSpeed

    if (slowing && rotateSpeed > 0) {
      rotateSpeed -= 0.0001
    }
  })

  const handleMouseEvent = (e) => {
    console.log('bruh')
  }

  const basic = (
    <meshStandardMaterial
      attach="material"
      transparent
      roughness={0.1}
      metalness={0.1}
    />
  )

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      position={[5, 0, 0]}
      // onClick={() => setColored(!colored)}
      onPointerOver={() => setSlowing(true)}
      onPointerOut={() => setSlowing(false)}
    >
      <group rotation={[-Math.PI * 0.5, 0, 0]}>
        <group rotation={[Math.PI * 0.5, 0, 0]}>
          <group rotation={[-Math.PI * 0.5, 0, 0]}>
            <a.mesh geometry={nodes['helix_Material_#25_0'].geometry}>
              <meshStandardMaterial
                attach="material"
                transparent
                roughness={0.1}
                metalness={0.1}
              />
            </a.mesh>
          </group>
          <group name="helixcell" rotation={[-Math.PI / 2, 0, 0]}>
            <a.mesh geometry={nodes['helixcell_Material_#26_0'].geometry}>
              <meshStandardMaterial
                attach="material"
                transparent
                roughness={0.1}
                metalness={0.1}
              />
            </a.mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/dna_helix/scene.gltf')
