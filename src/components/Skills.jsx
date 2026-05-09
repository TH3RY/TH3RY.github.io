const groups = [
  {
    label: 'Languages',
    tags: [
      { name: 'Python',     highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'Java',       highlight: true },
      { name: 'PHP' },
      { name: 'C' },
      { name: 'C#' },
      { name: 'Dart' },
    ],
  },
  {
    label: 'Frontend & Mobile',
    tags: [
      { name: 'React',   highlight: true },
      { name: 'Flutter', highlight: true },
      { name: 'Redux' },
      { name: 'Jinja2' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    label: 'Backend & APIs',
    tags: [
      { name: 'Node.js',    highlight: true },
      { name: 'Flask',      highlight: true },
      { name: 'REST API' },
      { name: 'Stripe API' },
    ],
  },
  {
    label: 'Data & Tooling',
    tags: [
      { name: 'SQL', highlight: true },
      { name: 'NoSQL' },
      { name: 'Git' },
      { name: 'UML' },
      { name: 'BPMN' },
      { name: 'Design Patterns' },
    ],
  },
  {
    label: 'AI & ML',
    tags: [
      { name: 'Machine Learning',    highlight: true },
      { name: 'Image Classification' },
      { name: 'TensorFlow / Keras' },
    ],
  },
  {
    label: 'Methods',
    tags: [
      { name: 'MVC' },
      { name: 'Full-Stack Architecture' },
      { name: 'Agile' },
      { name: 'Technical Documentation' },
    ],
  },
]

function Tag({ name, highlight }) {
  return (
    <span
      className={`font-mono text-[12px] px-2.5 py-1 rounded-md border transition-all duration-150 cursor-default
        ${highlight
          ? 'border-blue-500/40 text-blue-300 bg-blue-500/8'
          : 'border-zinc-700 text-zinc-400 bg-zinc-900 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/10'
        }`}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">Skills</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-zinc-100 leading-tight mb-3"
          style={{ fontFamily: "'DM Serif Display', serif" }}>
        Technical expertise
      </h2>
      <p className="text-zinc-400 max-w-md leading-relaxed mb-10">
        A practical, full-spectrum stack — from database to UI layer, including mobile.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-zinc-800 rounded-2xl overflow-hidden"
        style={{ gap: '1px', background: '#2a2a2e' }}
      >
        {groups.map(({ label, tags }) => (
          <div
            key={label}
            className="bg-[#0a0a0b] hover:bg-zinc-900 p-8 transition-colors duration-200"
          >
            <p className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase mb-5">{label}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag.name} {...tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
