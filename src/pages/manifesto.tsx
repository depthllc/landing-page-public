import { SiteHeader } from '@/components/site-header'

const opening = {
  paragraphs: [
    'The hardest decisions in defense are not blocked by a lack of data. They are blocked by a lack of clear consequence. A team can see the event, map the site, and pull updates from every direction. What it cannot answer, in time, is what the event means: how it will spread, who it will reach, which operations will degrade, and what action still matters before the damage compounds.',
    'After a blast hits an installation, the first question is not where it came from. It is what fails next. Infrastructure, people, operations — the cascade is already in motion. A planner who cannot model that cascade cannot change it.',
    'The Depth Consequence Engine exists to close that gap. Not with another picture of the event. Not with another report after the fact. With a reasoning layer that turns physical events into operational decisions while the window to act is still open.',
  ],
}

const comparison = {
  paragraphs: [
    'The planning stack is split. One system stores data. Another renders the environment. Another runs a model. Another produces a report. An analyst can assemble those pieces into a narrative. A live planning workflow cannot.',
    'So intelligence keeps arriving in the wrong form. It supports briefings without changing plans. It explains what happened without clarifying what to do next. It proves technical merit at the wrong moment — after the decision window has closed.',
    'The missing layer is not more data, a better display, or another model. It is the engine that carries consequence from event to action: ingesting what happened, preserving the physics that govern what is possible, propagating the cascade across infrastructure and people and operations, and returning output in a form a planner can act on. That layer is what DCE is built to be.',
  ],
}

const declarations = [
  {
    title: 'The future is only legible when the past is reconstructed.',
    body: 'Consequence reasoning runs in both directions at once: backward through the chain that produced the event, forward through the chain it will produce. A system that cannot do both cannot be trusted to do either.',
  },
  {
    title: 'The output must be decisive, not descriptive.',
    body: 'Visualization orients. Reports explain. Neither resolves what a planner must do next. Decisive Intelligence is output structured for a specific operational choice — which resource to move, which gap to close, in what order — delivered before the window closes. Output that cannot do that is not intelligence. It is presentation.',
  },
  {
    title: 'The engine belongs between event and action.',
    body: 'DCE applies the governing physics that determine what the world will actually allow, runs Cascade Impact Modeling across infrastructure nodes and human systems, and uses Escalation Modeling to branch second- and third-order effects under uncertainty. It returns output structured for a decision, not a debrief. That is Consequence Intelligence Infrastructure.',
  },
  {
    title: 'Trust comes from physics and uncertainty together.',
    body: "Fast but ungrounded produces confident answers the physics cannot support. Rigorous but slow produces correct answers after the window has closed. DCE's Hybrid Physics-AI architecture avoids both: the Physics Constraint Core enforces physical fidelity where the science is settled; the Adaptive Inference Layer bounds uncertainty where it is not.",
  },
  {
    title: 'Infrastructure is earned when insight changes action.',
    body: "Critical-Path Integration is the moment a planner cannot complete the planning cycle without DCE's output. Not finds it useful. Cannot finish without it. Everything before that threshold is access. Only that dependency is infrastructure.",
  },
  {
    title: 'Defense is the proof domain, not the boundary.',
    body: 'The DTRA Phase I SBIR — blast modeling, TBI outcome prediction, multi-scale biomechanical simulation — validates the hybrid architecture where defense-grade consequence reasoning is rare and hard to replicate. The same Physics Constraint Core and Adaptive Inference Layer that model blast consequence at a military installation model structural failure at an energy facility, disruption across a port, propagation through an industrial system. Each new domain requires a new adapter. The engine does not change.',
  },
  {
    title: 'One workflow first. Then the standard.',
    body: 'Category Control is not declared. It is accumulated. Anchor where the proof is hardest to replicate. Embed until one planning workflow cannot run without the engine. Carry the same architecture into every domain where the consequence logic is the same. The engine becomes the standard not by claiming the position but by making it structurally expensive to remove.',
  },
]

const closing = [
  'The Depth Consequence Engine is a deployable reasoning engine. Containerized, API-first, built to integrate into existing planning systems rather than replace them. Its job is simple to state and hard to do: ingest from upstream sources, enforce the physics that make the problem real, calibrate inference where uncertainty governs, propagate consequence across the full cascade, and deliver output that a planner can use to make a decision that still matters.',
  'That job requires both rigor and speed. It requires output grounded enough to trust and structured enough to act on. It requires a system that earns its place inside a workflow — not beside it — and stays there because removing it breaks the process.',
  'DTRA is the first proof that DCE can earn that trust in a domain where trust is expensive. From there the path runs through installation-level resilience and medical readiness planning, into adjacent defense programs, and across the wider set of infrastructure domains that run on the same consequence logic.',
  'The engine is the same at every step. The domain adapts. The architecture compounds. Category Control follows as a result of that progression — not as a claim made in advance of it.',
]

export function ManifestoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Cover */}
        <section className="grain border-b border-white/8 pb-20 pt-40 sm:pb-28 sm:pt-48">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <p className="label-kicker mb-8">Manifesto</p>
            <h1 className="max-w-4xl text-[3.5rem] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-[6rem] lg:text-[7.5rem]">
              The Depth Consequence Engine
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-foreground/60">
              A Manifesto for Consequence Intelligence Infrastructure
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-foreground/40">
              <span>Dr. Gloryvee Cordero</span>
              <span className="text-foreground/20">·</span>
              <span>YuFei Jin</span>
              <span className="text-foreground/20">·</span>
              <span>Dr. Benji Peng</span>
              <span className="text-foreground/20">·</span>
              <span>March 2026</span>
            </div>
          </div>
        </section>

        {/* Opening */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <div className="max-w-3xl">
              {opening.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-foreground/85 ${
                    i === 0
                      ? 'text-[1.25rem] font-medium italic sm:text-[1.4375rem]'
                      : 'mt-6 text-[1.0625rem] sm:text-[1.125rem]'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <div className="max-w-3xl">
              {comparison.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 text-[1.0625rem] leading-relaxed text-foreground/85 first:mt-0 sm:text-[1.125rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Declarations */}
        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <p className="label-kicker mb-16">Declarations</p>
            <div className="divide-y divide-white/8">
              {declarations.map((d, i) => (
                <article key={i} className="grid gap-6 py-12 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 font-sans text-[11px] uppercase tracking-[0.22em] text-foreground/35">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-[1.375rem] font-semibold leading-[1.18] tracking-[-0.02em] text-foreground sm:text-[1.625rem]">
                      {d.title}
                    </h2>
                  </div>
                  <p className="text-[1.0625rem] leading-relaxed text-foreground/72 sm:text-[1.125rem]">
                    {d.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <div className="max-w-3xl">
              {closing.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 text-[1.0625rem] leading-relaxed text-foreground/85 first:mt-0 sm:text-[1.125rem]"
                >
                  {p}
                </p>
              ))}
              <p className="mt-16 text-[1.5rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[2rem]">
                We are building DCE.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-foreground/35">
                <span>Dr. Gloryvee Cordero</span>
                <span className="text-foreground/15">·</span>
                <span>YuFei Jin</span>
                <span className="text-foreground/15">·</span>
                <span>Dr. Benji Peng</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-[96rem] flex-col gap-2 px-4 py-8 text-[12px] uppercase tracking-[0.18em] text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
          <a href="/" className="font-logo text-[18px] font-semibold normal-case tracking-[0.12em] text-foreground/72 hover:text-foreground">
            depth
          </a>
          <p className="normal-case">Consequence intelligence infrastructure for defense and adjacent high-consequence domains</p>
        </div>
      </footer>
    </div>
  )
}
