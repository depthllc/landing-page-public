const steps = [
  {
    name: 'Ingest',
    copy: 'Normalize geospatial systems, digital twins, sensor streams, simulations, and planning inputs into one operational context layer.',
  },
  {
    name: 'Constrain',
    copy: 'Apply governing equations, boundary conditions, material parameters, and environmental limits to bound what can happen next.',
  },
  {
    name: 'Infer',
    copy: 'Use a Hybrid Physics-AI architecture to calibrate uncertainty, accelerate scenario evaluation, and improve predictive robustness.',
  },
  {
    name: 'Propagate',
    copy: 'Model cascading effects across infrastructure, human systems, and operational assets after a high-consequence physical event.',
  },
  {
    name: 'Rank',
    copy: 'Re-rank consequences by mission priority and operational dependency. The highest-consequence decision surfaces first.',
  },
  {
    name: 'Deliver',
    copy: 'Return Decisive Intelligence through secure, containerized APIs built for formal planning workflows — auditable, explainable, and ready to act on.',
  },
]

export function PipelineSection() {
  return (
    <section id="platform" data-header-text="light" className="bg-background pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <p className="label-kicker">Depth Consequence Engine</p>
        <h2 className="section-headline mt-4 max-w-5xl">
          From physical event to Decisive Intelligence.
        </h2>
        <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-foreground/75">
          DCE is a modular reasoning layer that integrates into existing planning stacks through
          secure APIs as a required input to the workflow. Built for Defense-Hardened Deployment
          from day one.
        </p>

        <div className="mt-10 border-t border-white/12">
          {steps.map((step, index) => (
            <article
              key={step.name}
              className="grid gap-3 border-b border-white/12 py-5 md:grid-cols-[5rem_12rem_1fr] md:items-start md:gap-6"
            >
              <p className="font-sans text-[12px] uppercase tracking-[0.2em] text-foreground/60">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-[2rem] font-semibold sm:text-[2.35rem]">{step.name}</h3>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/72 sm:text-[1.0625rem]">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
