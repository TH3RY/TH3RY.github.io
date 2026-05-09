const projects = [
  {
    id: '01 · Featured',
    title: 'Carpooling Platform',
    desc: 'Complete ride-sharing system with a REST API backend, a React web interface, and a native Flutter mobile app. Handles route management, user authentication, and real-time trip coordination.',
    stack: ['Flutter', 'Node.js', 'React', 'REST API'],
    tags: ['Full-Stack', 'Mobile'],
    icon: '🚗',
    visual: 'Web + Mobile + API',
    featured: true,
    github: '#',
  },
  {
    id: '02',
    title: 'AI Plant Recognition App',
    desc: 'Mobile app that identifies and manages plants using ML image classification. Built the full pipeline from model integration to Flutter UI.',
    stack: ['Flutter', 'Python', 'ML'],
    tags: ['AI / ML'],
    icon: '🌿',
    github: '#',
  },
  {
    id: '03',
    title: 'E-Commerce with Live Payments',
    desc: 'Full-featured online store with cart, product management, and real payment processing via Stripe API. Production-ready architecture.',
    stack: ['React', 'Node.js', 'Stripe'],
    tags: ['E-Commerce'],
    icon: '🛒',
    github: '#',
  },
  {
    id: '04',
    title: 'Furniture ERP System',
    desc: 'Built a complete ERP from scratch using MVC architecture — inventory, orders, and invoicing. Deep dive into backend business logic and relational data modeling.',
    stack: ['PHP', 'SQL', 'MVC'],
    tags: ['ERP'],
    icon: '🗄️',
    github: '#',
  },
]

function StackBadge({ label }) {
  return (
    <span className="font-mono text-[11px] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
      {label}
    </span>
  )
}

function Tag({ label }) {
  return (
    <span className="font-mono text-[10px] text-zinc-500 border border-zinc-800 bg-zinc-950 px-2 py-0.5 rounded">
      {label}
    </span>
  )
}

function FeaturedCard({ project }) {
  return (
    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-zinc-500">{project.id}</span>
          <div className="flex gap-1.5">{project.tags.map((t) => <Tag key={t} label={t} />)}</div>
        </div>
        <h3 className="font-serif text-2xl text-zinc-100 leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
          {project.title}
        </h3>
        <p className="text-[14px] text-zinc-400 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((s) => <StackBadge key={s} label={s} />)}
        </div>
        <a href={project.github}
           className="font-mono text-[12px] text-zinc-500 hover:text-zinc-300 transition-colors w-fit mt-1">
          View on GitHub →
        </a>
      </div>
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl h-44 flex flex-col items-center justify-center gap-3 text-zinc-600 font-mono text-[11px]">
        <span className="text-3xl opacity-30">{project.icon}</span>
        <span>{project.visual}</span>
      </div>
    </div>
  )
}

function RegularCard({ project }) {
  return (
    <div className="flex flex-col gap-5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-zinc-500">{project.id}</span>
        <div className="flex gap-1.5">{project.tags.map((t) => <Tag key={t} label={t} />)}</div>
      </div>
      <h3 className="font-serif text-xl text-zinc-100 leading-snug"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
        {project.title}
      </h3>
      <p className="text-[14px] text-zinc-400 leading-relaxed flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((s) => <StackBadge key={s} label={s} />)}
      </div>
      <a href={project.github}
         className="font-mono text-[12px] text-zinc-500 hover:text-zinc-300 transition-colors w-fit">
        View on GitHub →
      </a>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const regular  = projects.filter((p) => !p.featured)

  return (
    <section className="py-24" id="projects">
      <p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">Projects</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-zinc-100 leading-tight mb-3"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
        Selected work
      </h2>
      <p className="text-zinc-400 max-w-md leading-relaxed mb-10">
        End-to-end builds covering web platforms, mobile apps, and AI-powered tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featured.map((p) => <FeaturedCard key={p.id} project={p} />)}
        {regular.map((p)  => <RegularCard  key={p.id} project={p} />)}
      </div>
    </section>
  )
}
