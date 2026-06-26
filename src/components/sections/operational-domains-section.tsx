import { ArrowUpRight, Diamond, Grid2X2, List, Waves } from 'lucide-react'
import { getPublicAssetUrl } from '@/lib/assets'

const domains = [
  {
    eyebrow: '01 / DEF',
    name: 'Installation resilience',
    copy: 'Estimate infrastructure damage, system degradation, and recovery priorities before cascading consequences widen the resilience gap.',
    video: getPublicAssetUrl('/national-defense.mp4'),
    Icon: List,
  },
  {
    eyebrow: '02 / OPS',
    name: 'Operational forecasting',
    copy: 'Model structural, human, and operational consequence so teams can act before planning assumptions fail.',
    video: getPublicAssetUrl('/auto-system.mp4'),
    Icon: Grid2X2,
  },
  {
    eyebrow: '03 / INF',
    name: 'Critical infrastructure',
    copy: 'Prioritize responses across utilities, transportation, public safety, and industrial systems under time pressure.',
    video: getPublicAssetUrl('/infrastructure.mp4'),
    Icon: Waves,
  },
  {
    eyebrow: '04 / AUT',
    name: 'Robotics & autonomy',
    copy: 'Rank tradeoffs for automated systems operating around constrained assets, uncertain environments, and human teams.',
    video: getPublicAssetUrl('/robotics-current.mp4'),
    Icon: Diamond,
  },
]

export function OperationalDomainsSection() {
  return (
    <section id="domains" data-header-text="light" className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-8 border-t border-white/10 pt-4 lg:grid-cols-[0.32fr_1fr]">
          <p className="label-kicker">Operational domains</p>
          <h2 className="text-right text-[clamp(3.25rem,5.2vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="block text-white">One engine. Multiple</span>
            <span className="block text-[var(--brand-teal)]">high-consequence domains.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-2 lg:grid-cols-4">
          {domains.map(({ Icon, ...domain }) => (
            <article
              key={domain.name}
              className="group relative min-h-[34rem] overflow-hidden border border-white/10 bg-[#07111a]"
            >
              <video
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover brightness-[0.58] contrast-[1.08] saturate-[0.68] transition duration-700 group-hover:scale-[1.065] group-hover:saturate-100"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={domain.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,5,10,.08),rgba(1,5,10,.35)_28%,rgba(1,5,10,.96)_84%),linear-gradient(145deg,rgba(5,75,124,.14),rgba(0,18,33,.7)),repeating-linear-gradient(120deg,transparent_0_42px,rgba(255,255,255,.025)_43px)]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent_49.8%,rgba(31,182,178,.18)_50%,transparent_50.2%)]" />

              <div className="relative flex h-full min-h-[34rem] flex-col justify-between p-5 sm:p-7">
                <div className="flex items-start justify-between font-sans text-[12px] uppercase tracking-[0.18em] text-white/72">
                  <span>{domain.eyebrow}</span>
                  <Icon className="h-7 w-7 text-[var(--brand-teal)]" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="max-w-xs text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.04em] sm:text-[3.25rem]">
                    {domain.name}
                  </h3>
                  <p className="mt-6 min-h-24 text-base leading-relaxed text-white/70">{domain.copy}</p>
                  <a
                    href="#contact"
                    className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-sans text-[11px] uppercase tracking-[0.18em] text-white/86"
                  >
                    Discuss workflow
                    <ArrowUpRight className="h-4 w-4 text-[var(--brand-teal)]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
