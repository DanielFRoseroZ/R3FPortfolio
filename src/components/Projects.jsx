import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
    {
        title: "3D Modeling - Avatar",
        url: "https://github.com/DanielFRoseroZ/R3FPortfolioAnimations",
        image: "projects/Avatar.png",
        description: "Learning how to create an Avatar and animate it using React Three Fiber and Framer Motion."
    },
    {
        title: "3D Modeling - SetUp",
        url: "https://github.com/DanielFRoseroZ/R3FSetUp",
        image: "projects/SetUp.png",
        description: "Learning how to create a SetUp using Blender."
    },
    {
        title: "APIRest for a concessionaire",
        url: "https://github.com/DanielFRoseroZ/Dinamo",
        image: "projects/DRestFramework.png",
        description: "Learning how to create an APIRest using Django Rest Framework."
    },
    {
        title: "Peronal 3DPortfolio",
        url: "https://github.com/DanielFRoseroZ/R3FPortfolio",
        image: "projects/R3F.png",
        description: "Learning React3Fiber doing a personal portfolio."
    },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[3, 3.5]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2.5, 1.5, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.7}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.21}
        position={[-1, -0.14, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.12}
        position={[-1, -0.7, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 5} position-x={-12} scale={[2.5,2.5,2.5]}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3.9,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};