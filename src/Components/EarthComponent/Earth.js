import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import earth from "../../../public/world.jpg";
import cloud from "../../../public/clouds.jpg";
import negativeMap from "../../../public/earth-negative-map.jpg";
import nightMap from "../../../public/earth-night-map.jpg";
import terrainMap from "../../../public/earth-terrain-map.jpg";
import { DoubleSide, NotEqualStencilFunc, TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const Earth = () => {
  const [
    colorMap,
    cloudMap,
    NightMap,
    TerrainMap,
    NegativeMap
  ] = useLoader(TextureLoader, [
    earth,
    cloud,
    nightMap,
    terrainMap,
    negativeMap
  ]);

  const earthRef = useRef(null);

  // useFrame(({ clock })=> {
  //const time = clock.getElapsedTime();
  // earthRef.current.rotation.y = time / 6;
  // });

  return (
    <>
      {/* <ambientLight intensity={2} /> */}
      <pointLight color="#f6f3ea" position={[1, 0, 8]} intensity={2} />

      <Stars radius={300} depth={60} count={8000} factor={7} fade={true} />

      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={NegativeMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={TerrainMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={false}
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
