/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useFBX } from "@react-three/drei";

export function Earth(props) {
  const { nodes, materials } = useGLTF("models/earth.gltf");
  const { animations: rotateEarth } = useFBX("animations/earth.fbx")

  // rotateEarth[0].name = "Earth"

  // const { actions } = useAnimations([
  //   rotateEarth[0]
  // ],
  //   group
  // )

  // useEffect(() => {
  //   actions[animation].reset().fadeIn(0.5).play()
  //   return () => {
  //     actions[animation].reset().fadeOut(0.5)
  //   }
  // }, [animation])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.569, -0.001, 2.269]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_2.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={100000}
        near={10}
        fov={39.598}
        position={[-376.412, 212.606, -393.106]}
        rotation={[0.015, -0.815, -0.354]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("models/earth.gltf");
