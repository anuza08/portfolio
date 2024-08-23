import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/loader";
import Island from "../models/island";
import Sky from "../models/sky";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 100 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Sky />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
