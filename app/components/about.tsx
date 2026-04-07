import React from 'react';

const About: React.FC = () => {
  // Color Palette Constants
  const RED = "#c00000";
  const DARK_BG = "#1d1c17"; // The near-black color
  const CREAM_CARD = "#e7e2da"; // The light greyish-cream card
  const WHITE = "#ffffff";
  const TEXT_DIM = "rgba(255, 255, 255, 0.7)";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Large Card (Dark) */}
        <div 
          className="lg:col-span-2 p-10 md:p-14 relative"
          style={{ 
            backgroundColor: DARK_BG,
            color: WHITE,
            boxShadow: `12px 12px 0px 0px ${RED}` 
          }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            ACCELERATE YOUR GROWTH
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-80 font-medium">
            Hackexperience 2026 is a 24-hour build sprint is a dedicated space where ideas turn into real products. Participants will focus on rapid prototyping and technical execution within a high-intensity environment. It is a practical opportunity to build alongside other developers
          </p>

          <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
            <div>
              <h4 className="font-mono font-bold mb-3 uppercase tracking-widest text-sm" style={{ color: RED }}>
                // WHO SHOULD JOIN
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_DIM }}>
                From first-year students to seasoned developers, designers, and 
                problem solvers. Diversity drives innovation.
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-3 uppercase tracking-widest text-sm" style={{ color: RED }}>
                // WHAT YOU GET
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_DIM }}>
                Access to industry mentors, exclusive workshops, networking 
                with tech recruiters.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Column (Stats Cards) */}
        <div className="flex flex-col gap-8">
          
          {/* 24H Card */}
          <div 
            className="border-2 p-8 flex-1 flex flex-col justify-center"
            style={{ 
              backgroundColor: CREAM_CARD, 
              borderColor: DARK_BG 
            }}
          >
            <span className="text-6xl font-black" style={{ color: RED }}>
              24H
            </span>
            <span className="font-mono text-xs uppercase font-bold tracking-[0.2em] mt-3" style={{ color: DARK_BG }}>
              Continuous Innovation
            </span>
          </div>

          {/* 500+ Card */}
          <div 
            className="p-8 flex-1 flex flex-col justify-center"
            style={{ backgroundColor: RED, color: WHITE }}
          >
            <span className="text-6xl font-black">
              500+
            </span>
            <span className="font-mono text-xs uppercase font-bold tracking-[0.2em] mt-3 opacity-70">
              Active Participants
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;