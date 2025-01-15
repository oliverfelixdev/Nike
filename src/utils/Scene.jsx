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

// code of canvas ::::
/*
  JSX:
      <div className="cylinder w-1/2 h-full">
        <Canvas flat camera={{ fov: 65 }}>
          <ambientLight />
          <Scene />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={7}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
  Imports::
      import { Canvas } from "@react-three/fiber";
      import { OrbitControls } from "@react-three/drei";
      import * as THREE from "three";
      import {
        Bloom,
        EffectComposer,
        ToneMapping,
}     from "@react-three/postprocessing";
      import Scene from "../utils/Scene";
*/
