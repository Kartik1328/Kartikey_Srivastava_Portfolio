import React from "react";
import { motion } from "framer-motion";
import Pms2 from "../assets/PMS-2.png";
// import certificate from "../assets/CERTIFICATE.png";
import hackerank from "../assets/HackerRank.png";
import forage from "../assets/Forage.png";
import azure from "../assets/Azure Skynet.jpeg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Certification() {
  return (
    <div className="border-b border-neutral-700 pb-10 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Certificat<span className="text-neutral-500">ions</span>
      </motion.h1>{" "}
      <p className="my-4 text-xl text-center">
        I have obtained some industry-recognized certifications that signifies
        not only technical proficiency but also a commitment to continuous
        growth and learning.
      </p>
      {/* ---------------------CARD SECTION-------------------------- */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-10 mt-12"
      >
        {/* --------------CARD-1--------------- */}
        <div className="w-full h-full max-w-2xl lg:w-4/4 border-2 py-4 rounded-lg px-4 border-purple-300 text-neutral-400 space-y-7">
          <img
            src={forage}
            alt="Project 2"
            className="w-[60px] h-auto rounded-lg mt-4"
          />
          <h6 className="mb-2 font-semibold text-xl mt-3">
            Skyscanner Front-End Software Engineering Job Simulation
          </h6>
          <h2 className="mb-2 font-semibold text-lg">Forage Certifications</h2>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            February 2024 - Present
          </h3>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            Skills: React Development | Component-Based Architecture | State
            Management | API Integration | Responsive Design | Unit Testing |
            CRUD
          </h3>

          <div className="sm:mb-8">
            <button
              className="mt-8 text-lg w-[100px] text-white h-[32px] rounded-lg bg-purple-600 flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-600"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1vTugR16m4x96UkRIb-Yco1lwPXYkeVcZ/view?usp=drive_link",
                  "_blank"
                )
              }
            >
              View
            </button>
          </div>
        </div>

        {/* --------------CARD-2--------------- */}

        <div className="w-full h-full max-w-2xl lg:w-4/4 border-2 py-4 rounded-lg px-4 border-purple-300 text-neutral-400 space-y-7">
          <img
            src={hackerank}
            alt="Project 2"
            className="w-[60px] h-auto rounded-lg mt-4"
          />
          <h6 className="mb-2 font-semibold text-xl mt-3">
            HackeRank Certificate of SQL{" "}
          </h6>
          <h2 className="mb-2 font-semibold text-lg">HackeRank</h2>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            September 2022 - Present
          </h3>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            Skills: SQL | Queries | Case Statements | JOINS | Optimization
          </h3>

          <div className="sm:mb-8">
            <button
              className="mt-8 text-white text-lg w-[100px] h-[32px] rounded-lg bg-purple-600 flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-600"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Rz3Xy0N7Aw0R5AegAK7A39fijRXwDj6q/view?usp=sharing",
                  "_blank"
                )
              }
            >
              View
            </button>
          </div>
        </div>

        {/* --------------CARD-3--------------- */}

        <div className="w-full h-full max-w-2xl lg:w-4/4 border-2 py-4 rounded-lg px-4 border-purple-300 text-neutral-400 space-y-7">
          <img
            src={azure}
            alt="Project 2"
            className="w-[60px] h-auto rounded-lg mt-4"
          />
          <h6 className="mb-2 font-semibold text-xl mt-3">
            Trainee Web Developer Certification{" "}
          </h6>
          <h2 className="mb-2 font-semibold text-lg">Azure Skynet</h2>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            July 2022 - August 2022{" "}
          </h3>
          <h3 className="mb-2 font-light text-md text-neutral-400">
            Skills: HTML5 | CSS5 | JS | Wordpress | JSON | Browser DevTools
          </h3>

          <div className="sm:mb-8">
            <button
              className="mt-8 text-white text-lg w-[100px] h-[32px] rounded-lg bg-purple-600 flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-600"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1eb6cHhUGw1GCb9Lqbxc8g19B_1aE3bp1/view?usp=sharing",
                  "_blank"
                )
              }
            >
              View
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Certification;
