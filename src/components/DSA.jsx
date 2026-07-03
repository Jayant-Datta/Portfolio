

const DSA = () => {
  return (
    <section id="dsa" className="bg-[#0a0a0a] text-white p-8 md:p-16 lg:px-24 w-full border-b border-gray-900">
      
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        
        {/* Left Column: Typography & Info */}
        <div className="w-full lg:w-5/12 flex flex-col items-start">
          
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-400 mb-8 uppercase">
            <div className="w-8 h-[2px] bg-[#ff3b30]"></div>
            04 . Data Structures + Algorithms
          </div>
          
          <h2 className="text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            <span className="text-[#ff3b30]">207</span><br />
            SOLVED<span className="text-[#ff3b30]">.</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-md mb-10">
            Consistent daily grinder. Focused on graph traversal, dynamic programming, and algorithmic problem solving. Continuously building logic and optimizing runtime efficiency.
          </p>
          
          <a 
            href="https://leetcode.com/u/CodingSamurai18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white px-6 py-4 text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3"
          >
            VIEW LEETCODE PROFILE
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center mt-8 lg:mt-0 lg:pl-12">
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            
            {/* Easy */}
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-[#ff3b30] mb-2 tracking-tighter">45</span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Easy</span>
            </div>

            {/* Medium */}
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-[#ff3b30] mb-2 tracking-tighter">127</span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Medium</span>
            </div>

            {/* Hard */}
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-[#ff3b30] mb-2 tracking-tighter">35</span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Hard</span>
            </div>

            {/* Max Streak */}
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-[#ff3b30] mb-2 tracking-tighter">57 <span className="text-3xl md:text-4xl">D</span></span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Max Streak</span>
            </div>

            {/* Badges */}
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-[#ff3b30] mb-2 tracking-tighter">3</span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Badges Earned</span>
            </div>

          </div>

          <div className="mt-16 border-t border-gray-800 pt-6">
             <span className="font-mono text-[9px] tracking-widest text-gray-600 uppercase">
              // LIVE SNAPSHOT • UPDATED WEEKLY
            </span>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default DSA;