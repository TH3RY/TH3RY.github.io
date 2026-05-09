export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-8">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="font-mono text-[12px] text-zinc-500">
          © 2025 Thérence Guerenne-Courtois
        </p>
        <span className="font-mono text-[12px] text-zinc-500">
          Built with <span className="text-blue-400">React + Tailwind</span> · Louvain-la-Neuve, BE
        </span>
      </div>
    </footer>
  )
}
