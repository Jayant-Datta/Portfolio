import React from 'react';

const Contact = () => {
  const email = "jayantdatta74@gmail.com";
  
  const socialLinks = [
    {
      name: 'LINKEDIN',
      url: 'https://www.linkedin.com/in/jayant-datta-4057932b8',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GITHUB',
      url: 'https://github.com/Jayant-Datta',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    {
      name: 'LEETCODE',
      url: 'https://leetcode.com/u/CodingSamurai18/',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      name: 'EMAIL',
      url: `mailto:${email}`,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id='contact' className="bg-[#0a0a0a] text-white pt-24 pb-8 px-8 md:px-16 lg:px-24 w-full flex flex-col">
      
      {/* Tracker */}
      <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-gray-500 mb-8 uppercase">
        <div className="w-8 h-[2px] bg-[#ff3b30]"></div>
        08 . CONTACT
      </div>

      {/* Main Heading */}
      <h2 className="text-7xl md:text-[8rem] lg:text-[11rem] font-black uppercase leading-[0.85] tracking-tighter mb-12">
        LET'S <br />
        <span className="text-[#ff3b30]">CONNECT.</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-12">
        Recruiter, collaborator, or just curious — I reply to every message. The fastest path is email.
      </p>

      {/* Email Link */}
      <div>
        <a 
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 font-mono text-lg md:text-2xl text-white font-bold tracking-tight border-b-2 border-white pb-1 hover:text-[#ff3b30] hover:border-[#ff3b30] transition-colors duration-300"
        >
          {email}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-32 border-t border-gray-900">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-8 md:p-12 h-48 md:h-64 border-b md:border-b-0 border-r border-gray-900 last:border-r-0 hover:bg-[#ff3b30] transition-colors duration-300"
          >
            {/* Icon */}
            <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
              {link.icon}
            </div>

            {/* Label & Arrow */}
            <div className="flex justify-between items-end w-full uppercase font-mono text-[10px] md:text-xs font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
              <span>{link.name}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full mt-24 pt-8 border-t border-gray-900 font-mono text-[9px] tracking-widest text-gray-600 uppercase">
        <div>
          © 2026 JAYANT DATTA. ALL RIGHTS RESERVED.
        </div>
        <div>
          DESIGNED & BUILT BY HAND <span className="text-[#ff3b30]">· V1.0</span>
        </div>
      </div>

    </section>
  );
};

export default Contact;