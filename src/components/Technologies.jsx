import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFigma } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
<SiIntellijidea />;
<VscVscode />;
import { SiMui } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl "
      >
        Tech<span className="text-neutral-500">nologies</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:-mt-2 ">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <RiReactjsLine className="text-cyan-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <FaCss3Alt className="text-blue-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <SiMui className="text-blue-600 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <RiJavaLine className="text-amber-400 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <SiJunit5 className="text-red-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <BiLogoSpringBoot className="text-green-600 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <SiPostman className="text-orange-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <BiLogoPostgresql className="text-blue-600 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <FaDocker className="text-blue-800 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <VscVscode className="text-blue-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <SiIntellijidea className="text-purple-500 text-4xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-3"
        >
          <SiFigma className="text-pink-500 text-4xl" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
