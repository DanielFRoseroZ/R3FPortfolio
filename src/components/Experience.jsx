import { MeshDistortMaterial, Stage, Float, MeshWobbleMaterial, useScroll } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { SetUp } from "./SetUp";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { useThree, useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";
import { Projects } from "./Projects";
import { Background } from "./Background";
import * as THREE from "three";

export const Experience = (props) => {
  const { viewport } = useThree();
  const { menuOpened } = props;
  const data = useScroll();
  const ref = useRef();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? 0 : 5, {
      ...framerMotionConfig
    });
    animate(cameraLookAtX, menuOpened ? 5 : -6), {
      ...framerMotionConfig
    };
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let currentSection = Math.floor(data.scroll.current * data.pages);

    if(currentSection > 3) {
      currentSection = 3;
    }

    if(currentSection !== section) {
      setSection(currentSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 1, 8);
  });

  return (
    <>
    <Background />
      <motion.group 
        ref={characterContainerAboutRef}
        name="Empty"
        position={[0.256, -5.124, -3.018]}
        rotation={[-Math.PI, 0.082, -Math.PI]}
        animate={"" + section}
        transition={{
          duration: 0.6
        }}
        variants={{
          0: {
            scaleX: 6.022,
            scaleY: 6.022,
            scaleZ: 6.022,
          },
          1: {
            y: -viewport.height-6,
            x: -5,
            z: 7,
            rotateX: 0,
            rotateY: 0.4,
            rotateZ: 0,
            scaleX: 8.022,
            scaleY: 8.022,
            scaleZ: 8.022,
          },
          3: {
            y: -75,
            x: 2,
            z: 20,
            rotateX: 0,
            rotateY: -0.2,
            rotateZ: 0,
            scaleX: 6,
            scaleY: 6,
            scaleZ: 6,
          }
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <group>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
          <motion.group
            position={[8,0,14]}
            rotation-y={-0.17}
            animate={{
              y: section === 0 ? 1 : -1,
            }}
          >
            false
              <SetUp />
            false
            </motion.group>
        </Stage>
      </group>

      {/* SKILLS SECTION */}

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 5 : -1,
          y: section === 1 ? -viewport.height-4 : -2,
          x: section === 1 ? -4 : -20,
          scale: section === 1 ? [1.2,1.2,1.2] : [1,1,1],
          rotateY: section === 1 ? 0.3 : 0,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[-3,10,-8]} scale={[4,4,4]}>
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
          <mesh scale={[4,4,4]} position={[3,5,-10]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3.4,3.4,3.4]} position={[-3,3,-2]}>
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
      <Projects />
    </>
  );
};
