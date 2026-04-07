"use client";

import { useState } from "react";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

interface Member {
  role: string;
  name: string;
  img: string | null;
}

const TEAMS: Record<string, { label: string; members: Member[] }> = {
  exco: {
    label: "EXCO TEAM",
    members: [
      { role: "PRESIDENT", name: "JAYADIPA FUKUTARO", img: null },
      { role: "VICE PRESIDENT", name: "MICHELLE CHAN", img: null },
      { role: "SECRETARY", name: "REYNALDI ARDIANTO WIYOGO", img: null },
      { role: "TECHNICAL DIRECTOR", name: "YAN MEI WONG", img: null },
      { role: "TECHNICAL DIRECTOR", name: "DESMOND", img: null },
      { role: "MARKETING DIRECTOR", name: "VANNESS YANG", img: null },
      { role: "PARTNERSHIPS DIRECTOR", name: "WINSTON FAUSTIN", img: null },
    ],
  },
  tech: {
    label: "DEV TEAM",
    members: [
      { role: "TECH LEAD", name: "MEMBER NAME", img: null },
      { role: "FRONTEND DEV", name: "MEMBER NAME", img: null },
      { role: "BACKEND DEV", name: "MEMBER NAME", img: null },
      { role: "FULLSTACK DEV", name: "MEMBER NAME", img: null },
      { role: "UI ENGINEER", name: "MEMBER NAME", img: null },
      { role: "DEVOPS", name: "MEMBER NAME", img: null },
    ],
  },
  marketing: {
    label: "MARKETING TEAM",
    members: [
      { role: "MARKETING LEAD", name: "MEMBER NAME", img: null },
      { role: "CONTENT WRITER", name: "MEMBER NAME", img: null },
      { role: "GRAPHIC DESIGNER", name: "MEMBER NAME", img: null },
      { role: "SOCIAL MEDIA", name: "MEMBER NAME", img: null },
      { role: "VIDEOGRAPHER", name: "MEMBER NAME", img: null },
      { role: "PHOTOGRAPHER", name: "MEMBER NAME", img: null },
    ],
  },
  pni: {
    label: "EVENTS & PARTNERSHIPS",
    members: [
      { role: "EVENTS LEAD", name: "MEMBER NAME", img: null },
      { role: "PARTNERSHIPS", name: "MEMBER NAME", img: null },
      { role: "LOGISTICS", name: "MEMBER NAME", img: null },
      { role: "OUTREACH", name: "MEMBER NAME", img: null },
      { role: "COORDINATOR", name: "MEMBER NAME", img: null },
      { role: "LIAISON", name: "MEMBER NAME", img: null },
    ],
  },
};

const TAB_KEYS = ["exco", "tech", "marketing", "pni"] as const;

export default function Committee() {
  const [activeTab, setActiveTab] = useState<string>("exco");
  const team = TEAMS[activeTab];

  return (
    <section
      className={`${ibmPlexMono.className} w-full bg-[#f2ede5] px-6 sm:px-10 md:px-14 py-16 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Divider from FAQ */}
        <div className="w-full h-px bg-[#c5bfb5] mb-16 sm:mb-24" />

        {/* Header with line */}
        <div className="flex items-center gap-6 mb-10 sm:mb-14">
          <h2
            className={`${montserrat.className} text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#1d1c17] uppercase whitespace-nowrap`}
          >
            ORGANIZING COMMITTEE
          </h2>
          <div className="flex-1 h-px bg-[#c5bfb5]" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-bold tracking-[0.10em] uppercase cursor-pointer border transition-all duration-200 ${
                activeTab === key
                  ? "bg-[#1d1c17] text-white border-[#1d1c17]"
                  : "bg-transparent text-[#1d1c17] border-[#c5bfb5] hover:border-[#1d1c17]"
              }`}
            >
              {TEAMS[key].label}
            </button>
          ))}
        </div>

        {/* Member grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6">
          {team.members.map((member, i) => (
            <div key={`${activeTab}-${i}`}>
              {/* Image placeholder */}
              <div className="w-full aspect-[3/4] bg-[#ddd8cf] border border-[#ccc7bd] flex items-center justify-center">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              {/* Role */}
              <div className="mt-3 text-[10px] sm:text-[11px] font-bold tracking-[0.10em] text-[#c00000] uppercase">
                {member.role}
              </div>
              {/* Name */}
              <div
                className={`${montserrat.className} mt-1 text-[14px] sm:text-[16px] font-extrabold tracking-tight text-[#1d1c17] uppercase`}
              >
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
