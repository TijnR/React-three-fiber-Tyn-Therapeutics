import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import EngineModel from './EngineModel'

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
