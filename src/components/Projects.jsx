import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pms1 from "../assets/PMS-1.png";
import Pms2 from "../assets/PMS-2.png";
import Pms3 from "../assets/PMS-3.png";
import Pms4 from "../assets/PMS-4.png";
import Sf1 from "../assets/SF-1.png";
import Sf2 from "../assets/SF-2.png";
import Sf3 from "../assets/SF-3.png";
import Sf4 from "../assets/SF-4.png";
import Mcl1 from "../assets/MCL-1.png";
import Mcl2 from "../assets/MCL-2.png";
import Mcl3 from "../assets/MCL-3.png";
import Fig1 from "../assets/FIG-1.jpg";
import Fig2 from "../assets/FIG-2.jpg";
import Fig3 from "../assets/FIG-3.jpg";
import news1 from "../assets/NEWS-1.png";
import news2 from "../assets/NEWS-2.png";
import news3 from "../assets/NEWS-3.png";
import {
  TECHSTACK1,
  TECHSTACK2,
  TECHSTACK3,
  TECHSTACK4,
  TECHSTACK5,
} from "../constants";
import { motion } from "framer-motion";

function Projects() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="border-b border-neutral-700 pb-10 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Project<span className="text-neutral-500">s</span>
      </motion.h1>

      <div className=" mb-8 flex flex-wrap flex-col  justify-center gap-16 lg:gap-28">
        {TECHSTACK1.map((tech, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div
              className="CARAOUSEL-1 col-span-1 lg:col-span-2 md:w-[500px] lg:w-[400px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Kartik1328/Performance-Management-System-PMS-",
                  "_blank"
                )
              }
            >
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src={Pms1}
                    alt="Project 1"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Pms2}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Pms3}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Pms4}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </Slider>
            </div>

            <div className="col-span-1 lg:col-span-3 sm:mt-[225px]  md:mt-10 lg:mt-0 ">
              <p className=" mb-4 text-neutral-400 lg:-ml-4 -ml-0  mt-10 md:mt-0 lg:mt-0">
                Built and successfully deployed a
                <span className="font-semibold text-neutral-400 text-lg mx-2 ">
                  Performance Management System
                </span>
                (PMS) in the HRMS module, streamlining goal setting, feedback,
                evaluation, development, and appraisals to enhance employee
                performance. The system includes roles for both employees and
                managers, enabling efficient performance tracking and
                management.
              </p>

              {tech.techUsed.map((technology, index) => (
                <span
                  key={index}
                  className="mr-6 -ml-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* ----------------------------------------------------------------------------------------------------- */}
        {TECHSTACK2.map((tech, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div
              className="CARAOUSEL-1 col-span-1 lg:col-span-2 md:w-[500px] lg:w-[400px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://incomparable-pavlova-015ac8.netlify.app/",
                  "_blank"
                )
              }
            >
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src={Sf1}
                    alt="Project 1"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Sf2}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Sf3}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={Sf4}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </Slider>
            </div>

            <div className="col-span-1 lg:col-span-3 sm:mt-[225px]  md:mt-10 lg:mt-0 ">
              <p className=" mb-4 text-neutral-400 lg:-ml-4 -ml-0  mt-10 md:mt-0 lg:mt-0">
                Developed a{" "}
                <span className="font-semibold text-neutral-400 text-lg ml-2 ">
                  Survey Web Application{" "}
                </span>
                with a custom Form Builder using React, Spring Boot, and MySQL,
                enabling quick survey creation and increasing user engagement by
                40%. This application was selected to bid at NSSO under the
                Government of India.
              </p>

              {tech.techUsed.map((technology, index) => (
                <span
                  key={index}
                  className="mr-6 -ml-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* ------------------------------------------------------------------------------------------------------- */}

        {TECHSTACK3.map((tech, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div
              className="CARAOUSEL-1 col-span-1 lg:col-span-2 md:w-[500px] lg:w-[400px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Kartik1328/News-Application",
                  "_blank"
                )
              }
            >
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src={news1}
                    alt="Project 1"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={news2}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={news3}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </Slider>
            </div>

            <div className="col-span-1 lg:col-span-3 sm:mt-[225px]  md:mt-10 lg:mt-0 ">
              <p className=" mb-4 text-neutral-400 lg:-ml-4 -ml-0  mt-10 md:mt-0 lg:mt-0">
                Developed a{" "}
                <span className="font-semibold text-neutral-400 text-lg ml-2 ">
                  News Application{" "}
                </span>
                using React, Bootstrap, and an open-source News API to fetch
                real-time global news. It includes various categories, providing
                a seamless experience like other news apps.
              </p>

              {tech.techUsed.map((technology, index) => (
                <span
                  key={index}
                  className="mr-6 -ml-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* ---------------------------------------------------------------------------------------------- */}
        {TECHSTACK4.map((tech, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="CARAOUSEL-1 col-span-1 lg:col-span-2 md:w-[500px] lg:w-[400px] cursor-pointer">
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src={Mcl1}
                    alt="Project 1"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Mcl2}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Mcl3}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </Slider>
            </div>

            <div className="col-span-1 lg:col-span-3 sm:mt-[225px]  md:mt-10 lg:mt-0 ">
              <p className=" mb-4 text-neutral-400 lg:-ml-4 -ml-0  mt-10 md:mt-0 lg:mt-0">
                Created a basic{" "}
                <span className="font-semibold text-neutral-400 text-lg ml-2 ">
                  Mediclaim system{" "}
                </span>
                using HTML, CSS, and JS, where users can register for mediclaim.
                The system includes pages for Admin, Hospitals, and Approvers,
                with basic styling and dynamic interactions.
              </p>

              {tech.techUsed.map((technology, index) => (
                <span
                  key={index}
                  className="mr-6 -ml-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* ------------------------------------------------------------------------------------------------------- */}
        {TECHSTACK5.map((tech, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="CARAOUSEL-1 col-span-1 lg:col-span-2 md:w-[500px] lg:w-[400px] cursor-pointer">
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img
                    src={Fig1}
                    alt="Project 1"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Fig2}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={Fig3}
                    alt="Project 2"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </Slider>
            </div>

            <div className="col-span-1 lg:col-span-3 sm:mt-[225px]  md:mt-10 lg:mt-0 ">
              <p className=" mb-4 text-neutral-400 lg:-ml-4 -ml-0  mt-10 md:mt-0 lg:mt-0">
                Created a basic{" "}
                <span className="font-semibold text-neutral-400 text-lg ml-2 ">
                  Mediclaim system{" "}
                </span>
                Created UI screens following Figma principles, focusing on
                structured layouts, user flows, and intuitive design. Applied
                these designs to enhance web development and user experience.
              </p>

              {tech.techUsed.map((technology, index) => (
                <span
                  key={index}
                  className="mr-6 -ml-4 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* -------------------------------------------------------------------------------------------------------------------------------- */}
      </div>

      {/* Custom CSS for Slick Dots */}
      <style>
        {`
    .slick-dots {
      bottom:  !important; /* Adjust the position closer to the images */
    }

    .slick-dots li {
      margin: 0 3px !important; /* Reduce spacing between dots */
    }

    .slick-dots li button:before {
      color: transparent !important;
      font-size: 10px !important;
      background: linear-gradient(to right, #f9a8d4, #64748b, #a855f7);
      -webkit-background-clip: text;
      background-clip: text;
      text-fill-color: transparent;
      display: inline-block;
    }
  `}
      </style>
    </div>
  );
}

export default Projects;
