import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className=" mb-8 flex items-center justify-between py-6">
        <h1 className="text-bold text-3xl flex flex-shrink-0 items-center">
          Ks
        </h1>
        {/* In the future i can add a logo here. */}
        <div className="icons m-8 flex items-center justify-center gap-5 text-2xl lg:text-3xl cursor-pointer">
          <FaLinkedin
            onClick={() =>
              window.open(
                " https://www.linkedin.com/in/kartikey-srivastava-21000b20b/",
                "_blank"
              )
            }
            className="hover:scale-110 transition-transform duration-300"
          />
          <FaGithub
            onClick={() =>
              window.open(
                "https://github.com/Kartik1328?tab=repositories",
                "_blank"
              )
            }
            className="hover:scale-110 transition-transform duration-300"
          />
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/kartikeyy_lala/", "_blank")
            }
            className="hover:scale-110 transition-transform duration-300"
          />
          <FaWhatsapp
            onClick={() =>
              window.open(
                "https://wa.me/8957990362?text=Hello%20Kartikey,%20I%20want%20to%20connect%20with%20you!",
                "_blank"
              )
            }
            className="hover:scale-110 transition-transform duration-300"
          />{" "}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
