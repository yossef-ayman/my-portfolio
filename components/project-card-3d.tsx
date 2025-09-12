"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Html } from "@react-three/drei"
import type * as THREE from "three"

interface Project {
  title: string
  description: string
  tech: string[]
}

interface ProjectCard3DProps {
  position: [number, number, number]
  project: Project
}

export function ProjectCard3D({ position, project }: ProjectCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1)
    }
  })

  return (
    <Box
      ref={meshRef}
      args={[1.5, 2, 0.1]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? "#6366f1" : "#374151"} transparent opacity={0.8} />

      <Html
        transform
        occlude
        position={[0, 0, 0.06]}
        style={{
          width: "200px",
          height: "250px",
          padding: "16px",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          color: "#1f2937",
          fontSize: "12px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}>{project.title}</h3>
        <p style={{ fontSize: "10px", marginBottom: "12px", lineHeight: "1.4" }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", justifyContent: "center" }}>
          {project.tech.map((tech, index) => (
            <span
              key={index}
              style={{
                background: "#6366f1",
                color: "white",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "8px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Html>
    </Box>
  )
}
