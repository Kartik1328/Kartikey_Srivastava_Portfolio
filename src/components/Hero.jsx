import React from "react";
import Profile from "../assets/Profile.jpg";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
import { track } from "framer-motion/client";
import { IoIosArrowRoundForward } from "react-icons/io";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-700 pb-6 lg:mb-35">
      {/* this line gives the border between the components */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl pb-10 pt-2 font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Kartikey Srivastava
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Java Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-2xl py-4 font-light tracking-wide lg:text-start sm:text-center"
            >
              Aspiring Full Stack Developer with experience in frontend
              development, backend APIs, and database management. Skilled in
              building dynamic user interfaces, implementing secure and scalable
              server-side logic, and integrating authentication and APIs.
              Experienced in version control, deployment, and cloud
              technologies. Passionate about crafting efficient solutions and
              continuously learning to stay ahead in the ever-evolving tech
              landscape.
            </motion.p>
            {/* --------------RESUME BUTTON--------------------- */}

            <div className="sm:mb-8">
              <motion.button
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mt-5 text-xl p-3 mb-8 lg:mb-0 w-[250px] h-[60px] rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-slate-500 flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/17oOXejkPXA-2W4ZU06wv2QmKeEZg9DRc/view?usp=drive_link",
                    "_blank"
                  )
                } // Opens the RESUME in a new tab.
                // onClick={() => window.open("/Kartikey_Srivastava_Resume.pdf", "_blank")}
              >
                See My Resume
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Profile}
              alt=""
              className="lg:max-w-[400px] max-w-[300px] h-auto rounded-lg ml-[25px] lg:pb-0 pb-4 sm:-ml-[1px] lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
