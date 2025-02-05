import React, { useState } from 'react';
import { cn } from "../../lib/utils.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardHover = ({ title, subTits1, subTits2, subTits3, link, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("relative border rounded-3xl border-sky-500 w-84 h-40 min-w-[16rem]", className)}>
      <Link 
        to={link} 
        className="block p-4 h-full w-full"
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
       <AnimatePresence>
  {hoveredIndex === 0 && (
    <motion.span
      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-100/[0.5] block rounded-3xl"
      layoutId="hoverBackground"
      initial={{ opacity: 0.5 }}  
      animate={{ opacity: 0.5, transition: { duration: 0.15 } }}  
      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
    />
  )}
</AnimatePresence>


        {/* Content */}
        <div className="p-4 bg-black dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center h-full overflow-hidden">
          <h1 className="text-lg text-zinc-100 text-center font-bold">{title}</h1>
          <h2 className="text-sm text-zinc-100 text-center">{subTits1}</h2>
          <h3 className="text-sm text-zinc-100 text-center">{subTits2}</h3>
          <h4 className="text-sm text-zinc-100 text-center">{subTits3}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CardHover;
