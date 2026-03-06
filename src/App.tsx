import { ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { PipelineSection } from '@/components/sections/pipeline-section'
import { ProofSection } from '@/components/sections/proof-section'
import { UseCasesSection } from '@/components/sections/use-cases-section'
import { SiteHeader } from '@/components/site-header'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <PipelineSection />
        <UseCasesSection />
        <ProofSection />
        <ContactSection />
      </main>
      <footer>
        <div className="mx-auto flex max-w-[96rem] flex-col gap-2 px-4 py-8 text-[12px] uppercase tracking-[0.18em] text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
          <p className="font-logo text-[18px] font-semibold normal-case tracking-[0.12em] text-foreground/72">
            depth
          </p>
          <p className="normal-case">
            Consequence intelligence infrastructure for defense and adjacent high-consequence
            domains
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
