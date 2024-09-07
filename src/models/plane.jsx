import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Plane = ({ isRotate, ...props }) => {
  isRotate = true;
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].setLoop(THREE.LoopRepeat).reset().play();

      if (!isRotate) {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotate]);

  return <primitive object={scene} ref={ref} {...props} />;
};

export default Plane;
