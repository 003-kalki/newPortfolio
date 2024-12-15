import React from 'react';
import img1 from "../../assets/image.jpg";
function About() {
  return (
    <div className="bg-black h-screen w-full p-8 ">
        <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 "> About </p>
    <div className='flex flex-col gap-6 md:flex-row '>
      
      <div className="flex  md:max- lg:max-w-3xl">
       <p className="text-lg  text-gray-700 dark:text-gray-200 font-medium mt-4"
       > 
       Hello! I’m Shyam Sharma, a full-stack Web2 and Web3 developer.
       Skilled in React, Node.js, Solidity, and web scraping.
       From real-time tech news aggregators to decentralized storage platforms, 
       I enjoy solving complex
       problems to build impactful applications.
       Known for strong problem-solving abilities, effective time 
        management, and clear communication skills.
       I’m dedicated to delivering high-quality work—let’s
        connect and build something amazing together!
       </p>
      </div>
      <div className="flex "
      >
             <img 
              src={img1} 
              alt="Profile" 
              className="w-64 h-64  object-cover rounded" 
    />
  </div>
    </div>
    </div>
  );
}

export default About;
