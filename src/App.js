import "./styles.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Components/EarthComponent/Earth";
import TextSection from "./Components/TopSection/TextSection";

export default function App() {
  return (
    <CanvasContainer>
      <TextSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
