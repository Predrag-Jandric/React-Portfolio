import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations";

// Model component to load 3D object from GLTF file
const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/hero/react_logo2.glb");
  return <primitive object={scene} ref={ref} {...props} />;
});

Model.displayName = "Model";

// RotatingModel component for rotation animation
function RotatingModel() {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.007; // Rotation speed
    }
  });

  return <Model ref={modelRef} />;
}

export default function ThreeDObject() {
  return (
    <motion.div
      initial={heroVariants.initial}
      animate={heroVariants.animate}
      transition={{ duration: 0.5, delay: 1 }}
      className="relative md:mb-0 mb-10 size-80 lg:size-96" // Make it a relative container for overlay
    >
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingModel />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Transparent Overlay Div */}
      <div
        className="absolute inset-0 z-10" // Overlay with higher z-index than Canvas
      >
        {/* You can add more UI elements here if needed */}
      </div>
    </motion.div>
  );
}
