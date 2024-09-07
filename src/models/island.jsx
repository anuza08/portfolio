import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";

const Island = ({ isRotate, setIsRotate, setCurrentStage, ...props }) => {
  const { gl, viewpoint } = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const islandRef = useRef();
  const lastx = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const scrollFactor = 0.00005;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotate(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastx.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotate(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotate) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastx.current) / viewpoint.width;

      islandRef.current.rotation.y += delta * 0.005 * Math.PI;
      lastx.current = clientX;
      rotationSpeed.current = delta * 0.005 * Math.PI;
    }
  };

  const handleScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const delta = e.deltaY * scrollFactor;
    rotationSpeed.current -= delta;
  };

  useFrame(() => {
    if (!isRotate) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    }

    // Update currentStage based on rotation
    const rotation = islandRef.current.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.95:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 2.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.9 && normalizedRotation <= 3.4:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.85:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("wheel", handleScroll);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("wheel", handleScroll);
    };
  }, [gl]);
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
