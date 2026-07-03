import React from 'react';

const Hero = () => {
  // Smooth scroll handler targeting the projects section with an offset
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80; // Prevents the sticky navbar from hiding the title
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header id="about" className="relative w-full overflow-hidden bg-[#fbfbfb] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] min-h-[85vh] flex flex-col justify-center p-8 md:p-16 lg:px-24 border-b border-gray-200">
      
      {/* Content Layout - Centered with max-w-7xl to own the space */}
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col justify-center h-full">
        
        <div className="text-xs font-mono tracking-widest flex items-center gap-3 mb-10 text-gray-500 font-bold uppercase mt-12 md:mt-0">
          <span className="w-2.5 h-2.5 bg-[#ff3b30] rounded-full shadow-[0_0_8px_rgba(255,59,48,0.6)]"></span>
          Available for Summer '26 Internships
        </div>
        
        {/* Scaled up typography to fill the void */}
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black uppercase leading-[0.85] tracking-tighter">
          Hi, I'm <br />
          <span className="text-[#ff3b30]">Jayant</span> <br />
          <span className="text-[#ff3b30]">Datta<span className="text-black">.</span></span>
        </h1>
        
        <p className="mt-10 max-w-3xl text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
          Computer Science Engineering Student / Aspiring Developer. I turn caffeine and curiosity into shipped software — from markerless AR mobile apps to real-time sports platforms.
        </p>

        {/* Action Buttons, Stats & Location Grid - Spanning full width to balance the page */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full font-mono text-[10px] font-bold tracking-widest uppercase">
          
          {/* Left Side: Functional Brutalist Hover Button */}
          <button 
            onClick={scrollToProjects}
            className="bg-black text-white px-8 py-4 flex items-center gap-2 transition-all duration-200 hover:bg-[#ff3b30] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 border border-transparent hover:border-black cursor-pointer text-xs"
          >
            VIEW MY WORK ↓
          </button>
          
          {/* Right Side: Stats & Location anchored to the right */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full lg:w-auto">
            
            {/* Inline Stats Block */}
            <div className="flex gap-6 border border-gray-200 bg-white px-6 py-4 shadow-sm w-full md:w-auto justify-between">
              <div>
                <span className="text-[#ff3b30] font-bold text-xs">Y-03</span> <span className="text-gray-400">YEAR</span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <span className="text-[#ff3b30] font-bold text-xs">8.67</span> <span className="text-gray-400">CGPA</span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <span className="text-[#ff3b30] font-bold text-xs">200+</span> <span className="text-gray-400">LC</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              NAGPUR, IN
            </div>
            
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;