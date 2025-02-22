import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import {
  Bloom,
  Vignette,
  ChromaticAberration,
  Noise,
} from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import CylinderScene from "../utils/CylinderScene";
import { OrbitControls } from "@react-three/drei";

function AdaptiveFOV() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 600) {
      camera.fov = 50;
    } else if (size.width < 1024) {
      camera.fov = 40;
    } else {
      camera.fov = 35;
    }

    camera.updateProjectionMatrix();
  }, [size.width]);

  return null;
}

const Jordan = () => {
  const [weight, setWeight] = useState(400);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      const fontWeight = Math.min(
        900,
        Math.max(100, (mouseX / screenWidth) * 800 + 100)
      );
      setWeight(fontWeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="jordan">
        <Canvas flat camera={{ fov: 25, position: [0, 0, 5] }}>
          <AdaptiveFOV />
          <ambientLight intensity={0.5} color={"#ffbb88"} />{" "}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            color={"#fff"}
            castShadow
          />
          <spotLight
            position={[-3, 3, 3]}
            angle={0.5}
            intensity={1.8}
            castShadow
            color={"#ff7700"}
          />
          <pointLight position={[0, 0, 5]} intensity={1} color={"#ffaa33"} />
          <CylinderScene />
          <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.5}
              mipmapBlur
            />
            <ChromaticAberration offset={[0.002, 0.0015]} />{" "}
            <Vignette eskil={false} offset={0.3} darkness={0.7} />{" "}
            <Noise opacity={0.05} />
          </EffectComposer>
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Tribute Section */}
        <div className="jordan-info flex flex-col items-center text-center p-8">
          <h1
            className="jordan-title uppercase"
            style={{
              fontWeight: weight,
              background: "linear-gradient(135deg, #ff0000, #000000)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Jordan
          </h1>

          <div className="jordan-content max-w-3xl mt-6 space-y-4">
            <p className="text-4xl font-semibold">Tribute to Michael Jordan</p>
            <p className="text-lg leading-relaxed text-[var(--color-light)]">
              Michael Jordan is more than a basketball player—he is the
              embodiment of excellence, resilience, and an unrelenting pursuit
              of greatness. From the moment he stepped onto the court, he
              redefined what was possible, not just for the game of basketball
              but for sports culture worldwide. His gravity-defying dunks,
              game-winning shots, and relentless drive made him a global icon,
              inspiring generations to push beyond limits.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-light)]">
              Six championships, five MVPs, and countless legendary moments tell
              only part of the story—his true legacy lies in the mindset he
              instilled in all of us: that failure is fuel, hard work is
              non-negotiable, and greatness is earned, not given. Jordan didn’t
              just play the game—he changed it, elevating not just himself, but
              everyone who dared to dream. His impact will never fade, because
              legends never do.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jordan;
