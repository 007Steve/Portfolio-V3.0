import React from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { usePlane, useSphere } from "@react-three/cannon";

const MouseBall = () => {
  const viewport = useThree((state) => state.viewport);
  //back
  usePlane(() => ({ position: [0, 0, -0.5], rotation: [0, 0, 0] }));
  //front
  usePlane(() => ({ position: [0, 0, 3], rotation: [0, -Math.PI, 0] }));
  //bottom
  usePlane(() => ({
    position: [0, -3, 3],
    rotation: [-Math.PI / 2, 0, 0],
    scale: [2, 2, 20],
  }));
  //top
  usePlane(() => ({
    position: [0, 2, 3],
    rotation: [Math.PI / 2, 0, 0],
    scale: [2, 2, 20],
  }));
  //right
  usePlane(() => ({
    position: [3, 0, 3],
    rotation: [Math.PI / 45, 30, 0],
    scale: [2, 2, 20],
  }));
  //left
  usePlane(() => ({
    position: [-3, 0, 3],
    rotation: [Math.PI / 45, 20, 0],
    scale: [2, 2, 20],
  }));
  const [ref, api] = useSphere(() => ({
    type: "Kinematic",
    args: [1.2, 1.2, 1.2],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      1
    )
  );
};
function PhysicsBorders() {
  return (
    <>
      <MouseBall />
    </>
  );
}

export default PhysicsBorders;
