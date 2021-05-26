import React, { useState, useRef, Suspense } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from '@react-three/drei'
import { useSpring, a } from 'react-spring/three'
import { MeshBasicMaterial } from 'three'
import EngineModel from './EngineModel'

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

function EngineCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        fov: 60,
        position: [0, 0, 15],
        near: 0.1,
        far: 1000,
      }}
    >
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        <EngineModel />
      </Suspense>

      {/* <OrbitControls /> */}

      {/* <axesHelper /> */}
    </Canvas>
  )
}

export default EngineCanvas
