import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'SPORTZ — REAL-TIME SPORTS',
      description: 'Engineered a real-time sports scoring system with low-latency backend API servers using WebSockets and Server-Sent Events (SSE) for synchronous data delivery.',
      tools: ['NODE.JS', 'POSTGRESQL', 'WEBSOCKETS', 'HTTPPIE'],
      liveLink: 'https://sportz-websockets.vercel.app/',
      repoLink: 'https://github.com/Jayant-Datta/Sportz-Websockets'
    },
    {
      id: '02',
      title: 'STACKCLOUD — STORAGE',
      description: 'Built a cloud storage platform using passwordless OTP. Designed Next.js Server Actions for file management and integrated a responsive Shadcn UI with global search.',
      tools: ['NEXT.JS', 'TYPESCRIPT', 'APPWRITE', 'SHADCN'],
      liveLink: 'https://stack-cloud-lake.vercel.app/auth',
      repoLink: 'https://github.com/Jayant-Datta/StackCloud'
    },
    {
      id: '03',
      title: 'CINEMATICA — MOBILE APP',
      description: 'Designed and deployed scalable RESTful API servers for a full-stack mobile application. Implemented secure user authentication flows and optimized endpoints.',
      tools: ['REACT NATIVE', 'APPWRITE', 'POSTMAN', 'REST'],
      liveLink: null,
      repoLink: 'https://github.com/Jayant-Datta/Cinematica'
    },
    {
      id: '04',
      title: 'NECTAR GROCERY APP',
      description: 'A modern, responsive grocery shopping application featuring a dynamic search interface, interactive cart, favorites management, and a complete onboarding flow.',
      tools: ['REACT', 'TAILWIND', 'FRONTEND', 'UI/UX'],
      liveLink: 'https://nector-grocery-app.vercel.app/',
      repoLink: 'https://github.com/Jayant-Datta/Nector-Grocery-App'
    },
    {
      id: '05',
      title: 'RESEARCH — MACHINE LEARNING & SYSTEMS', // Feel free to update this title to your exact paper title
      description: 'Published academic research focusing on modern computing paradigms. Explored architectural methodologies, system optimizations, and implemented data-driven solutions evaluated against industry-standard benchmarks.', // Swap this out with your actual abstract/summary!
      tools: ['RESEARCH', 'ACADEMIC', 'ANALYSIS', 'DATA'], // Update with tools used (e.g., PYTHON, LATEX, MATLAB)
      liveLink: 'https://drive.google.com/file/d/17vdYtz5lsf7uMiIurrZD4O5ji6GaK7z-/view?usp=sharing',
      repoLink: null, // Set to a string if you have a GitHub implementation repo for the paper, otherwise null
      isResearch: true // Flag to safely identify and customize the button text
    }
  ];

  return (
    <section id="projects" className="bg-[#f7f7f5] p-8 md:p-16 lg:px-24 border-b border-gray-200 w-full">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500 mb-6 uppercase">
            <div className="w-8 h-[2px] bg-[#ff3b30]"></div>
            05 . WORK
          </div>
          <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            SELECTED <br />
            <span className="text-[#ff3b30]">PROJECTS.</span>
          </h2>
        </div>
        
        <div className="font-mono text-[10px] text-gray-400 tracking-widest uppercase pb-2">
          {String(projects.length).padStart(2, '0')} SHIPPED - 2026
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 w-full bg-white">
        
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col border-r border-b border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center font-mono text-[9px] tracking-widest uppercase text-[#ff3b30] mb-6">
              <span>{project.isResearch ? 'ACADEMIC' : 'PROJECT'} / {project.id}</span>
              <span className="text-gray-500">{project.tools.length} TOOLS</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tools Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-[10px] tracking-widest uppercase text-gray-800 border border-gray-300 px-3 py-1.5 bg-white"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold tracking-widest mt-auto">
              {/* Link Button (Dynamic Text for Research vs Live Demos) */}
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 px-5 py-3 text-black uppercase transition-colors duration-200 hover:bg-[#ff3b30] hover:text-white hover:border-[#ff3b30] flex items-center gap-2 bg-white"
                >
                  {project.isResearch ? 'READ PAPER ↗' : 'LIVE DEMO ↗'}
                </a>
              )}
              
              {/* GitHub Repo Button */}
              {project.repoLink && (
                <a 
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 px-5 py-3 text-black uppercase transition-colors duration-200 hover:bg-black hover:text-white flex items-center gap-2 bg-white"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                  REPO
                </a>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;