"use client"

import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Sphere, Box, Cylinder } from "@react-three/drei"
import * as THREE from "three"

interface AnimatedCharacterProps {
  position?: [number, number, number]
}

export function AnimatedCharacter({ position = [0, 0, 0] }: AnimatedCharacterProps) {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Mesh>(null)
  const rightArmRef = useRef<THREE.Mesh>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    const mouse = state.mouse
    const targetX = (mouse.x * viewport.width) / 8
    const targetY = (mouse.y * viewport.height) / 8

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, position[0] + targetX, 0.05)
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, position[1] + targetY, 0.05)
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + mouse.x * 0.2
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1 - mouse.y * 0.3
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2 + mouse.x * 0.4
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.2
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3 + Math.PI) * 0.3 - 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <Sphere ref={headRef} args={[0.3]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.05]} position={[-0.1, 1.25, 0.25]}>
        <meshStandardMaterial color="#000" />
      </Sphere>
      <Sphere args={[0.05]} position={[0.1, 1.25, 0.25]}>
        <meshStandardMaterial color="#000" />
      </Sphere>

      {/* Body */}
      <Cylinder args={[0.25, 0.3, 0.8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#6366f1" />
      </Cylinder>

      {/* Arms */}
      <Cylinder ref={leftArmRef} args={[0.08, 0.08, 0.6]} position={[-0.4, 0.6, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color="#ffdbac" />
      </Cylinder>
      <Cylinder ref={rightArmRef} args={[0.08, 0.08, 0.6]} position={[0.4, 0.6, 0]} rotation={[0, 0, -0.2]}>
        <meshStandardMaterial color="#ffdbac" />
      </Cylinder>

      {/* Legs */}
      <Cylinder args={[0.1, 0.1, 0.7]} position={[-0.15, -0.35, 0]}>
        <meshStandardMaterial color="#374151" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.7]} position={[0.15, -0.35, 0]}>
        <meshStandardMaterial color="#374151" />
      </Cylinder>

      {/* Laptop */}
      <Box args={[0.4, 0.02, 0.3]} position={[0, 0.8, 0.2]} rotation={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>
      <Box args={[0.4, 0.3, 0.02]} position={[0, 0.95, 0.05]} rotation={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#000" />
      </Box>
    </group>
  )
}
