const navItems = [
  { label: 'Defense', href: '#domains' },
  { label: 'Autonomous Systems', href: '#domains' },
  { label: 'Robotics', href: '#domains' },
  { label: 'Platform', href: '#platform' },
]

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between px-4 py-5 sm:px-5 lg:px-6">
        <a className="font-heading text-[13px] font-semibold uppercase tracking-[0.12em]" href="#top">
          Depth.ai
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="text-[14px] font-normal tracking-[-0.01em] text-foreground/82 transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-[14px] tracking-[-0.01em] text-foreground/82 transition-colors hover:text-foreground"
        >
          Contact +
        </a>
      </div>
    </header>
  )
}
