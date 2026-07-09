

// Helper component to render the 5-block fluency meter
const FluencyMeter = ({ level }) => {
  return (
    <div className="flex gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-[7px] w-[18px] transition-colors duration-300 ${
            i <= level
              ? 'bg-[#ff3b30]'
              : 'bg-transparent border border-gray-200'
          }`}
        ></div>
      ))}
    </div>
  );
};

const Stack = () => {
  const languages = [
    { name: 'TypeScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'C++', level: 3 },
    { name: 'Python', level: 3 },
    { name: 'SQL', level: 4 },
  ];

  const frameworks = [
    { name: 'React.js', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Next.js', level: 3 },
    { name: 'MongoDB', level: 4 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'Appwrite', level: 3 },
  ];

  const fundamentals = [
    { name: 'WebSockets', level: 4 },
    { name: 'Server-Sent Events', level: 4 },
    { name: 'Wireshark', level: 4 },
    { name: 'Penetration Testing', level: 2 },
    { name: 'REST APIs', level: 4 },
    { name: 'Computer Networks', level: 3 },
  ];

  return (
    <section id="stack" className="bg-[#f7f7f5] p-8 md:p-16 lg:px-24 border-b border-gray-200 w-full">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-[1] tracking-tighter">
            TECHNICAL <br />
            <span className="text-[#ff3b30]">ARSENAL.</span>
          </h2>
        </div>
        
        <div className="text-gray-500 text-sm md:text-base max-w-sm text-left md:text-left mt-2 md:mt-0 font-medium">
          The tools I reach for at 2AM when a build's on fire — grouped by fluency, not fashion.
        </div>
      </div>

      {/* 3-Column Grid Container */}
      <div className="w-full bg-[#fbfbfb] border border-gray-200 grid grid-cols-1 lg:grid-cols-3">
        
        {/* Column 1: Languages */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 p-6 md:p-8 hover:bg-white transition-colors duration-300">
          <div className="flex justify-between items-center font-mono text-[10px] tracking-widest uppercase mb-8">
            <span className="text-gray-500">/ 01 . LANGUAGES</span>
            <span className="text-[#ff3b30]">{languages.length} items</span>
          </div>
          <div className="flex flex-col gap-5">
            {languages.map((skill, idx) => (
              <div key={idx} className="flex justify-between items-center group">
                <span className="font-mono text-sm text-gray-800 group-hover:text-black transition-colors">
                  {skill.name}
                </span>
                <FluencyMeter level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Tools & Frameworks */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 p-6 md:p-8 hover:bg-white transition-colors duration-300">
          <div className="flex justify-between items-center font-mono text-[10px] tracking-widest uppercase mb-8">
            <span className="text-gray-500">/ 02 . TOOLS & FRAMEWORKS</span>
            <span className="text-[#ff3b30]">{frameworks.length} items</span>
          </div>
          <div className="flex flex-col gap-5">
            {frameworks.map((skill, idx) => (
              <div key={idx} className="flex justify-between items-center group">
                <span className="font-mono text-sm text-gray-800 group-hover:text-black transition-colors">
                  {skill.name}
                </span>
                <FluencyMeter level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Fundamentals */}
        <div className="flex flex-col p-6 md:p-8 hover:bg-white transition-colors duration-300">
          <div className="flex justify-between items-center font-mono text-[10px] tracking-widest uppercase mb-8">
            <span className="text-gray-500">/ 03 . SECURITY & SYSTEMS</span>
            <span className="text-[#ff3b30]">{fundamentals.length} items</span>
          </div>
          <div className="flex flex-col gap-5">
            {fundamentals.map((skill, idx) => (
              <div key={idx} className="flex justify-between items-center group">
                <span className="font-mono text-sm text-gray-800 group-hover:text-black transition-colors">
                  {skill.name}
                </span>
                <FluencyMeter level={skill.level} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stack;