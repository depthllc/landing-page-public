import { useState } from 'react'

export type ContactPayload = {
  name: string
  email: string
  organization: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'
type DeliveryMode = 'endpoint' | 'email'

const fallbackEmail = 'glory@depth.ai'

function buildMailtoUrl(payload: ContactPayload) {
  const subject = encodeURIComponent(`Depth briefing request from ${payload.name}`)
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Organization: ${payload.organization}`,
      '',
      'Workflow / request:',
      payload.message,
    ].join('\n'),
  )

  return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`
}

const defaultEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'

export function useContactForm(endpoint = defaultEndpoint) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('endpoint')

  async function submit(payload: ContactPayload) {
    setStatus('submitting')
    setError(null)

    try {
      if (!endpoint) {
        window.location.href = buildMailtoUrl(payload)
        setDeliveryMode('email')
        setStatus('success')
        return
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null
        throw new Error(data?.message ?? 'Unable to submit request. Please try again.')
      }

      setDeliveryMode('endpoint')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Unexpected error.')
    }
  }

  function reset() {
    setStatus('idle')
    setError(null)
  }

  return { submit, reset, status, error, deliveryMode }
}
