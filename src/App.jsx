import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { AppProvider } from "./context/GameContext";

function App() {
  return (
    <>
      <AppProvider>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <color attach="background" args={["#171720"]} />
          <fog attach="fog" args={["#171720", 10, 30]} />
          <Suspense>
            <Experience />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.2} />
          </EffectComposer>
        </Canvas>
        <UI />
      </AppProvider>
    </>
  );
}

export default App;
