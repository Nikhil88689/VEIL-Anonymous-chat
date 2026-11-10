"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { Group } from "three";

function MaskSculpture() {
  const sculpture = useRef<Group>(null);
  const shouldReduceMotion = useReducedMotion();

  useFrame(({ clock }) => {
    if (!sculpture.current || shouldReduceMotion) return;
    sculpture.current.rotation.y = Math.sin(clock.elapsedTime * 0.23) * 0.16;
    sculpture.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.035;
  });

  return (
    <group ref={sculpture}>
      <mesh scale={[0.88, 1.14, 0.56]}>
        <icosahedronGeometry args={[1, 5]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.16}
          color="#a879e7"
          emissive="#35155f"
          emissiveIntensity={0.22}
          metalness={0.62}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[-0.32, 0.14, 0.485]} scale={[0.27, 0.115, 0.07]}>
        <sphereGeometry args={[1, 32, 20]} />
        <meshStandardMaterial color="#09070f" metalness={0.1} roughness={0.32} />
      </mesh>
      <mesh position={[0.32, 0.14, 0.485]} scale={[0.27, 0.115, 0.07]}>
        <sphereGeometry args={[1, 32, 20]} />
        <meshStandardMaterial color="#09070f" metalness={0.1} roughness={0.32} />
      </mesh>

      <mesh position={[0, -0.04, 0.54]} rotation={[0, 0, Math.PI]} scale={[0.13, 0.23, 0.085]}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial color="#d7bbff" metalness={0.72} roughness={0.19} />
      </mesh>
      <mesh position={[0, -0.39, 0.49]} scale={[1.35, 0.42, 0.55]}>
        <torusGeometry args={[0.115, 0.014, 12, 48]} />
        <meshStandardMaterial color="#6be7f4" emissive="#116875" emissiveIntensity={0.55} />
      </mesh>

      <mesh rotation={[1.16, 0.15, -0.18]}>
        <torusGeometry args={[1.42, 0.007, 8, 120]} />
        <meshBasicMaterial color="#9f83c9" transparent opacity={0.44} />
      </mesh>
      <mesh rotation={[0.42, -0.68, 0.4]} scale={[1.08, 1.08, 1.08]}>
        <torusGeometry args={[1.55, 0.004, 8, 120]} />
        <meshBasicMaterial color="#54cdd9" transparent opacity={0.34} />
      </mesh>
    </group>
  );
}

export function VeilScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.15] blur-[70px]" />
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 39 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight color="#d8c2ff" intensity={3.2} position={[-3, 4, 5]} />
        <pointLight color="#8b38e8" intensity={24} position={[2.5, 0, 2]} />
        <pointLight color="#39d6e2" intensity={7} position={[-2.5, -1.7, 1]} />
        <MaskSculpture />
      </Canvas>
    </div>
  );
}
