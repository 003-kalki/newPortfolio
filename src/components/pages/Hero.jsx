
import React, { useState } from 'react';
import { HoverBorderGradient } from '../ui/HoverBorderGradient'
function Hero() {
    const [BtnText, setBtnText] = useState("Copy Email");
    const [resumeBtn,setResumeBtn] =useState("Resume")
    const handleCopyEmail = () => {
      navigator.clipboard.writeText("shyam93721@gmail.com");
      setBtnText("Copied!");
      setTimeout(() => setBtnText("Copy Email"), 15000);
    };
    const handleResume = () => {
          window.location.href="https://drive.google.com/file/d/1TS2Jas1q1f8a9zm6y-cEBGWS2NqolSw8/view?usp=drive_link";
    };
  return (
    <div
      className="min-h-screen w-full bg-black bg-dot-pattern bg-dots-spacing flex flex-col items-center justify-center text-center px-4 "
    >
      {/* Hero section */}
      <div className=" w-full relative flex items-center justify-center">
        
      
        
        <div className="flex flex-col  md:flex-row items-center justify-center my-2 gap-8 md:gap-40">
          
          <div className="flex flex-col text-center items-center  space-y-4">
            <div className="text-5xl  sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Hello, My Name is <br/> Shyam Sharma
            </div>
            <div className="text-white  md:text-xl">
              From classic web to blockchain-powered tech,<br/> I bring ideas to life online.
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 gap-1">
           
            <div className="text-white">
              <HoverBorderGradient
                onClick={handleCopyEmail}
                containerClassName="my-custom-container-class"
                className="my-custom-content-class"
                duration={0.5}
                clockwise={true}
              >
                {BtnText}
              </HoverBorderGradient>
            </div>
            
            <div className="text-white">
              <HoverBorderGradient
                onClick={handleResume}
                containerClassName="my-custom-container-class"
                className="my-custom-content-class"
                duration={0.5}
                clockwise={true}
              >
                {resumeBtn}
              </HoverBorderGradient>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;