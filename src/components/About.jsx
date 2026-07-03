

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
          THE <span className="text-[#ff3b30]">ENGINEER.</span>
        </h2>
      </div>

      {/* Right Column: Bio & Stats */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        
        {/* Main Bio */}
        <p className="text-xl md:text-2xl font-medium text-black leading-snug mb-8 max-w-2xl">
          I build performance-obsessed software at the intersection of clean systems design and thoughtful user experience. Currently deep into full-stack development, distributed systems, and shipping side projects that actually solve problems.
        </p>
        
        {/* Secondary Bio */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12 max-w-2xl">
          Away from the keyboard, I lead the Stalls Team for campus fests like TantraFiesta and Abhivyakti, shoot with my Sony Alpha 7 IV, and lose too many parliamentary debates on principle. I care about building things that don't embarrass me two years later.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200 w-full max-w-3xl">
          
          <div className="border-r border-b border-gray-200 p-6 flex flex-col gap-2 bg-[#f4f4f2] hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-black text-[#ff3b30]">3</span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Y.O.E</span>
          </div>
          
          <div className="border-r border-b border-gray-200 p-6 flex flex-col gap-2 bg-[#f4f4f2] hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-black text-[#ff3b30]">12</span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Projects</span>
          </div>
          
          <div className="border-r border-b border-gray-200 p-6 flex flex-col gap-2 bg-[#f4f4f2] hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-black text-[#ff3b30]">24</span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Contests</span>
          </div>
          
          <div className="border-r border-b border-gray-200 p-6 flex flex-col gap-2 bg-[#f4f4f2] hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-black text-[#ff3b30]">∞</span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Coffees/Day</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;