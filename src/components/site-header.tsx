import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'DCE', href: '#platform' },
  { label: 'Applications', href: '#use-cases' },
  { label: 'Validation', href: '#proof' },
]

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null)
  const [headerTextTone, setHeaderTextTone] = useState<'light' | 'dark'>('light')
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

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between px-4 py-5 sm:px-5 lg:px-6">
        <Link
          className={`font-logo text-[18px] font-semibold tracking-[0.12em] transition-colors ${headerTextTone === 'dark' ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'}`}
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
            <Link
              to="/team"
              className={`font-heading text-[14px] font-normal tracking-[-0.01em] transition-colors ${textClass}`}
            >
              Team
            </Link>
          )}
          {isHome && (
            <Link
              to="/manifesto"
              className={`font-heading text-[14px] font-normal tracking-[-0.01em] transition-colors ${textClass}`}
            >
              Manifesto
            </Link>
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
    </header>
  )
}
