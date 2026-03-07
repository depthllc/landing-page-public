import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { getPublicAssetUrl } from '@/lib/assets'

const loops = [
  {
    name: 'Installation resilience',
    copy: 'Estimate infrastructure damage, system degradation, and recovery priorities before cascading consequences widen the resilience gap.',
    video: getPublicAssetUrl('/national-defense.mp4'),
    poster: getPublicAssetUrl('/defense_card_bg.png'),
  },
  {
    name: 'Operational consequence forecasting',
    copy: 'Model structural, human, and operational consequence so teams can act before planning assumptions fail.',
    video: getPublicAssetUrl('/auto-system.mp4'),
    poster: getPublicAssetUrl('/autonomy_card_bg.png'),
  },
  {
    name: 'Mitigation prioritization',
    copy: 'Surface resilience gaps and operational tradeoffs so planners can act on the highest-consequence decision first.',
    video: getPublicAssetUrl('/robotics.mp4'),
    poster: getPublicAssetUrl('/robotics_card_bg.png'),
  },
]

export function UseCasesSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  useLayoutEffect(() => {
    const videos = videoRefs.current.filter((video): video is HTMLVideoElement => video !== null)
    const cleanups = videos.map((video) => {
      const setPlaybackRate = () => {
        video.playbackRate = 0.4
      }

      setPlaybackRate()
      video.addEventListener('loadedmetadata', setPlaybackRate)
      video.addEventListener('play', setPlaybackRate)

      return () => {
        video.removeEventListener('loadedmetadata', setPlaybackRate)
        video.removeEventListener('play', setPlaybackRate)
      }
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <section id="use-cases" data-header-text="light" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-5 lg:px-6">
        <p className="label-kicker">Applications</p>
        <h2 className="section-headline mt-4 max-w-5xl">
          Where DCE enters the workflow.
        </h2>

        <div className="mt-10 grid gap-2 lg:grid-cols-3">
          {loops.map((loop, index) => (
            <article
              key={loop.name}
              className="group relative overflow-hidden"
            >
              <video
                ref={(node) => {
                  videoRefs.current[index] = node
                }}
                className="absolute inset-0 h-full w-full scale-[1.03] object-cover brightness-[0.62] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.06]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={loop.poster}
              >
                <source src={loop.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/72 transition-colors group-hover:bg-black/64" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.42),rgba(0,0,0,.16)_22%,rgba(0,0,0,.2)_58%,rgba(0,0,0,.8))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.52)_58%,rgba(0,0,0,0.76)_100%)]" />
              <div className="relative flex h-full min-h-[24rem] flex-col justify-between sm:min-h-[27rem]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-foreground/70">
                    Planning Loop
                  </p>
                  <h3 className="mt-3 text-[2.25rem] font-semibold leading-[0.94] sm:text-[2.75rem]">
                    {loop.name}
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/75 sm:text-[1.0625rem]">
                    {loop.copy}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 pb-5 font-sans text-[12px] uppercase tracking-[0.18em] text-foreground/90 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7"
                >
                  Discuss workflow
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
