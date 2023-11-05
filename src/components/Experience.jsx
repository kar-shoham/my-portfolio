import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky, useScroll } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Scene } from "./Scene";
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import { Earth } from "./Earth";
import Projects from "./Projects";

export const Experience = ({ menuOpened }) => {
  const [section, setSection] = useState(0)

  let { animation } = useControls({
    animation: {
      value: 'Typing',
      options: ['Typing', 'Falling', 'Standing']
    }
  })
  const { viewport } = useThree()
  const data = useScroll();
  const cameraPositionX = useMotionValue(0)
  const cameraLookAtX = useMotionValue(0)

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    })
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    })
  }, [menuOpened])

  let characterContainerAboutRef = useRef()

  const [characterAnimation, updateCharacterAnimation] = useState('Typing')

  useEffect(() => {
    updateCharacterAnimation('Falling')
    setTimeout(() => {
      updateCharacterAnimation(section === 0 ? 'Typing' : 'Standing')
    }, 600)
  }, [section])

  useFrame((state) => {
    let currSection = Math.floor(data.scroll.current * data.pages)

    if (currSection !== section) {
      setSection(currSection)
    }

    if (currSection > 3) {
      currSection = 3
    }

    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)
  })

  
  return (
    <>
      {/* <OrbitControls /> */}
      <motion.group
        position={[1.9000, 0.1949, 2.6818]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 1.1,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: -0.6,
            rotateZ: 0,
          }
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1
        }}
      >
        <Scene section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.22, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        >
        </group>
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <motion.mesh
        scale={[0.02, 0.02, 0.02]}
        position={[1.5, -23.2, 3]}
        rotation-y={-11.5}
      >
        <Earth />
      </motion.mesh>
      {/* <Projects/> */}
    </>
  );
};
