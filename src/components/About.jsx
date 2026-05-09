const cards = [
	{
		icon: "🏛️",
		label: "Education",
		val: "MSc Computer Science",
		sub: "UCLouvain · 2024 – present",
	},
	{
		icon: "🏦",
		label: "Last Role",
		val: "Developer Intern",
		sub: "Banque De Luxembourg · 10 months",
	},
	{
		icon: "📍",
		label: "Location",
		val: "Louvain-la-Neuve, Belgium",
		sub: "Open to remote & hybrid",
	},
	{
		icon: "✉️",
		label: "Contact",
		val: "therence.guerenne@gmail.com",
		sub: "+32 472 38 73 17",
	},
];

export default function About() {
	return (
		<section className="py-24" id="about">
			<p className="font-mono text-[11px] text-blue-500 tracking-[0.1em] uppercase mb-4">
				About
			</p>
			<h2
				className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-zinc-100 leading-tight mb-12"
				style={{ fontFamily: "'DM Serif Display', serif" }}>
				Who I am
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
				{/* Text */}
				<div className="space-y-5 text-zinc-400 leading-relaxed">
					<p>
						I'm a{" "}
						<strong className="text-zinc-100 font-medium">
							Belgian full-stack developer
						</strong>{" "}
						with a strong appetite for building things that actually work —
						end-to-end. My background spans web, mobile, and backend, with a
						particular interest in clean architecture and real user impact.
					</p>
					<p>
						After a{" "}
						<strong className="text-zinc-100 font-medium">
							10-month internship at Banque De Luxembourg
						</strong>{" "}
						where I shipped a professional internal tool with Flask, I brought
						that production-level discipline into my Master's at UCLouvain — now
						deepening expertise in AI and software engineering.
					</p>
					<p>
						Fluent in{" "}
						<strong className="text-zinc-100 font-medium">French</strong>{" "}
						(native) and{" "}
						<strong className="text-zinc-100 font-medium">English</strong> (B2),
						comfortable in international, fast-moving technical teams.
					</p>
				</div>

				{/* Cards */}
				<div className="flex flex-col gap-3">
					{cards.map(({ icon, label, val, sub }) => (
						<div
							key={label}
							className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl px-5 py-4 transition-colors duration-200">
							<span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
							<div>
								<p className="font-mono text-[11px] text-blue-400 tracking-widest uppercase mb-1">
									{label}
								</p>
								<p className="text-[14px] text-zinc-100 font-medium">{val}</p>
								<p className="text-[12px] text-zinc-500 mt-0.5">{sub}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
