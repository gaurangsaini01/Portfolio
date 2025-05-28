import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const TechSphere = React.lazy(()=> import("./TechSphere"));


const About = () => {
  return (
    <div className="flex justify-between gap-10">
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
      >
        I'm a full stack developer with a strong command over JavaScript,TypeScript, React, and Next.js.
I love building fast, responsive, and scalable web applications with clean UI and optimized performance.
      </motion.p>
      </div>

      <TechSphere />

    </div>
  );
};

export default SectionWrapper(About, "about");
