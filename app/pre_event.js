const PRE_EVENTS = [
  {
    date: '15 APR 2026',
    title: 'PROJECT SHOWCASE',
    meta: '12:00 PM - 04:00 PM // STUDENT HUB, SIM BLOK B LEVEL 1',
    button: 'SET_REMINDER',
  },
  {
    date: '23, 30 APR',
    title: 'REACT AND NEXT.JS WORKSHOP',
    meta: '07:00 PM - 10:00 PM // SIM CAMPUS',
    button: 'RSVP_ACCESS_TOKEN',
  },
]

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-5 mb-3">
        <div className="flex-1 h-px bg-red-700" />
        <span className="text-xl font-bold tracking-widest text-white whitespace-nowrap font-mono">{title}</span>
        <div className="flex-1 h-px bg-red-700" />
      </div>
      {subtitle && (
        <p className="text-center text-xs tracking-widest text-gray-400 font-mono mt-2">{subtitle}</p>
      )}
    </div>
  )
}

function Label({ children }) {
  return <div className="text-red-500 text-xs tracking-widest font-mono mb-1.5">{children}</div>
}

function Meta({ children }) {
  return <div className="text-gray-400 text-xs tracking-widest font-mono">{children}</div>
}

function ActionButton({ href, children }) {
  const cls = "cursor-pointer border border-gray-500 text-gray-300 text-xs tracking-widest font-mono px-5 py-2 hover:border-white hover:text-white transition-all duration-200 inline-block"
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}

function PreEventItem({ date, title, meta, button, isLast }) {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center w-4 flex-shrink-0">
        <div
          className="w-3.5 flex-shrink-0 bg-red-700"
          style={{ height: 18, clipPath: 'polygon(50% 0%, 100% 35%, 100% 100%, 0% 100%, 0% 35%)' }}
        />
        {!isLast && <div className="w-0.5 bg-red-700 flex-1 min-h-16" />}
      </div>
      <div className="flex-1 pb-8 pt-0.5">
        <Label>{date}</Label>
        <div className="text-white text-xl font-bold tracking-wider font-mono mb-1.5">{title}</div>
        <Meta>{meta}</Meta>
        <div className="mt-4">
          <ActionButton>{button}</ActionButton>
        </div>
      </div>
    </div>
  )
}

export default function PreEvent() {
  return (
    <section className="bg-[#1a1a1a] px-16 pt-20 pb-0 font-mono">
      <SectionHeader
        title="PRE_EVENT_BUFFER"
        subtitle="// WARM UP BEFORE THE MAIN EVENT"
      />
      <div className="flex flex-col">
        {PRE_EVENTS.map((event, i) => (
          <PreEventItem
            key={i}
            {...event}
            isLast={i === PRE_EVENTS.length - 1}
          />
        ))}
      </div>
    </section>
  )
}