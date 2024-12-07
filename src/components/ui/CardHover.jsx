// CardHover.jsx
import React from 'react';
 import { cn } from "../../lib/utils.js";// Utility for class names (optional)
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; // Adjust based on your routing setup
import { useState } from "react";

const CardHover = ({  title, para, link, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("relative w-full border rounded-3xl border-sky-500 max-w-xs", className)}>
      <Link to={link} className="block p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}>
         <AnimatePresence>
  {hoveredIndex === 0 && (
    <motion.span
      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.2] block rounded-3xl"
      layoutId="hoverBackground"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 0.2, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
    />
  )}
</AnimatePresence>

          <div className="p-4 bg-black dark:bg-gray-800 rounded-lg shadow-lg">
              
              <h3 className="text-lg text-zinc-100">{ title}</h3>
              <p className="text-zinc-100">{para}</p>
          </div>
      </Link>
    </div>
  );
};

export default CardHover;