const degrees = [
  {
    year: '2024 – Present',
    degree: 'MSc Computer Science',
    school: 'Université catholique de Louvain (UCLouvain)',
    detail: 'Machine Learning · Deep Learning · Software Engineering',
    highlight: true,
  },
  {
    year: '2021 – 2024',
    degree: 'BSc Computer Science',
    school: 'Henallux-IESN',
    detail: 'Web & Mobile Development · Application Design',
  },
  {
    year: '2018 – 2021',
    degree: 'Technical Secondary — Computer Science',
    school: 'Institut Cardijn-Lorraine d\'Arlon',
    detail: 'CESS Diploma, 2021',
  },
]

export default function Education() {
  return (
    <section className="py-24" id="education">
      <p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">Education</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-zinc-100 leading-tight mb-10"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
        Academic background
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {degrees.map(({ year, degree, school, detail, highlight }) => (
          <div
            key={degree}
            className={`bg-zinc-900 rounded-xl p-6 border transition-colors duration-200 hover:border-zinc-700
              ${highlight ? 'border-blue-500/30' : 'border-zinc-800'}`}
          >
            <p className="font-mono text-[11px] text-zinc-500 mb-2">{year}</p>
            <p className="text-[15px] font-medium text-zinc-100 mb-1 leading-snug">{degree}</p>
            <p className="text-[13px] text-zinc-400">{school}</p>
            <p className="text-[12px] text-zinc-600 mt-1">{detail}</p>
          </div>
        ))}

        {/* Expected graduation card */}
        <div className="bg-zinc-950 border border-zinc-800 border-dashed rounded-xl p-6 flex items-center justify-center min-h-[100px]">
          <div className="text-center font-mono text-[12px] text-zinc-500 leading-loose">
            Expected graduation<br />
            <span className="text-zinc-300 text-[14px]">2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
