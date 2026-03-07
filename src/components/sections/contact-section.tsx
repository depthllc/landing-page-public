import { useState } from 'react'
import type { FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useContactForm } from '@/hooks/use-contact-form'
import type { ContactPayload } from '@/hooks/use-contact-form'

const initialForm: ContactPayload = {
  name: '',
  email: '',
  organization: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<ContactPayload>(initialForm)
  const { submit, status, error, reset } = useContactForm()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await submit(form)
  }

  function setField(field: keyof ContactPayload, value: string) {
    if (status !== 'idle') reset()
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" data-header-text="light" className="bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-[96rem] gap-10 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-6">
        <div>
          <p className="label-kicker">Request Briefing</p>
          <h2 className="section-headline mt-4 max-w-3xl">
            Evaluate where DCE becomes a required input.
          </h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-foreground/75">
            If you are working on a high-consequence workflow, describe the operating context and where consequence forecasting could change a decision. Depth will assess how DCE enters your stack as Consequence Intelligence Infrastructure.
          </p>
        </div>
        <form className="space-y-4 bg-white/[0.04] p-6 sm:p-8" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(event) => setField('name', event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(event) => setField('email', event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              required
              value={form.organization}
              onChange={(event) => setField('organization', event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Describe your workflow and where consequence forecasting matters.</Label>
            <Textarea
              id="message"
              required
              className="min-h-32"
              value={form.message}
              onChange={(event) => setField('message', event.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-none text-sm uppercase tracking-[0.18em]"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Request Briefing'}
          </Button>
          {status === 'success' && (
            <p className="text-sm text-primary">
              Request received. Depth will follow up to discuss the workflow.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-destructive">
              {error ?? 'Submission failed. Please try again in a few minutes.'}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
