const experiences = [
  {
    period: 'Jul 2023 – May 2024',
    company: 'Banque De Luxembourg',
    role: 'Developer Intern — Banking API Testing Platform',
    desc: '10-month end-of-studies internship in Luxembourg. Designed and developed a web application for internal banking API testing, built with Flask and Jinja2. Worked within a demanding professional environment with strict security and quality standards.',
    badge: '10-month internship · Luxembourg',
    highlight: true,
  },
  {
    period: '2022 & 2023 (summers)',
    company: 'IKEA',
    role: 'Logistics & Warehouse Associate',
    desc: 'Stock handling and inventory operations during two consecutive summers. Developed teamwork, reliability, and operational discipline in a high-volume retail environment.',
    badge: 'Student Job',
    highlight: false,
  },
  {
    period: 'Aug – Sep 2019',
    company: 'Maison Médicale Portes Sud',
    role: 'Administrative Assistant',
    desc: 'Administrative support at a medical non-profit in Arlon. First professional experience, building communication and organizational skills.',
    badge: 'Student Job',
    highlight: false,
  },
]

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">Experience</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-zinc-100 leading-tight mb-10"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
        Where I've worked
      </h2>

      <div className="flex flex-col">
        {experiences.map(({ period, company, role, desc, badge, highlight }) => (
          <div
            key={company}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-t border-zinc-800 last:border-b last:border-zinc-800"
          >
            <div className="flex flex-col gap-1 pt-0.5">
              <span className="font-mono text-[12px] text-zinc-500">{period}</span>
              <span className="font-mono text-[12px] text-blue-400">{company}</span>
            </div>
            <div>
              <p className="text-[1.05rem] font-medium text-zinc-100 mb-2">{role}</p>
              <p className="text-[14px] text-zinc-400 leading-relaxed">{desc}</p>
              <span
                className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded mt-4 border
                  ${highlight
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                  }`}
              >
                {badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
