import React from 'react'
import CardHover from '../ui/CardHover';
function Skills() {
  return (
    <div className='bg-customGrey sm:h-screen '>
        <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"> Skill Set </p>
      <div className="flex flex-col  justify-center items-center p-4 gap-4">
        <div className=" gap-4 md:flex ">
        <div className=" gap-4 md:flex ">
          <CardHover title="React.js" para="Dynamic, fast UI with component-based design." />
          <CardHover title="Node.js" para="Efficient backend for scalable web applications." />
        </div>
        <div  className="gap-4 md:flex">
          <CardHover title="Html" para="Structure, semantics, and optimized web layouts." />       
          <CardHover title="TailwindCss" para="Rapid, responsive styling for clean, modern design." />
        </div>
        </div>
        <div className="gap-4 md:flex">
        <div  className="gap-4 md:flex">
          <CardHover title="C++" para="High-performance programming with precision control." />
          <CardHover title="Webscraping" para="Automated data collection for actionable insights" />
        </div>
        <div className="gap-4 md:flex">
          <CardHover title="Solidity" para="Smart contracts on Ethereum for secure DApps." />
          <CardHover title="Hardhat" para="Advanced Ethereum development with testing and deployment." />
        </div>
        </div>
      </div>
    </div>

  )
}

export default Skills