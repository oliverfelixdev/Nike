import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import Scene from "../utils/Scene";

const Sidebar = () => {
  return (
    <div className="sidebar flex items-start z-40">
      <div className="content w-1/2 h-full text-[var(--color-light)]">
        <div className="close w-full px-4 pt-5">
            <button className="text-sm font-semibold">✕ CLOSE</button>
        </div>
        <div className="caption px-4 pt-4">
            <span className="text-xs font-medium text-zinc-300">SHOP CATEGORIES</span>
        </div>
        <div className="categories px-4">
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">Icons</h1>
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">Shoes</h1>
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">Clothing</h1>
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">Kids</h1>
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">New & Featured</h1>
            <h1 className="head-d w-fit text-3xl mt-3 font-[Pln-R]">SNKRS</h1>
        </div>
      </div>
      <div className="cylinder w-1/2 h-full">
        <Canvas flat camera={{ fov: 70 }}>
          {/* <OrbitControls /> */}
          <ambientLight />
          <Scene />
          <EffectComposer>
            <Bloom
              // mipmapBlur
              intensity={7}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default Sidebar;
