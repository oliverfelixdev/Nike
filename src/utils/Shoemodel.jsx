import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Model = () => {
  const { scene } = useGLTF("/shoepegasus.glb");
  const modelRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // Time-based animation
    const scaleFactor = 1.5 + 0.05 * Math.sin(t * 0.5);
    modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    modelRef.current.rotation.z = Math.PI / 1.6 + 0.1 * Math.sin(t * 0.5);
    modelRef.current.position.y = 0.2 * Math.sin(t * 0.5);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[-Math.PI / 2, 1, Math.PI / 1.6]}
    />
  );
};

const Shoemodel = () => {
  return (
    <div className="shoe-model">
      <div className="glb-model-main">
        <Canvas flat camera={{ fov: 35, position: [0, 0, 5] }}>
          {/* <OrbitControls /> */}
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={1.5} />
          </EffectComposer>
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default Shoemodel;
