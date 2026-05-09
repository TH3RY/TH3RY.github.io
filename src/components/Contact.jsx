const links = [
  { label: '✉ Email me',       href: 'mailto:therence.guerenne@gmail.com', primary: true },
  { label: 'LinkedIn →',       href: 'https://linkedin.com/in/thérence-gc' },
  { label: '+32 472 38 73 17', href: 'tel:+32472387317' },
]

export default function Contact() {
  return (
    <section className="py-28" id="contact">
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-16 text-center overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.08), transparent)' }}
        />

        <p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">Contact</p>
        <h2
          className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-zinc-100 leading-tight mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Let's build<br />
          <em className="italic text-zinc-400">something.</em>
        </h2>
        <p className="text-zinc-400 max-w-sm mx-auto leading-relaxed mb-10">
          Whether you're looking for a developer intern, a collaborator on a technical project, or just want to connect — reach out.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          {links.map(({ label, href, primary }) => (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 rounded-lg border transition-all duration-150
                ${primary
                  ? 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
                  : 'bg-[#0a0a0b] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-100'
                }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
