const milestones = [
  {
    year: 'Defense program',
    title: 'DTRA Phase I SBIR',
    copy: 'The Defense Threat Reduction Agency is currently validating DCE for installation-level consequence modeling — quantifying downstream impact across infrastructure, human systems, and operations.',
  },
  {
    year: 'Commercial deployment',
    title: 'Fortune 500 pilot',
    copy: 'Depth has demonstrated operational deployment capability outside defense — validating that the same engine architecture transfers across high-consequence domains.',
  },
  {
    year: 'Procurement',
    title: 'Procurement pathways',
    copy: 'Depth is listed across multiple procurement channels that make DCE accessible for evaluation and adoption across defense and adjacent high-consequence programs.',
  },
]

export function ProofSection() {
  return (
    <section id="proof" data-header-text="dark" className="bg-[#f2f3ef] py-16 text-black sm:py-20">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-black/60">
          Validation
        </p>
        <h2 className="mt-4 max-w-5xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[5.5rem]">
          Where DCE stands today.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/75 sm:text-[1.0625rem]">
          DCE has an active DTRA Phase I SBIR, demonstrated commercial deployment capability, and procurement pathways open across defense and adjacent high-consequence programs. The next milestone is repeatable use inside a real planning workflow.
        </p>
        <div className="mt-10 border-t border-black/15">
          {milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="grid gap-3 border-b border-black/15 py-5 md:grid-cols-[10rem_1fr] md:gap-8"
            >
              <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-black/60">
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
