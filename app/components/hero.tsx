import React, { useState } from 'react';

const HeroPage: React.FC = () => {
  const [timeLeft] = useState({
    days: 42,
    hrs: 18,
    min: 4
  });

  // Color Palette Constants based on your image:
  const RED = "#c00000";
  const CREAM_BG = "#f2ede5";
  const DARK_TEXT = "#1d1c17";
  const OFF_WHITE = "#fef9f1";

  return (
    // Main Container using your Cream Background
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-6 md:p-12"
      style={{ backgroundColor: CREAM_BG }}
    >
      {/* Background Texture (Subtle Grid) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${DARK_TEXT} 1px, transparent 1px), linear-gradient(90deg, ${DARK_TEXT} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10">
        
        {/* Left Side: CRT Monitor Box */}
        <div 
          className="relative w-full lg:w-1/2 aspect-video bg-[#1d1c17] border-4 p-2 overflow-hidden group shadow-xl"
          style={{ borderColor: RED }}
        >
          {/* Decorative Corner Reticles */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: RED }}></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: RED }}></div>
          
          {/* Circuit Board Background Image */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-screen opacity-50 grayscale" 
          ></div>

          <div className="relative h-full flex flex-col justify-end p-6 bg-linear-to-t from-black/90 to-transparent">
            <div className="font-mono text-xs mb-2 animate-pulse tracking-widest" style={{ color: RED }}>
              STATUS: INITIALIZING...
            </div>
            <div className="font-sans text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              HACKATHON<br/>2026
            </div>
          </div>
        </div>

        {/* Right Side: Content & Countdown */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Top Label Badge */}
          <div 
            className="inline-block px-4 py-1.5 font-mono uppercase text-xs tracking-widest font-bold"
            style={{ backgroundColor: RED, color: OFF_WHITE }}
          >
            // PROTOCOL_OMEGA_ACTIVE
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight"
            style={{ color: DARK_TEXT }}
          >
            THE ARCHITECTS OF THE <span style={{ color: RED }}>UNDERGROUND</span>
          </h1>

          {/* Countdown Grid */}
          <div className="flex gap-6 items-end">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HRS', value: timeLeft.hrs },
              { label: 'MIN', value: timeLeft.min },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] font-bold tracking-tighter" style={{ color: RED }}>
                    {item.label}:
                  </span>
                  <span className="text-6xl font-black tabular-nums" style={{ color: DARK_TEXT }}>
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                {index < 2 && (
                  <span className="text-6xl font-black pb-1" style={{ color: RED }}>:</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Buttons with Hard Shadows */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              className="px-10 py-4 font-black uppercase text-sm tracking-widest transition-transform active:translate-y-1"
              style={{ 
                backgroundColor: RED, 
                color: OFF_WHITE,
                boxShadow: `6px 6px 0px ${DARK_TEXT}`
              }}
            >
              DEPLOY_CODE
            </button>
            
            <button 
              className="px-10 py-4 border-2 font-black uppercase text-sm tracking-widest transition-all hover:text-white"
              style={{ 
                borderColor: RED, 
                color: RED,
              }}
              onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = RED;
                e.currentTarget.style.color = CREAM_BG
              }}
              onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = RED

              }}
            >
              VIEW_MANIFESTO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;