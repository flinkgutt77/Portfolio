import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ??
  'https://mortified-upright-oops.ngrok-free.dev/webhook/681061ad-aedf-46ab-ae07-83b34d778bc9'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const submittedAt = new Date().toISOString()

    // 1. Send Telegram notification via n8n
    await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify({ name, email, phone: phone || '', service: service || 'Not specified', message, submittedAt }),
    }).catch(() => {}) // Don't block if n8n is down

    // 2. Send confirmation email to client via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'UJ Studio Norge <onboarding@resend.dev>',
        to: email,
        subject: `Thank you for your inquiry, ${name}!`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid #222222;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 30px;border-bottom:1px solid #222222;text-align:center;">
              <p style="margin:0;color:#c9a96e;font-size:11px;letter-spacing:4px;text-transform:uppercase;">UJ STUDIO</p>
              <p style="margin:4px 0 0;color:#888888;font-size:9px;letter-spacing:6px;text-transform:uppercase;">NORGE</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h1 style="margin:0 0 8px;color:#f5f0e8;font-size:28px;font-weight:normal;font-family:Georgia,serif;">
                Thank you, ${name}!
              </h1>
              <p style="margin:0 0 24px;color:#c9a96e;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                Your inquiry has been received
              </p>

              <div style="width:40px;height:1px;background:#c9a96e;margin:0 0 30px;"></div>

              <p style="margin:0 0 16px;color:#888888;font-size:15px;line-height:1.7;">
                We have received your inquiry and will personally get back to you within <strong style="color:#f5f0e8;">24 hours</strong>.
              </p>
              <p style="margin:0 0 30px;color:#888888;font-size:15px;line-height:1.7;">
                We look forward to working with you and creating something remarkable together.
              </p>

              <!-- Inquiry summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid #222222;margin-bottom:30px;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #1a1a1a;">
                    <p style="margin:0;color:#888888;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Service Requested</p>
                    <p style="margin:6px 0 0;color:#f5f0e8;font-size:14px;">${service || 'General Inquiry'}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0;color:#888888;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Your Message</p>
                    <p style="margin:6px 0 0;color:#f5f0e8;font-size:14px;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://ujstudionorge.com"
                       style="display:inline-block;background:#c9a96e;color:#0a0a0a;text-decoration:none;font-size:11px;letter-spacing:3px;text-transform:uppercase;padding:14px 32px;">
                      View Our Portfolio
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222222;text-align:center;">
              <p style="margin:0;color:#555555;font-size:12px;line-height:1.6;">
                UJ Studio Norge &nbsp;·&nbsp;
                <a href="https://instagram.com/ujstudionorge" style="color:#555555;">Instagram</a> &nbsp;·&nbsp;
                <a href="https://ujstudionorge.com" style="color:#555555;">ujstudionorge.com</a>
              </p>
              <p style="margin:8px 0 0;color:#333333;font-size:11px;">
                © ${new Date().getFullYear()} UJ Studio Norge. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
