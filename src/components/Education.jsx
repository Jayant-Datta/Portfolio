
const Education = () => {
  return (
    <section id="education" className="bg-[#f7f7f5] p-8 md:p-16 lg:px-24 border-b border-gray-200 w-full">
      
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
        <div>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500 mb-6 uppercase">
            <div className="w-8 h-[2px] bg-[#ff3b30]"></div>
            02 . Education
          </div>
          <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            Academic <br />
            <span className="text-[#ff3b30]">Trajectory.</span>
          </h2>
        </div>
        
        <div className="font-mono text-[10px] text-gray-400 tracking-widest uppercase pb-2">
          // Reverse Chronological
        </div>
      </div>

      {/* List Section - Now contained in a single bordered white box */}
      <div className="bg-white border border-gray-200 w-full">
        
        {/* Row 1: University */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-gray-200 py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
          
          <div className="lg:col-span-3 flex flex-col font-mono text-[10px] tracking-widest mt-1">
            <span className="text-[#ff3b30] uppercase mb-1">University</span>
            <span className="text-gray-500">2023 — 2027</span>
          </div>
          
          <div className="lg:col-span-6">
            <h3 className="text-lg font-black uppercase flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Indian Institute of Information Technology, Nagpur
            </h3>
            <p className="text-gray-500 mt-1.5 text-sm font-medium">B.Tech, Computer Science & Engineering</p>
          </div>
          
          <div className="lg:col-span-3 font-mono text-[13px] text-black lg:text-right flex items-start lg:justify-end mt-2 lg:mt-1 tracking-widest uppercase">
            CGPA 8.67 / 10
          </div>
        </div>

        {/* Row 2: 12th Grade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-gray-200 py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
          
          <div className="lg:col-span-3 flex flex-col font-mono text-[10px] tracking-widest mt-1">
            <span className="text-[#ff3b30] uppercase mb-1">Sr. Secondary</span>
            <span className="text-gray-500">2020 — 2022</span>
          </div>
          
          <div className="lg:col-span-6">
            <h3 className="text-lg font-black uppercase flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Platinum Jubilee High School & Jr College
            </h3>
            <p className="text-gray-500 mt-1.5 text-sm font-medium">Higher Secondary (12th Grade)</p>
          </div>
          
          <div className="lg:col-span-3 font-mono text-[13px] text-black lg:text-right flex items-start lg:justify-end mt-2 lg:mt-1 tracking-widest uppercase">
            Grade XII — 91.00%
          </div>
        </div>

        {/* Row 3: 10th Grade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
          
          <div className="lg:col-span-3 flex flex-col font-mono text-[10px] tracking-widest mt-1">
            <span className="text-[#ff3b30] uppercase mb-1">Secondary</span>
            <span className="text-gray-500">2019 — 2020</span>
          </div>
          
          <div className="lg:col-span-6">
            <h3 className="text-lg font-black uppercase flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Carmel Academy
            </h3>
            <p className="text-gray-500 mt-1.5 text-sm font-medium">Secondary School Certificate (10th Grade)</p>
          </div>
          
          <div className="lg:col-span-3 font-mono text-[13px] text-black lg:text-right flex items-start lg:justify-end mt-2 lg:mt-1 tracking-widest uppercase">
            Grade X — 91.00%
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;