import React from "react";
import { useLoader } from "@react-three/fiber";
import earth from "../../../public/world.jpg";
import cloud from "../../../public/clouds.jpg";
import { DoubleSide, TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const Earth = () => {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [earth, cloud]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />

      <mesh>
        <sphereGeometry args={[1.5, 60, 60]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.5, 60, 60]} />
        <meshPhongMaterial />
        <meshStandardMaterial map={colorMap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
};

export default Earth;
