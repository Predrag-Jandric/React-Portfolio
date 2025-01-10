import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, forwardRef } from "react";
import { motion } from "framer-motion";

// Use forwardRef to allow ref to be applied to the Model component
const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/react_logo.glb"); // Ensure GLB file is in your public folder
  return <primitive object={scene} ref={ref} {...props} />;
});

// Set displayName for the component to avoid the warning
Model.displayName = "Model";

function RotatingModel() {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007; // Smooth rotation
    }
  });

  return <Model ref={modelRef} />;
}

export default function Test() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-fit border h-80 border-red-300 cursor-grab"
    >
      <Canvas>
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
    </motion.div>
  );
}
