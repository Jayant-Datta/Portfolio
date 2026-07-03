import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#f7f7f5] p-8 md:p-16 lg:px-24 border-b border-gray-200 w-full flex flex-col md:flex-row gap-16 md:gap-8">
      
      {/* Left Column: Heading */}
      <div className="w-full md:w-2/5 pt-2">
        <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500 mb-8">
          <div className="w-8 h-px bg-[#ff3b30]"></div>
          01 . WHO
        </div>
        <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
          ABOUT <br />
          THE <span className="text-[#ff3b30]">DEVELOPER.</span>
        </h2>
      </div>

      {/* Right Column: Bio */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        
        {/* Main Bio */}
        <p className="text-xl md:text-2xl font-medium text-black leading-snug mb-8 max-w-2xl">
          I build performance-obsessed software at the intersection of clean systems design and thoughtful user experience. Currently deep into full-stack development, distributed systems, and shipping side projects that actually solve problems.
        </p>
        
        {/* Secondary Bio */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
          Away from the keyboard, I lead the Stalls Team for campus fests like TantraFiesta and Abhivyakti. I care about building things that don't embarrass me two years later.
        </p>

      </div>
    </section>
  );
};

export default About;