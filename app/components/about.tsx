import React from 'react';
import { IBM_Plex_Mono, Montserrat } from "next/font/google";

const About: React.FC = () => {
  // Color Palette Constants
  const RED = "#c00000";
  const DARK_BG = "#1d1c17"; // The near-black color
  const CREAM_CARD = "#e7e2da"; // The light greyish-cream card
  const WHITE = "#ffffff";
  const TEXT_DIM = "rgba(255, 255, 255, 0.7)";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans" style={{ fontFamily: 'Montserrat'}}>
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
            HACKATHON_OVERVIEW
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-80 font-medium">
            HackXperience 2026 is a 24-hour hackathon where teams of 4–5 turn problem statements into working prototypes. From kickoff to final commit, you'll ideate, build, and ship — then present to industry judges. Last year's run produced 20 projects from 90+ builders and took home SIM's Outstanding Event Award (Silver). This time, we're scaling up.
          </p>

          <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
            <div>
              <h4 className="font-mono font-bold mb-3 uppercase tracking-widest text-sm" style={{ color: RED }}>
                // WHO SHOULD JOIN
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_DIM }}>
                Web devs, AI engineers, designers, product thinkers, business analysts — anyone who builds. Year 1 to Year 3. No minimum skill level, just the drive to ship something real in 24 hours.
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-3 uppercase tracking-widest text-sm" style={{ color: RED }}>
                // WHAT YOU GET
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: TEXT_DIM }}>
                Pre-event workshops in React & Next.js to get you hackathon-ready. On-site mentorship from industry professionals. A stage to demo your build. And prizes worth fighting for.
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
