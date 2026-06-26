import { ArrowUpRight } from 'lucide-react'
import { getPublicAssetUrl } from '@/lib/assets'

const readinessItems = [
  'Modular architecture',
  'API-accessible services',
  'Containerized deployment path',
  'Human-in-the-loop workflows',
  'Evidence lineage and auditability',
  'Compatible with operational systems',
]

export function DefenseReadySection() {
  return (
    <section id="defense" data-header-text="light" className="bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-[96rem] items-start gap-12 px-4 sm:px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-6">
        <div className="max-w-4xl">
          <p className="label-kicker">Defense-ready infrastructure</p>
          <h2 className="mt-10 max-w-4xl text-[clamp(3.25rem,5.2vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
            <span className="text-white">Designed for </span>
            <span className="text-[var(--brand-teal)]">mission integration.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/72 sm:text-[1.0625rem]">
            Depth is built for environments where decisions must be explainable, deployable, and
            operationally useful.
          </p>
          <a
            href="mailto:glory@depth.ai?subject=Depth%20Defense%20Integration"
            className="mt-10 inline-flex min-w-60 items-center justify-between gap-6 border border-white bg-white px-5 py-4 font-sans text-[12px] uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/88"
          >
            Talk to Depth
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="w-full max-w-[46rem] justify-self-end overflow-hidden border border-white/10 bg-white/[0.035]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-white/58 sm:px-5">
            <span>DCE deployment profile</span>
            <span className="text-emerald-300">● Ready</span>
          </div>

          <div className="relative h-[21rem] overflow-hidden sm:h-[23rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover brightness-[0.42] saturate-[0.72]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={getPublicAssetUrl('/deployment.mp4')} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(0,0,0,0.42)_42%,rgba(0,0,0,0.86)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:44px_44px]" />

            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 place-items-center border border-[var(--brand-teal)] bg-[#03101b]/75 text-center font-sans text-[1rem] uppercase tracking-[0.18em] text-[var(--brand-teal)] shadow-[0_0_80px_rgba(31,182,178,0.16)]">
              <span className="-rotate-45">
              DCE
              <span className="block text-[7px] text-[var(--brand-teal)]/70">Runtime</span>
              </span>
            </div>
            <div className="absolute left-[13%] top-[22%] rounded-full border border-white/16 bg-black/52 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.16em] text-white/72">
              Edge / active
            </div>
            <div className="absolute right-[10%] top-[34%] rounded-full border border-white/16 bg-black/52 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.16em] text-white/72">
              Cloud / sync
            </div>
            <div className="absolute bottom-[18%] left-[24%] rounded-full border border-white/16 bg-black/52 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.16em] text-white/72">
              On-prem / ready
            </div>
          </div>

          <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
            {readinessItems.map((item) => (
              <li
                key={item}
                className="bg-[#0b0d0f] px-4 py-3 font-sans text-[10px] uppercase tracking-[0.16em] text-white/72 sm:px-5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
