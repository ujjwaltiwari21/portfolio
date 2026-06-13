"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'

function Scene({ mouse }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    meshRef.current.rotation.x = mouse.y * 0.05 + time * 0.1
    meshRef.current.rotation.y = mouse.x * 0.05 + time * 0.15
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
      <pointLight position={[0, 0, 5]} intensity={1} color="#10b981" />

      <Float speed={2} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
        <mesh ref={meshRef}>
          {/* Yahan par fix kiya h: icosahedronGeometry apply kiya h */}
          <icosahedronGeometry args={[1.6, 16]} /> 
          <MeshTransmissionMaterial
            backside
            samples={16}
            thickness={1.2}
            chromaticAberration={0.05}
            anisotropy={0.3}
            distortion={0.4}
            distortionScale={0.3}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#e2e8f0"
          />
        </mesh>
      </Float>
    </>
  )
}

export default function GlassSphere({ mouse }) {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  )
}