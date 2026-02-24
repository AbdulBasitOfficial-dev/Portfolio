import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus } from "@react-three/drei";
import * as THREE from "three";

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Torus ref={meshRef} args={[1, 0.4, 16, 32]}>
        <MeshDistortMaterial
          color="#2dd4bf"
          wireframe
          transparent
          opacity={0.2}
          distort={0.2}
          speed={2}
        />
      </Torus>
    </Float>
  );
};

const FloatingShape = () => {
  return (
    <div className="w-full h-[200px] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
};

export default FloatingShape;
