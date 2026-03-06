import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { getPublicAssetUrl } from '@/lib/assets'

const cards = [
  {
    title: 'Domain-Agnostic',
    subtitle: 'Different domain adapters. Same core engine.',
    media: getPublicAssetUrl('/defense_card_bg.png'),
  },
  {
    title: 'Embed-First',
    subtitle: 'Required input layer, not a dashboard.',
    media: getPublicAssetUrl('/autonomy_card_bg.png'),
  },
  {
    title: 'Defense-Hardened Deployment',
    subtitle: 'Containerized, secure, API-accessible integration.',
    media: getPublicAssetUrl('/robotics_card_bg.png'),
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
    let timeline: gsap.core.Timeline | undefined
    let resizeFrame = 0
    let cancelled = false
    const setPlaybackRate = () => {
      video.playbackRate = 0.4
    }
    const buildSplit = () => {
      split?.revert()
      split = new SplitType(headline, { types: 'lines' })
      return split.lines ?? []
    }
    const showResolvedLines = (lines: HTMLElement[] = split?.lines ?? []) => {
      gsap.set(overlay, { autoAlpha: 1 })
      gsap.set(lines, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        clearProps: 'overflow',
      })
    }

    setPlaybackRate()
    video.addEventListener('loadedmetadata', setPlaybackRate)
    video.addEventListener('play', setPlaybackRate)

    const initializeHero = async () => {
      try {
        await document.fonts.ready
      } catch {
        // If the browser does not fully support FontFaceSet readiness, continue with current metrics.
      }
      if (cancelled) return

      const lines = buildSplit()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        showResolvedLines(lines)
        return
      }

      gsap.set(overlay, { autoAlpha: 1 })
      gsap.set(lines, { overflow: 'hidden' })
      gsap.set(lines, { autoAlpha: 0, y: 28, filter: 'blur(10px)' })

      timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
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
      timeline.to(
        lines,
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.05,
          stagger: 0.11,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(lines, { clearProps: 'overflow' })
          },
        },
        0.14,
      )
    }

    const handleResize = () => {
      if (resizeFrame) cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(() => {
        if (!headlineRef.current) return
        timeline?.kill()
        const lines = buildSplit()
        showResolvedLines(lines)
      })
    }

    initializeHero()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelled = true
      timeline?.kill()
      if (resizeFrame) cancelAnimationFrame(resizeFrame)
      window.removeEventListener('resize', handleResize)
      video.removeEventListener('loadedmetadata', setPlaybackRate)
      video.removeEventListener('play', setPlaybackRate)
      split?.revert()
    }
  }, [])

  return (
    <section id="top" data-header-text="light" className="bg-background">
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
              <source src={getPublicAssetUrl('/digital-twin.mp4')} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/72" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.48),rgba(0,0,0,.14)_18%,rgba(0,0,0,.14)_62%,rgba(0,0,0,.82))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.54)_56%,rgba(0,0,0,0.78)_100%)]" />

            <div
              ref={overlayRef}
              className="absolute inset-0 flex items-center justify-center px-6 text-center"
            >
              <div className="pointer-events-none mx-auto max-w-[21rem] sm:max-w-[46rem] lg:max-w-[68rem] xl:max-w-[72rem]">
                <p
                  ref={kickerRef}
                  className="mb-4 font-sans text-[11px] uppercase tracking-[0.26em] text-white/70 sm:mb-6 sm:text-[12px]"
                >
                  Consequence Intelligence Infrastructure
                </p>
                <h1
                  ref={headlineRef}
                  className="text-[2.25rem] font-[600] uppercase leading-[1.02] tracking-[-0.038em] text-white sm:text-[4.15rem] sm:leading-[0.98] lg:text-[5.4rem] lg:leading-[0.94]"
                >
                  Decisive Intelligence for Critical-Path Integration
                </h1>
                <p className="mx-auto mt-5 max-w-[44rem] text-base leading-relaxed text-white/78 sm:mt-6 sm:max-w-[50rem] sm:text-[1.0625rem] lg:max-w-[54rem]">
                  The Depth Consequence Engine (DCE) is a modular, API-first, containerized
                  reasoning engine that turns physical events into Decisive Intelligence across
                  structural, human, and operational consequence. Validated in defense, DCE is
                  designed for Critical-Path Integration inside formal planning workflows.
                </p>
              </div>
            </div>
          </article>

          <div id="pillars" className="mt-1.5 grid gap-1.5 sm:mt-2 sm:grid-cols-3 sm:gap-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${card.media})` }}
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
