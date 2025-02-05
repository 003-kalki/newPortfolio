import React from 'react'
import CompDev from "../ui/CompDev";
import { FaInstagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
function Work() {
  
const cardData = [
  {
    title: 'TechNews',
    description: 'zai zzzai zai zai zai zai zai ',
    buttons: ['React.js', 'Node.js', 'TailwindCSS', 'Puppeteer'],
    links: [
      { label: 'GitHub', icon: FaGithub },
      { label: 'Live Demo', icon: FaExternalLinkAlt }
    ]
  },
  {
    title: 'Internship Bot',
    description: 'zai zzzai zai zai zai zai zai ',
    buttons: ['javascript', 'Puppeteer'],
    links: [
      { label: 'GitHub', icon: FaGithub },
      { label: 'Live Demo', icon: FaExternalLinkAlt }
    ]
  },
  {
    title: 'CASE',
    description: 'zai zzzai zai zai zai zai zai ',
    buttons: ['React.js', 'TailwindCss'],
    links: [
      { label: 'GitHub', icon: FaGithub },
      { label: 'Live Demo', icon: FaExternalLinkAlt }
    ]
  },
  {
    title: 'Gpt4',
    description: 'zai zzzai zai zai zai zai zai ',
    buttons: ['React.js',  'TailwindCSS'],
    links: [
      { label: 'GitHub', icon: FaGithub },
      { label: 'Live Demo', icon: FaExternalLinkAlt }
    ]
  },
];

  return (
    <div>
    <p className=" mb-10 text-4xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">My Noteworthy Projects </p>
      

    <div className="md:grid md:gap-6 grid-rows-2 grid-flow-col gap-6">
      {cardData.map((card, index) => (
        <CompDev
          key={index}
          title={card.title}
          description={card.description}
          buttons={card.buttons}
          links={card.links}
        />
      ))}
    </div>
    </div>
  )
}

export default Work
