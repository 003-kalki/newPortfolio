import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Changed to 'Github' from 'GitHubIcon'

const Projects = () => {

  const allProjects = [
    {
      title: 'Tech Aggregator',
      description: 'An engaging web application for managing and exploring campgrounds, featuring interactive maps and user-generated reviews.',
      link: '',
      tech: ['React.js', 'Node.js','Puppeteer'],
      category: 'MERN'
    },
    {
      title: 'Internship Bot',
      description: 'A modern and visually appealing static landing page for hostel owner to showcase their property details effectively.',
      link: ' ',
      tech: ['Javascript', 'Puppeteer'],
      category: 'MERN'
    },
    {
        title: 'QuizChain',
        description: 'A modern and visually appealing static landing page for hostel owner to showcase their property details effectively.',
        link: ' ',
        tech: ['React.js', 'TailwindCss'],
        category: 'MERN'
      },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Projects
        </h2>

        {/* Smaller Toggle for Project Filtering */}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 to-blue-800/0 group-hover:from-grey-800/10 group-hover:to-blue-800/10 rounded-xl transition-all duration-300" />
              <div className="relative">
                <h3 className="text-2xl text-white font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-white text-sm bg-gray-700/50 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />  {/* Updated to 'Github' */}
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
