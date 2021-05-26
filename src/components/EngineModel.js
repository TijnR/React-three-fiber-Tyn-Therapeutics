/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MattMurch (https://sketchfab.com/MattMurch)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/build-inktober-5th-ead77564d5e94b28bdcfb8c72c3ab75e
title: Build - Inktober 5th
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function EngineModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/engine/scene.gltf')
  const lego1 = useRef()
  const lego2 = useRef()
  const lego3 = useRef()
  const piece1 = useRef()
  const piece2 = useRef()
  const piece3 = useRef()

  useFrame((state) => {
    lego1.current.rotation.z -= 0.003
    lego2.current.rotation.z -= 0.001
    lego3.current.rotation.z -= 0.002

    piece1.current.rotation.y -= 0.002
    piece2.current.rotation.y -= 0.002
    piece3.current.rotation.y -= 0.002
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.004, 0.004, 0.004]}
      position={[-5, 0, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[407.62, 590.39, -100.55]}
            rotation={[-2.56, -0.78, -1.54]}
            scale={[100, 100, 100]}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[963.04, 483.67, -7935.85]}
            rotation={[-3.14, -1.43, 3.08]}
            scale={[100, 100, 100]}
          />
          <group
            ref={lego1}
            rotation={[-2.84, 0.64, -2.91]}
            scale={[100, 100, 100]}
          >
            <group rotation={[0, 0, 0]}>
              <group
                ref={piece1}
                position={[15, 0, 0]}
                rotation={[0.46, -0.86, -0.91]}
              >
                <mesh
                  geometry={nodes.Cube002_Lego_0.geometry}
                  material={nodes.Cube002_Lego_0.material}
                />
              </group>
              <mesh
                geometry={nodes.Torus_Glow_0.geometry}
                material={nodes.Torus_Glow_0.material}
              />
              <mesh
                geometry={nodes.Torus_Feild_0.geometry}
                material={nodes.Torus_Feild_0.material}
              />
            </group>
            <mesh
              geometry={nodes.Cube003_Glow_0.geometry}
              material={nodes.Cube003_Glow_0.material}
            />
          </group>
          <group
            ref={lego2}
            rotation={[2.14, -0.64, -0.52]}
            scale={[100, 100, 100]}
          >
            <group rotation={[0, 0, 0]}>
              <group
                ref={piece2}
                position={[15, 0, 0]}
                rotation={[2.44, 0.6, 0.03]}
              >
                <mesh
                  geometry={nodes.Cube004_Lego_0.geometry}
                  material={nodes.Cube004_Lego_0.material}
                />
              </group>
              <mesh
                geometry={nodes.Torus001_Glow_0.geometry}
                material={nodes.Torus001_Glow_0.material}
              />
              <mesh
                geometry={nodes.Torus001_Feild_0.geometry}
                material={nodes.Torus001_Feild_0.material}
              />
            </group>
            <mesh
              geometry={nodes.Cube005_Glow_0.geometry}
              material={nodes.Cube005_Glow_0.material}
            />
          </group>
          <group
            ref={lego3}
            rotation={[1.23, 0.74, -0.26]}
            scale={[100, 100, 100]}
          >
            <group rotation={[0, 0, 0]}>
              <group
                ref={piece3}
                position={[15, 0, 0]}
                rotation={[2.89, -0.02, -1.37]}
              >
                <mesh
                  geometry={nodes.Cube006_Lego_0.geometry}
                  material={nodes.Cube006_Lego_0.material}
                />
              </group>
              <mesh
                geometry={nodes.Torus002_Glow_0.geometry}
                material={nodes.Torus002_Glow_0.material}
              />
              <mesh
                geometry={nodes.Torus002_Feild_0.geometry}
                material={nodes.Torus002_Feild_0.material}
              />
            </group>
            <mesh
              geometry={nodes.Cube007_Glow_0.geometry}
              material={nodes.Cube007_Glow_0.material}
            />
          </group>
          <group
            position={[0, 0, 0]}
            rotation={[-2.85, 0.46, 0.8]}
            scale={[100, 100, 100]}
          >
            <mesh
              geometry={nodes.Cube021_Lego_0.geometry}
              material={nodes.Cube021_Lego_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/engine/scene.gltf')
