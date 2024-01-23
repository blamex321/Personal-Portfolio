import { saveAs } from "file-saver";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const downloadResume = () => {
    saveAs(process.env.REACT_APP_RESUME_LINK, "Laxman Bankupalle Resume.pdf");
  };

  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="h-auto">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 mb-4">
              Hello, I'm <br />{" "}
              <Typewriter
                words={[
                  "Laxman Bankupalle",
                  "a Cybersecurity Enthusiast",
                  "a Aspiring Code Wizard",
                ]}
                loop={0}
                delaySpeed={2000}
              />
            </h1>
          </div>
          <p class="text-lg font-semibold mb-10">
            Welcome to my portfolio! I'm Laxman, a dedicated Software Developer
            and Cybersecurity enthusiast, passionate about pushing the
            boundaries of innovation in web development. With a sharp eye for
            detail and expertise in the MERN Stack, I've cultivated a diverse
            skill set. My journey of continuous learning reflects my commitment
            to crafting impactful solutions, not only in web development but
            also in the dynamic world of cybersecurity. Join me on this visual
            journey through my projects, each telling a unique story of skill,
            passion, and dedication.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hire Me
            </button>
            <button
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              onClick={downloadResume}
            >
              My Resume
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-full bg-[#3351DB]"
            alt="hero"
            src={process.env.REACT_APP_PROFILE_PICTURE}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
