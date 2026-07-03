import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about');
  const [timeStr, setTimeStr] = useState('00:00');
  const [zoneStr, setZoneStr] = useState('IST');

  // Dynamic Clock Effect
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      
      // Format hours and minutes precisely (e.g., 18:06)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);

      // Parse the locale timezone string to extract the system's timezone code (e.g., "IST")
      try {
        const tzName = Intl.DateTimeFormat(undefined, { timeZoneName: 'short' })
          .formatToParts(now)
          .find(part => part.type === 'timeZoneName')?.value || 'IST';
        setZoneStr(tzName);
      } catch (e) {
        setZoneStr('IST');
      }
    };

    // Run immediately on render and poll every 10 seconds to stay precise
    updateClock();
    const timerId = setInterval(updateClock, 10000);

    return () => clearInterval(timerId);
  }, []);

  const navLinks = [
    { num: '01', label: 'ABOUT', id: 'about' },
    { num: '02', label: 'EDUCATION', id: 'education' },
    { num: '03', label: 'STACK', id: 'stack' },
    { num: '04', label: 'DSA', id: 'dsa' },
    { num: '05', label: 'PROJECTS', id: 'projects' },
    { num: '06', label: 'EXPERIENCE', id: 'experience' },
    { num: '08', label: 'CONTACT', id: 'contact' },
  ];

  const handleScroll = (id) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 left-0 flex items-center justify-between px-6 py-4 text-xs font-mono tracking-[0.15em] uppercase bg-[#f7f7f5] text-[#333] w-full z-50 border-b border-gray-200 shadow-sm">
      
      {/* Logo Block */}
      <div 
        className="flex items-center gap-4 font-semibold cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-3 h-3 bg-[#ff3b30]"></div>
        <div className="leading-[1.2] text-black">
          J.D /<br />PORTFOLIO
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-10">
        {navLinks.map((link) => (
          <div 
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="cursor-pointer group relative pb-2"
          >
            <div className="flex gap-2">
              <span className="text-[#ff3b30]">{link.num}</span>
              <span className="text-gray-600 group-hover:text-black font-semibold tracking-[0.2em] transition-colors duration-200">
                {link.label}
              </span>
            </div>
            
            {/* Animated Underline */}
            <span 
              className={`absolute bottom-0 left-0 h-[2px] bg-[#ff3b30] transition-all duration-300 ease-out ${
                activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </div>
        ))}
      </div>
      
      {/* Right Side Actions */}
      <div className="flex items-center gap-5">
          {/* Dynamic Real-Time Clock Display */}
          <div className="hidden md:block text-[10px] leading-[1.3] text-gray-500 text-right tracking-widest font-semibold">
            {timeStr}<br />{zoneStr}
          </div>
          
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-base text-gray-600 hover:bg-gray-200 hover:text-black transition-colors">
            ☾
          </button>
          
          <button 
            onClick={() => handleScroll('contact')}
            className="border border-black px-4 py-1.5 text-[10px] leading-[1.3] font-bold text-black hover:bg-black hover:text-white transition-colors text-left tracking-[0.2em]"
          >
            HIRE<br />ME ↗
          </button>
      </div>
    </nav>
  );
};

export default Navbar;