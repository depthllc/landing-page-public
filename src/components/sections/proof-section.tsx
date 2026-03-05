const milestones = [
  {
    year: '2021-2024',
    title: 'CVS Health / Aetna innovation work',
    copy: 'GenAI-enabled diagnostics support and 3D patient visualization workstreams.',
  },
  {
    year: '2025',
    title: 'TechCrunch Disrupt Top 200',
    copy: 'Selected for Startup Battlefield Top 200 cohort.',
  },
  {
    year: '2026',
    title: 'DoD DTRA SBIR Phase I',
    copy: 'Awarded for blast injury simulation modeling in armored vehicle contexts.',
  },
]

export function ProofSection() {
  return (
    <section id="proof" className="bg-[#f2f3ef] py-16 text-black sm:py-20">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-black/60">Proof</p>
        <h2 className="mt-4 max-w-5xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[5.5rem]">
          Evidence over adjectives.
        </h2>
        <div className="mt-10 border-t border-black/15">
          {milestones.map((milestone) => (
            <article
              key={milestone.year}
              className="grid gap-3 border-b border-black/15 py-5 md:grid-cols-[10rem_1fr] md:gap-8"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-black/60">
                {milestone.year}
              </p>
              <div>
                <h3 className="text-[2rem] font-semibold sm:text-[2.35rem]">{milestone.title}</h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-black/75 sm:text-[1.0625rem]">
                  {milestone.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
