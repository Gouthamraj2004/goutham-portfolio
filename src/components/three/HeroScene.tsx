"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

/* ──────────────────────────────────────────────
   Displaced Icosahedron — abstract 3D sculpture
   ────────────────────────────────────────────── */

function SculpturalObject() {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Position on the right side on desktop, centered on mobile
  const isDesktop = viewport.width > 7;
  const targetX = isDesktop ? viewport.width * 0.22 : 0;
  const scale = isDesktop ? 1.05 : 0.85;

  // Create displaced geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.9, 4);
    const positions = geo.attributes.position;
    const normals = geo.attributes.normal;

    for (let i = 0; i < positions.count; i++) {
      const nx = normals.getX(i);
      const ny = normals.getY(i);
      const nz = normals.getZ(i);

      const px = positions.getX(i);
      const py = positions.getY(i);
      const pz = positions.getZ(i);

      // Organic geometric displacement
      const noise =
        Math.sin(px * 2.0 + py * 1.5) * 0.14 +
        Math.cos(py * 3.0 + pz * 2.0) * 0.1 +
        Math.sin(pz * 1.8 + px * 1.8) * 0.08;

      positions.setXYZ(
        i,
        px + nx * noise,
        py + ny * noise,
        pz + nz * noise
      );
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.x = Math.sin(t * 0.06) * 0.12;
  });

  return (
    <group position={[targetX, 0, 0]} scale={scale}>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={meshRef}>
          {/* Main solid metallic sculpt */}
          <mesh geometry={geometry}>
            <meshStandardMaterial
              color="#1a1816"
              metalness={0.35}
              roughness={0.65}
              envMapIntensity={0}
            />
          </mesh>

          {/* Glowing wireframe overlay displaying topology */}
          <mesh geometry={geometry} scale={1.002}>
            <meshBasicMaterial
              wireframe
              color="#c8956c"
              transparent
              opacity={0.22}
            />
          </mesh>

          {/* Inner glowing core */}
          <mesh scale={0.7}>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshBasicMaterial
              wireframe
              color="#d4a882"
              transparent
              opacity={0.12}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

/* ──────────────────────────────────────────────
   Atmospheric Particles
   ────────────────────────────────────────────── */

function Particles({ count = 160 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
      sz[i] = Math.random() * 2.5 + 0.8;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c8956c"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ──────────────────────────────────────────────
   Main Scene Export
   ────────────────────────────────────────────── */

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0c]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "#0a0a0c" }}
        onCreated={({ gl }) => {
          gl.setClearColor("#0a0a0c", 1);
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#0a0a0c"]} />

          {/* Studio Lighting */}
          <ambientLight intensity={0.15} />

          {/* Warm Bronze Key Light (Front/Top Right) */}
          <directionalLight
            position={[6, 5, 5]}
            intensity={1.2}
            color="#f0b484"
          />

          {/* Cool Rim Light (Back/Left) */}
          <directionalLight
            position={[-6, 4, -4]}
            intensity={0.6}
            color="#5888c0"
          />

          {/* Accent Point Light near the model */}
          <pointLight
            position={[2.5, 1, 2.5]}
            intensity={0.8}
            color="#c8956c"
            distance={10}
          />

          {/* Bottom bounce light */}
          <pointLight
            position={[1, -3, 2]}
            intensity={0.3}
            color="#a07550"
            distance={8}
          />

          {/* Fog */}
          <fog attach="fog" args={["#0a0a0c", 6, 20]} />

          {/* Interactive Model & Particles */}
          <SculpturalObject />
          <Particles />

          {/* Allow subtle mouse drag rotation of the scene */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
