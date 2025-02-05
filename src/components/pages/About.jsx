import React from 'react';
import img1 from "../../assets/image.jpg";

function About() {
  return (
    <section id="about" className="bg-black w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20">

      {/* Centered About Text */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        About
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full gap-12">
        
        {/* Left Side - Text */}
        <div className="md:w-2/3">
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Hello! I’m Shyam Sharma, a full-stack Web2 and Web3 developer.
            Skilled in React, Node.js, Solidity, and web scraping.
            From real-time tech news aggregators to decentralized storage platforms, 
            I enjoy solving complex problems to build impactful applications.
            Known for strong problem-solving abilities, effective time 
            management, and clear communication skills.
            I’m dedicated to delivering high-quality work—let’s
            connect and build something amazing together!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/3 flex justify-center">
          <img 
            src={img1} 
            alt="Profile" 
            className="w-64 h-64 object-cover rounded-xl shadow-lg" 
          />
        </div>

      </div>
    </section>
  );
}

export default About;
