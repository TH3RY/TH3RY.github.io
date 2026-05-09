import { useEffect, useState } from 'react'

const stats = [
  { num: '10mo', label: 'Professional Internship' },
  { num: '6+',   label: 'Languages & Frameworks' },
  { num: '4',    label: 'Full-Stack Projects' },
  { num: '3',    label: 'Years CS Training' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  const base = 'transition-all duration-700 ease-out'
  const show = 'opacity-100 translate-y-0'
  const hide = 'opacity-0 translate-y-6'

  return (
    <section className="pt-36 pb-24 min-h-screen flex flex-col justify-center" id="hero">
      {/* Badge */}
      <div
        className={`${base} ${visible ? show : hide} inline-flex items-center gap-2 font-mono text-[11px] text-zinc-500 border border-zinc-800 px-4 py-1.5 rounded-full mb-10 w-fit tracking-widest`}
        style={{ transitionDelay: '100ms' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        Available · Based in Louvain-la-Neuve, BE
      </div>

      {/* Heading */}
      <h1
        className={`${base} ${visible ? show : hide} font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-zinc-100 mb-6`}
        style={{ transitionDelay: '200ms', fontFamily: "'DM Serif Display', serif" }}
      >
        Full-Stack<br />
        <em className="italic text-zinc-400">Developer</em><br />
        & CS Master's
      </h1>

      {/* Description */}
      <p
        className={`${base} ${visible ? show : hide} text-[1.1rem] text-zinc-400 max-w-[520px] leading-relaxed mb-10`}
        style={{ transitionDelay: '300ms' }}
      >
        I build <strong className="text-zinc-100 font-medium">complete digital products</strong> — from REST APIs to mobile apps. Currently pursuing a Master's at UCLouvain, with real-world experience at{' '}
        <strong className="text-zinc-100 font-medium">Banque De Luxembourg</strong>.
      </p>

      {/* CTAs */}
      <div
        className={`${base} ${visible ? show : hide} flex gap-4 flex-wrap`}
        style={{ transitionDelay: '400ms' }}
      >
        <a
          href="#projects"
          className="font-mono text-[13px] bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg tracking-wide transition-all duration-150 hover:-translate-y-px"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="font-mono text-[13px] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-100 hover:bg-zinc-900 px-6 py-3 rounded-lg tracking-wide transition-all duration-150"
        >
          Get in touch
        </a>
      </div>

      {/* Stats */}
      <div
        className={`${base} ${visible ? show : hide} flex gap-10 mt-16 pt-16 border-t border-zinc-800 flex-wrap`}
        style={{ transitionDelay: '500ms' }}
      >
        {stats.map(({ num, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="font-mono text-2xl text-zinc-100 font-medium">{num}</span>
            <span className="text-[12px] text-zinc-500 tracking-widest uppercase">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
