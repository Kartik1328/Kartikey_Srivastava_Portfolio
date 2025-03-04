import React from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";

function GetInTouch() {
  return (
    <div className="mb-8">
      <h1 className="my-20 text-5xl text-center font-semibold">
        Get in <span className="text-neutral-500">Touch!</span>
      </h1>
      <div className="text-center -mt-8">
        <p className="my-4 text-xl">
          Excited to collaborate and bring fresh ideas to life! Explore my
          portfolio to see how I can contribute to your team. <br /> Let’s
          create something impactful together. 🚀✨{" "}
        </p>
        <p className="my-4 text-xl bg-gradient-to-r from-pink-600 via-slate-400 to-purple-600 bg-clip-text  tracking-tight text-transparent">
          Front End Developer | Java Full Stack Developer
        </p>

        <div className="flex justify-center items-center text-purple-400">
          <a
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            href="https://mail.google.com/mail/u/0/?fs=1&to=kumarkartikeysrivastava83@gmail.com&body=Hello+Kartikey,&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold  pt-1"
          >
            Email Me
          </a>
          <IoMdMail className="text-4xl ml-4 cursor-pointer" />
        </div>

        <p className="my-4 text-xl">
          Open for opportunities: Yes! <span className="text-2xl">🌟</span>
        </p>
        <p className="my-4">© 2025 Kartikey Srivastava. All rights reserved.</p>
      </div>
    </div>
  );
}

export default GetInTouch;
