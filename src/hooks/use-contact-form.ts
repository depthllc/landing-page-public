import { useState } from 'react'

export type ContactPayload = {
  name: string
  email: string
  organization: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function useContactForm(endpoint = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/api/contact') {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function submit(payload: ContactPayload) {
    setStatus('submitting')
    setError(null)

    try {
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

  return { submit, reset, status, error }
}
