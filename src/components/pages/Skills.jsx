import React from 'react';
import { FaServer, FaLaptopCode, FaCode, FaGitAlt } from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si"; //use this for blockchain
import { LuBrain } from "react-icons/lu"; //use this for problem solving
import { FcLinux } from "react-icons/fc"; // use this for linux
import { FaPuzzlePiece } from "react-icons/fa"; //use this for others
import CardHover from '../ui/CardHover';

function Skills() {
  return (
    <section id="skills" className='bg-customGrey sm:h-screen flex flex-col items-center justify-center'>
      <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-8">
        Skill Set
      </p>
      
      {/* Skill Set Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        <CardHover 
          title={<div className="flex items-center"><FaLaptopCode className="text-xl mr-2" />Frontend Development</div>} 
          subTits1="Html, JavaScript, CSS" 
          subTits2="React.Js ,Next.Js" 
        />
        <CardHover 
          title={<div className="flex items-center"><FaServer className="text-xl mr-2" />Backend Development</div>} 
          subTits1="Node.Js, SQL" 
          subTits2="MongoDB"
        />
        <CardHover 
          title={<div className="flex items-center"><SiHiveBlockchain className="text-xl mr-2" />Blockchain</div>} 
          subTits1="Solidity" 
          subTits2="Ether.js"
        />
        <CardHover 
          title={<div className="flex items-center"><FaCode className="text-xl mr-2" />Programming Language</div>} 
          subTits1="C++, JavaScript, Python"
        />
        <CardHover 
          title={<div className="flex items-center"><FcLinux className="text-xl mr-2" />Operating System</div>} 
          subTits1="Ubuntu, Kali Linux"
        />
        <CardHover 
          title={<div className="flex items-center"><LuBrain className="text-xl mr-2" />Problem Solving</div>} 
          subTits1="Data Structures"
          subTits2="Algorithms"
        />
        <CardHover 
          title={<div className="flex items-center"><FaGitAlt className="text-xl mr-2" />Version Control</div>} 
          subTits1="Git"
          subTits2="Github" 
        />
      </div>
    </section>
  );
}

export default Skills;
