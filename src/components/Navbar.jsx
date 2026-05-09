export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[rgba(10,10,11,0.85)] backdrop-blur-md">
      <div className="max-w-[1100px] mx-auto px-8 h-14 flex items-center justify-between">
        <span className="font-mono text-[13px] text-zinc-400 tracking-wide">
          <span className="text-blue-500">~/</span>therence.gc
        </span>
        <div className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-zinc-500 hover:text-zinc-100 tracking-wide transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="font-mono text-[12px] text-blue-400 border border-blue-500/30 px-4 py-1.5 rounded-md hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-150"
        >
          Contact →
        </a>
      </div>
    </nav>
  )
}
