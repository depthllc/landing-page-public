import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

const cards = [
  {
    title: 'Defense',
    subtitle: 'Mission decision terrain',
    media: 'bg-[url(/defense_card_bg.png)] bg-cover bg-center',
  },
  {
    title: 'Autonomous Systems',
    subtitle: 'Real-time mission autonomy',
    media: 'bg-[url(/autonomy_card_bg.png)] bg-cover bg-center',
  },
  {
    title: 'Robotics',
    subtitle: 'Spatial intelligence for machines',
    media: 'bg-[url(/robotics_card_bg.png)] bg-cover bg-center',
  },
]

export function HeroSection() {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const kickerRef = useRef<HTMLParagraphElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useLayoutEffect(() => {
    const overlay = overlayRef.current
    const headline = headlineRef.current
    const kicker = kickerRef.current
    const video = videoRef.current
    if (!overlay || !headline || !video) return

    let split: SplitType | undefined
    const setPlaybackRate = () => {
      video.playbackRate = 0.4
    }

    setPlaybackRate()
    video.addEventListener('loadedmetadata', setPlaybackRate)
    video.addEventListener('play', setPlaybackRate)

    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(overlay, { autoAlpha: 1 })
        return
      }

      split = new SplitType(headline, { types: 'lines' })
      gsap.set(overlay, { autoAlpha: 1 })
      gsap.set(split.lines, { overflow: 'hidden' })
      gsap.set(split.lines, { autoAlpha: 0, y: 28, filter: 'blur(10px)' })

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      if (kicker) {
        timeline.fromTo(
          kicker,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 0.72, y: 0, duration: 0.45 },
          0.05,
        )
      }

      timeline.fromTo(
        overlay,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.25 },
        0,
      )
      timeline.to(split.lines, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.05,
        stagger: 0.11,
        ease: 'power2.out',
      }, 0.14)
    }, overlay)

    return () => {
      video.removeEventListener('loadedmetadata', setPlaybackRate)
      video.removeEventListener('play', setPlaybackRate)
      split?.revert()
      ctx.revert()
    }
  }, [])

  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <div className="flex min-h-[100svh] flex-col justify-end pb-4 pt-14 sm:pb-5 sm:pt-16">
          <article className="relative overflow-hidden">
            <video
              ref={videoRef}
              className="h-[58svh] min-h-[24rem] w-full scale-[1.015] object-cover brightness-[0.62] saturate-[0.82] sm:h-[68vh] lg:h-[76vh]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/digital-twin.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/72" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.48),rgba(0,0,0,.14)_18%,rgba(0,0,0,.14)_62%,rgba(0,0,0,.82))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.54)_56%,rgba(0,0,0,0.78)_100%)]" />

            <div
              ref={overlayRef}
              className="absolute inset-0 flex items-center justify-center px-6 text-center"
            >
              <div className="pointer-events-none mx-auto max-w-[21rem] sm:max-w-[40rem] lg:max-w-[52rem]">
                <p
                  ref={kickerRef}
                  className="mb-4 font-mono text-[11px] uppercase tracking-[0.26em] text-white/70 sm:mb-6 sm:text-[12px]"
                >
                  Decision Terrain Engine
                </p>
                <h1
                  ref={headlineRef}
                  className="text-[2.25rem] font-semibold uppercase leading-[0.87] tracking-[-0.038em] text-white sm:text-[4.15rem] lg:text-[5.4rem]"
                >
                  Turning critical data into 3D operational context
                </h1>
              </div>
            </div>
          </article>

          <div id="domains" className="mt-1.5 grid gap-1.5 sm:mt-2 sm:grid-cols-3 sm:gap-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`group relative overflow-hidden ${card.media}`}
              >
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.48),rgba(0,0,0,.14)_18%,rgba(0,0,0,.14)_62%,rgba(0,0,0,.82))] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.54)_56%,rgba(0,0,0,0.78)_100%)] pointer-events-none" />
                <div className="relative flex min-h-[10rem] flex-col justify-start p-4 sm:min-h-[13rem] sm:p-5 lg:min-h-[14rem]">
                  <h3 className="text-[1.375rem] font-semibold tracking-tight text-white sm:text-[1.65rem]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.08em] font-medium text-white/90">
                    {card.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
