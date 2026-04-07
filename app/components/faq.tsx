"use client";

import { useState } from "react";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
});

const FAQ_ITEMS = [
  {
    question: "AM I ELIGIBLE TO PARTICIPATE?",
    answer:
      "Details about eligibility will be announced soon. Stay tuned for updates.",
  },
  {
    question: "DO I NEED A TEAM?",
    answer:
      "Team requirements will be shared closer to the event. You may participate solo or form a team.",
  },
  {
    question: "WHAT SHOULD I BRING?",
    answer:
      "A list of recommended items will be provided before the event. At minimum, bring your laptop and charger.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={`${ibmPlexMono.className} w-full bg-[#f2ede5] py-16 sm:py-24 px-6 sm:px-10`}>
      <div className="mx-auto max-w-4xl">
        <h2 className={`${montserrat.className} text-[28px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight text-[#1d1c17] mb-10 sm:mb-14`}>
          FAQ_QUERY_MODULE
        </h2>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-[#d5d0c8] rounded-sm"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left"
              >
                <span className="text-[14px] sm:text-[16px] font-semibold tracking-[0.06em] text-[#1d1c17]">
                  &gt; {item.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-[#1d1c17] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-[13px] sm:text-[14px] leading-[1.7] text-[#1d1c17]/70 tracking-[0.02em]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
