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
import HelixModel from './DnaHelix'

// const SpinningMesh = ({ position, args, color, speed }) => {
//   const mesh = useRef(null)
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

//   const [expand, setExpand] = useState(false)

//   const props = useSpring({
//     scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
//   })

//   return (
//     <a.mesh
//       onClick={() => setExpand(!expand)}
//       scale={props.scale}
//       castShadow
//       position={position}
//       ref={mesh}
//     >
//       <boxBufferGeometry attach="geometry" args={args} />
//       <MeshWobbleMaterial
//         attach="material"
//         color={color}
//         speed={speed}
//         factor={0.6}
//       />
//     </a.mesh>
//   )
// }

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

function DnaCanvas() {
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
        <HelixModel />
      </Suspense>

      {/* <axesHelper /> */}
    </Canvas>
  )
}

export default DnaCanvas
