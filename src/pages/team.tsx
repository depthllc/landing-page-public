import { Link } from 'react-router-dom'
import { SiteHeader } from '@/components/site-header'

const team = [
  {
    name: 'Dr. Gloryvee Cordero',
    role: 'Chief Executive Officer',
    focus: 'Platform architecture, simulation infrastructure, defense deployment',
    bio: 'Gloryvee has spent two decades building platforms that operate in the real world. AI systems, physics-aware simulation pipelines, and spatial computing infrastructure across defense, government, and enterprise. At Depth, she owns the architecture of DCE: how it is built, how it deploys, and how it earns trust in regulated, high-stakes environments. She has secured government and venture funding, scaled global engineering teams, and run programs across DoD, NIH, NSF, and the NVIDIA ecosystem. She holds a Doctorate in Computer Science and serves as an IEEE Standards Advisor, including working groups on Spatial Computing and Digital Earth.',
    credential: 'Doctorate of Computer Science · IEEE Standards Advisor · NVIDIA Inception · DoD/NIH/NSF program experience',
  },
  {
    name: 'YuFei Jin',
    role: 'Chief Operating Officer',
    focus: 'Government contracting, execution, business development',
    bio: 'YuFei translates strategy into operational reality. At Depth, that means running the government contracting workflows that make DCE accessible: SBIR milestone delivery, federal compliance, and agency relationships, while building the business development pipeline that carries the engine into new programs. She brings 15+ years of cross-sector operations experience and has managed campaigns across a significant real estate and enterprise portfolio. Her edge is execution precision in environments where process and relationships both matter. She holds a B.A. in Philosophy from Barnard College, Columbia University, and is a co-author on peer-reviewed research in multi-modal language models for remote sensing.',
    credential: 'B.A. Philosophy, Barnard College (Columbia) · DoD SBIR execution · Federal compliance (DFARS/SAM/ITAR)',
  },
  {
    name: 'Dr. Benji Peng',
    role: 'Chief Science Officer',
    focus: 'ML architecture, physics-AI hybrid systems, uncertainty quantification',
    bio: 'Benji owns the science inside DCE. His Ph.D. from Georgia Tech spans computational biophysics, biomedical imaging, and machine learning, the exact foundation the Hybrid Physics-AI architecture is built on. Before Depth, he worked at Meta\'s Superintelligence Lab as a GenAI Content Engineer, contributing to the next generation of large-scale AI systems. His published research includes first-author work now in active production use. At Depth, he owns the modeling architecture: the Physics Constraint Core, the Adaptive Inference Layer, uncertainty quantification, and the scientific validity of every consequence forecast the engine produces.',
    credential: 'Ph.D. Georgia Tech · Meta Superintelligence Lab (AI Tutor, 1B+ MAU scale) · First-author publications in JPCB and JChromA',
  },
]

export function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Cover */}
        <section className="grain border-b border-white/8 pb-20 pt-40 sm:pb-28 sm:pt-48">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <p className="label-kicker mb-8">The Team</p>
            <h1 className="max-w-3xl text-[3.5rem] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-[6rem] lg:text-[7.5rem]">
              The people building DCE.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-foreground/60">
              Three founders. One engine. The full stack from physics to deployment.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <div className="divide-y divide-white/8">
              {team.map((person, i) => (
                <article
                  key={i}
                  className="grid gap-8 py-16 first:pt-0 last:pb-0 lg:grid-cols-[1fr_2fr] lg:gap-20"
                >
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-foreground/35">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.25rem]">
                      {person.name}
                    </h2>
                    <p className="mt-2 font-sans text-[13px] uppercase tracking-[0.16em] text-foreground/50">
                      {person.role}
                    </p>
                    <p className="mt-4 text-[13px] leading-relaxed text-foreground/40">
                      {person.focus}
                    </p>
                  </div>
                  <div>
                    <p className="text-[1.0625rem] leading-[1.75] text-foreground/80 sm:text-[1.125rem]">
                      {person.bio}
                    </p>
                    <p className="mt-8 border-t border-white/8 pt-6 font-sans text-[12px] uppercase tracking-[0.16em] text-foreground/35">
                      {person.credential}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
            <p className="label-kicker mb-6">Work with us</p>
            <h2 className="section-headline max-w-2xl">
              Evaluate DCE for your planning workflow.
            </h2>
            <div className="mt-10">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 font-heading text-[15px] tracking-[-0.01em] text-foreground/80 hover:text-foreground transition-colors"
              >
                Request a briefing
                <span className="text-foreground/40">+</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-[96rem] flex-col gap-2 px-4 py-8 text-[12px] uppercase tracking-[0.18em] text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
          <Link to="/" className="font-logo text-[18px] font-semibold normal-case tracking-[0.12em] text-foreground/72 hover:text-foreground">
            depth
          </Link>
          <p className="normal-case">Consequence intelligence infrastructure for defense and adjacent high-consequence domains</p>
        </div>
      </footer>
    </div>
  )
}
