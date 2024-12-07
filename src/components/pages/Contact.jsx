import React from 'react'
import { FloatingDock } from '../ui/FloatingDock';
import { FaInstagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; // Import from Remix Icons
import { AiOutlineLinkedin } from 'react-icons/ai';
export default function Contact() {
    
const dockItems = [
    { title: 'Instagram', icon: <FaInstagram/>, href: 'https://www.instagram.com/shyam.eth/' },
    { title: 'X', icon: <RiTwitterXFill/>, href: '/about' },
    { title: 'Linkedin', icon: <AiOutlineLinkedin/>, href: '/contact' },
  ];
  return (
    <div className="bg-black h-screen w-full">
<p className="  text-4xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Let's Connect </p>
      {/* FloatingDock with items prop */}
     <div className="py-4">
      <FloatingDock items={dockItems} />
      </div>
    </div>

    
  )
}
