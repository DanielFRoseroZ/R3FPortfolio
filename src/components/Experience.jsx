import { OrbitControls, Stage } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { SetUp } from "./SetUp";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  const { section } = props;
  const ref = useRef();

  return (
    <>
      <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
        <motion.group
          position={[10,0,10]}
          rotation-y={-0.17}
        >
          false
            <SetUp section={section} />
          false
        </motion.group>
      </Stage>
    </>
  );
};
