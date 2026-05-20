# Contact Page Design

## Goal

Create a dedicated `/contact` route so the Instagram bio link (`ujstudionorge.com/contact`) opens directly on the contact form — no homepage scroll, fast on mobile.

## Approach

- Add `app/contact/page.tsx` — a standard Next.js App Router page
- Reuse the existing `<Contact />` component (no duplication, no changes to homepage)
- Wrap with `<Navbar />` and `<Footer />` for consistent site chrome
- Add `metadata` export for SEO (`title`, `description`)

## Out of scope

- No changes to homepage or existing Contact component
- No Linktree-style landing page (YAGNI)
- No redirect from `/#contact` to `/contact`

## Instagram bio link

Set to: `https://ujstudionorge.com/contact`
