import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  let tex = useTexture("./scenetrack.png");
  tex.needsUpdate - true;

  let scn = useRef(null);
  useFrame((state, delta) => {
    scn.current.rotation.y += delta * 0.3;
  });
  return (
    <group rotation={[0, 1.4, 0.2]}>
      <mesh ref={scn}>
        <cylinderGeometry args={[2, 2, 2, 50, 50, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;
