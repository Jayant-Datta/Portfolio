

const Experience = () => {
  // Pulled directly from your resume
  const roles = [
    {
      date: 'JAN 2026 — MAR 2026',
      context: 'CULTURAL FESTIVAL',
      title: 'LEAD, ABHIVYAKTI 26 STALLS TEAM',
      description: 'Exercised high ownership in managing financial transactions, vendor negotiations, and executing on-ground operations.'
    },
    {
      date: 'AUG 2025 — OCT 2025',
      context: 'TECHNICAL FESTIVAL',
      title: 'SENIOR COORDINATOR — TANTRAFIESTA 25',
      description: 'Mentored teams on agile problem-solving and technical business communication.'
    },
    {
      date: 'AUG 2024 — OCT 2024',
      context: 'TECHNICAL FESTIVAL',
      title: 'CORPORATE MEMBER — TANTRAFIESTA 24',
      description: 'Driven cross-functional collaboration to manage and scale sponsor relations.'
    }
  ];

  return (
    <section id="experience" className="bg-[#f7f7f5] p-8 md:p-16 lg:px-24 border-b border-gray-200 w-full">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500 mb-6 uppercase">
            <div className="w-8 h-[2px] bg-[#ff3b30]"></div>
            06 . SIGNAL
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            EXPERIENCE & <br />
            <span className="text-[#ff3b30]">EXTRACURRICULARS.</span>
          </h2>
        </div>
        
        <div className="text-gray-500 text-sm md:text-base max-w-sm text-left lg:text-right mt-2 lg:mt-0 font-medium leading-relaxed pb-2">
          Non-technical work that shapes how I ship — teams, timelines, trade-offs, and talking to actual humans.
        </div>
      </div>

      {/* Experience List - Contained in a white box */}
      <div className="bg-white border border-gray-200 w-full">
        
        {roles.map((role, idx) => (
          <div 
            key={idx} 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 p-8 md:p-10 hover:bg-gray-50 transition-colors duration-300 ${
              idx !== roles.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            
            {/* Left Column: Date & Context */}
            <div className="lg:col-span-3 flex flex-col font-mono text-[10px] tracking-widest mt-1">
              <span className="text-[#ff3b30] uppercase mb-1.5">{role.date}</span>
              <span className="text-gray-500 uppercase">{role.context}</span>
            </div>
            
            {/* Right Column: Title & Description */}
            <div className="lg:col-span-9">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black mb-3">
                {role.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                {role.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;