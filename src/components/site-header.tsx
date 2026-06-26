import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'DCE', href: '#platform' },
  { label: 'Applications', href: '#use-cases' },
  { label: 'Validation', href: '#proof' },
  { label: 'Defense', href: '#defense' },
]

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null)
  const [headerTextTone, setHeaderTextTone] = useState<'light' | 'dark'>('light')
  const [companyOpen, setCompanyOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isSubpage = location.pathname === '/manifesto' || location.pathname === '/team'

  useEffect(() => {
    const updateHeaderTone = () => {
      const header = headerRef.current
      if (!header) return

      const headerRect = header.getBoundingClientRect()
      const sampleX = Math.round(window.innerWidth / 2)
      const sampleY = Math.min(
        window.innerHeight - 1,
        Math.max(0, Math.round(headerRect.bottom + 4)),
      )
      const sampleElement = document.elementFromPoint(sampleX, sampleY)
      const nextTone =
        sampleElement?.closest<HTMLElement>('[data-header-text]')?.dataset.headerText === 'dark'
          ? 'dark'
          : 'light'

      setHeaderTextTone((currentTone) => (currentTone === nextTone ? currentTone : nextTone))
    }

    updateHeaderTone()
    window.addEventListener('scroll', updateHeaderTone, { passive: true })
    window.addEventListener('resize', updateHeaderTone)

    return () => {
      window.removeEventListener('scroll', updateHeaderTone)
      window.removeEventListener('resize', updateHeaderTone)
    }
  }, [])

  const textClass =
    headerTextTone === 'dark'
      ? 'text-black/80 hover:text-black'
      : 'text-white/80 hover:text-white'

  const shellClass =
    companyOpen
      ? 'border-white/10 bg-[#01050a]/95 text-white shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl'
      : 'bg-transparent'

  return (
    <header ref={headerRef} className={`fixed left-0 right-0 top-0 z-50 border-b border-transparent transition-colors ${shellClass}`}>
      <div className="mx-auto flex max-w-[96rem] items-center justify-between px-4 py-5 sm:px-5 lg:px-6">
        <Link
          className={`font-logo text-[18px] font-semibold tracking-[0.12em] transition-colors ${companyOpen || headerTextTone === 'light' ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'}`}
          to="/"
        >
          depth
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {isHome && navItems.map((item) => (
            <a
              key={item.label}
              className={`font-heading text-[14px] font-normal tracking-[-0.01em] transition-colors ${textClass}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          {isHome && (
            <button
              type="button"
              aria-expanded={companyOpen}
              aria-controls="company-menu"
              className={`font-heading text-[14px] font-normal tracking-[-0.01em] transition-colors ${companyOpen ? 'text-white' : textClass}`}
              onClick={() => setCompanyOpen((open) => !open)}
            >
              Company <span className="ml-1 text-[var(--brand-teal)]">−</span>
            </button>
          )}
        </nav>
        {isSubpage ? (
          <Link
            to="/"
            className={`font-heading text-[14px] tracking-[-0.01em] transition-colors ${textClass}`}
          >
            Back to DCE
          </Link>
        ) : (
          <a
            href="#contact"
            className={`font-heading text-[14px] tracking-[-0.01em] transition-colors ${textClass}`}
          >
            Request Briefing +
          </a>
        )}
      </div>
      {isHome && (
        <div
          id="company-menu"
          className={`absolute left-0 right-0 top-full overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,#01050a,#04101a_70%,#01050a)] transition-all duration-300 ${
            companyOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <div className="mx-auto grid max-w-[96rem] gap-10 px-4 py-14 sm:px-5 lg:grid-cols-[1.35fr_0.55fr_0.55fr] lg:px-6 lg:py-16">
            <div>
              <p className="label-kicker text-[var(--brand-teal)]">Depth LLC</p>
              <h2 className="mt-8 max-w-3xl text-[3rem] font-semibold leading-[0.94] tracking-[-0.045em] sm:text-[4.25rem]">
                Consequence intelligence for the physical world.
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/60">
                A deep-technology company building the decision layer for defense, aerospace,
                infrastructure, robotics, and other high-consequence operating environments.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/38">Company</p>
              <a href="#top" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Overview</a>
              <Link to="/manifesto" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Manifesto</Link>
              <Link to="/team" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Leadership</Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/38">Engage</p>
              <a href="#contact" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Contact</a>
              <a href="mailto:glory@depth.ai?subject=Depth%20Mission%20Briefing" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Mission briefing</a>
              <a href="#defense" className="text-[1.35rem] tracking-[-0.03em] text-white/88 hover:text-[var(--brand-teal)]" onClick={() => setCompanyOpen(false)}>+ Federal readiness</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
