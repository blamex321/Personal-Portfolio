import React from "react";
import github from "../assets/github-mark.png";
const Footer = () => {
  return (
    <footer className="text-gray-400body-font">
      <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Laxman Bankupalle —
          <a
            href="https://www.instagram.com/bankulaxman/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bankulaxman
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.instagram.com/bankulaxman/"
            className="ml-3 text-gray-400"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/laxman-bankupalle/" className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a href="https://github.com/blamex321" className="ml-3 text-gray-400">
            <img className="w-5 h-5" src={github} alt="github logo"></img>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
