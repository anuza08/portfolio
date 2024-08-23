// src/models/sky.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";
import { a } from "@react-spring/three";
const Sky = (props) => {
  const skyRef = useRef();

  // Rotate the sky on every frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (skyRef.current) {
      skyRef.current.rotation.y = elapsedTime * 0.03;
    }
  });

  const { nodes, materials } = useGLTF(skyScene);
  return (
    <a.group ref={skyRef} {...props}>
      <a.group scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={500}
        />
      </a.group>
    </a.group>
  );
};

export default Sky;
