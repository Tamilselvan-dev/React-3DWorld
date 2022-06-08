import "./styles.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Components/EarthComponent/Earth";
import TextSection from "./Components/TopSection/TextSection";
import NavBar from "./Components/PageComponents/Navbar";

export default function App() {
  return (
    <>
      <CanvasContainer>
        <NavBar />
        <TextSection />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <CanvasContainer>
        <Canvas
          colorManagement={false}
          camera={{ position: [100, 10, 0], fov: 75 }}
        >
          <Suspense fallback={null}></Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
