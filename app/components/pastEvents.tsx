import React from 'react';

const PastEvents: React.FC = () => {
  // Color Palette Constants
  const RED = "#c00000";
  const DARK_TEXT = "#1d1c17";
  const CREAM_BG = "#f2ede5";
  const WHITE = "#ffffff";

  const stats = [
    { label: 'sign ups', value: '120' },
    { label: 'participants', value: '90' },
    { label: 'teams', value: '20' }
  ];

  return (
    <section className="py-20 px-6 max-w-10xl mx-auto font-sans" style={{ backgroundColor: CREAM_BG }}>
      
      {/* Header Section */}
      <div className="border-b-4 mb-12 pb-4 flex justify-between items-end" style={{ borderColor: DARK_TEXT }}>
        <h2 className="text-4xl font-black uppercase tracking-tighter" style={{ color: DARK_TEXT }}>
          PAST_EVENTS
        </h2>
        <span className="font-mono font-black text-xl" style={{ color: RED }}>[ 2025 ]</span>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* Top Section: Branding & Description */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            {/* Image with Brutalist Red Offset Shadow */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 -z-10" style={{ backgroundColor: RED }}></div>
            <img 
              src="PastYear.jpg"
              alt="Hackexperience 2025 Event"
              className="w-full aspect-video object-cover border-4"
              style={{ borderColor: DARK_TEXT }}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none" style={{ color: DARK_TEXT }}>
              HACK<span style={{ color: RED }}>EXPERIENCE</span>
            </h3>
            <p className="text-lg leading-relaxed font-medium" style={{ color: DARK_TEXT }}>
              In 2025, Hackexperience brought together 90+ participants to develop 20 distinct projects within a 24-hour sprint. The event focused on practical execution and collaborative prototyping among students and early-career developers. Our efforts in coordinating this technical exchange were recognized with SIM’s 2025 Outstanding Event Award (Silver)
            </p>
            <div className="inline-block px-4 py-1 font-mono text-sm font-bold border-2" style={{ borderColor: RED, color: RED }}>
              PROJECT_LOG_025
            </div>
          </div>
        </div>

        {/* Bottom Section: Horizontal Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="p-10 border-2 flex flex-col items-center justify-center transition-transform hover:translate-y-1"
              style={{ 
                backgroundColor: WHITE, 
                borderColor: DARK_TEXT,
                boxShadow: `4px 4px 0px ${DARK_TEXT}`
              }}
            >
              <span className="text-6xl font-black" style={{ color: RED }}>
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase font-bold tracking-[0.3em] mt-3" style={{ color: DARK_TEXT }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PastEvents;