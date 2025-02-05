import React from 'react';
import { FaInstagram, FaGithub, FaPhone, FaEnvelope, FaReddit } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function Contact() {
  return (
    <div className="bg-customGrey h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-8">
      {/* Left Section */}
      <p className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Let's Connect
      </p>

      <div className="flex flex-col items-center md:items-start text-white">
        <div className="flex items-center gap-4 mt-4">
          <FaPhone className="text-xl" />
          <span className="text-lg">+91 9372187731</span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <FaEnvelope className="text-xl" />
          <span className="text-lg">shyam93721@gmail.com</span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <FaLocationDot className="text-xl" />
          <span className="text-lg">Pune, Maharashtra, India</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
  <a
    href="https://linkedin.com"
    className="p-4 bg-neutral-800 border border-transparent rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
  >
    <AiOutlineLinkedin className="text-2xl text-white" />
  </a>

  <a
    href="https://github.com"
    className="p-4 bg-neutral-800 border border-transparent rounded-lg flex items-center justify-center hover:border-gray-500 hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
  >
    <FaGithub className="text-2xl text-white" />
  </a>

  <a
    href="https://twitter.com"
    className="p-4 bg-neutral-800 border border-transparent rounded-lg flex items-center justify-center hover:border-blue-400 hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
  >
    <RiTwitterXFill className="text-2xl text-white" />
  </a>

  <a
    href="https://instagram.com"
    className="p-4 bg-neutral-800 border border-transparent rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
  >
    <FaInstagram className="text-2xl text-white" />
  </a>

  <a
    href="https://reddit.com"
    className="p-4 bg-neutral-800 border border-transparent rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-neutral-700 hover:scale-110 transition-all duration-300"
  >
    <FaReddit className="text-2xl text-white" />
  </a>
</div>

    </div>
  );
}
