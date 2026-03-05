const steps = [
  {
    name: 'Ingest',
    copy: 'Capture imagery, video, text, geospatial layers, and sensor feeds from heterogeneous systems.',
  },
  {
    name: 'Map',
    copy: 'Reconstruct coherent 3D scenes and objects with depth-aware spatial registration.',
  },
  {
    name: 'Understand',
    copy: 'Resolve entities, relationships, and constraints into a structured spatial knowledge graph.',
  },
  {
    name: 'Predict',
    copy: 'Evaluate likely outcomes, risk contours, and tradeoffs across candidate actions.',
  },
  {
    name: 'Visualize',
    copy: 'Deliver decision context across standard screens, immersive review, and collaborative displays.',
  },
  {
    name: 'Act',
    copy: 'Return ranked recommendations with traceable evidence chains.',
  },
]

export function PipelineSection() {
  return (
    <section id="platform" className="bg-background pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <p className="label-kicker">Platform</p>
        <h2 className="section-headline mt-4 max-w-5xl">
          One pipeline from raw signal to operational action.
        </h2>
        <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-foreground/75">
          The model is continuously maintained as new data arrives. Decision context does not go
          stale between handoffs.
        </p>

        <div className="mt-10 border-t border-white/12">
          {steps.map((step, index) => (
            <article
              key={step.name}
              className="grid gap-3 border-b border-white/12 py-5 md:grid-cols-[5rem_12rem_1fr] md:items-start md:gap-6"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-foreground/60">
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
