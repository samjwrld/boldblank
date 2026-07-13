import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ShapeProps {
  type: 'brand' | 'product' | 'growth' | 'ai-consultancy';
}

const Shape: React.FC<ShapeProps> = ({ type }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.5, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.5, 0.1);
      meshRef.current.rotation.z += delta * 0.15;
    }
  });

  const renderGeometry = () => {
    switch (type) {
      case 'brand':
        return <icosahedronGeometry args={[1, 1]} />;
      case 'product':
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      case 'growth':
        return <coneGeometry args={[0.8, 1.5, 32]} />;
      case 'ai-consultancy':
        return <torusGeometry args={[0.8, 0.3, 16, 100]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshBasicMaterial 
        color="#CCFF00" 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
};

interface Service3DModelProps {
  type: 'brand' | 'product' | 'growth' | 'ai-consultancy';
}

const Service3DModel: React.FC<Service3DModelProps> = ({ type }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Shape type={type} />
      </Canvas>
    </div>
  );
};

export default Service3DModel;
