const defaultToEmail = 'info@depth.ai'
const defaultFromEmail = 'Depth Website <noreply@depth.ai>'

function json(response, status, payload) {
  response.status(status).json(payload)
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function clean(value, maxLength) {
  return String(value ?? '')
    .replace(/\r/g, '')
    .trim()
    .slice(0, maxLength)
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function renderEmailHtml(payload) {
  const rows = [
    ['Name', payload.name],
    ['Email', payload.email],
    ['Organization', payload.organization],
    ['Message', payload.message],
  ]

  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#05090f;color:#edf6ff;padding:32px;">
      <div style="max-width:680px;margin:0 auto;border:1px solid rgba(151,202,239,.22);padding:28px;background:#08111b;">
        <p style="margin:0 0 16px;color:#1fb6b2;font-size:12px;letter-spacing:.18em;text-transform:uppercase;">Depth Website Request</p>
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.15;">New briefing request</h1>
        ${rows
          .map(
            ([label, value]) => `
              <div style="border-top:1px solid rgba(151,202,239,.16);padding:16px 0;">
                <p style="margin:0 0 6px;color:#8295a6;font-size:12px;letter-spacing:.12em;text-transform:uppercase;">${label}</p>
                <p style="margin:0;color:#edf6ff;font-size:16px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(value)}</p>
              </div>
            `,
          )
          .join('')}
      </div>
    </div>
  `
}

function renderEmailText(payload) {
  return [
    'New Depth website briefing request',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')
}

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return json(response, 204, {})
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return json(response, 405, { message: 'Method not allowed.' })
  }

  const payload = {
    name: clean(request.body?.name, 120),
    email: clean(request.body?.email, 180).toLowerCase(),
    organization: clean(request.body?.organization, 180),
    message: clean(request.body?.message, 4000),
  }

  if (!payload.name || !payload.email || !payload.organization || !payload.message) {
    return json(response, 400, { message: 'Please complete every required field.' })
  }

  if (!isValidEmail(payload.email)) {
    return json(response, 400, { message: 'Please enter a valid work email.' })
  }

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return json(response, 500, {
      message: 'Contact email service is not configured. Missing RESEND_API_KEY.',
    })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || defaultToEmail
  const fromEmail = process.env.CONTACT_FROM_EMAIL || defaultFromEmail

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `Depth briefing request - ${payload.organization}`,
      html: renderEmailHtml(payload),
      text: renderEmailText(payload),
    }),
  })

  const resendData = await resendResponse.json().catch(() => null)

  if (!resendResponse.ok) {
    return json(response, 502, {
      message: resendData?.message || 'Unable to send request email.',
    })
  }

  return json(response, 200, {
    ok: true,
    id: resendData?.id,
    message: 'Request sent.',
  })
}
