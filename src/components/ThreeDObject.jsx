import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations";

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/react_logo.glb");
  return <primitive object={scene} ref={ref} {...props} />;
});

Model.displayName = "Model";

function RotatingModel() {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.007;
    }
  });

  return <Model ref={modelRef} />;
}

export default function ThreeDObject() {
  return (
    <motion.div
      initial={heroVariants.initial}
      animate={heroVariants.animate}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="size-96 cursor-grab"
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
