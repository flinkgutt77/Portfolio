# Din Kebab Pizza & Grill — Nettside Design
**Dato:** 2026-05-30
**Status:** Godkjent av Umar Javed

---

## Oversikt

En nettside for Din Kebab Pizza & Grill (Lambertseter, Oslo) som lar kunder bla gjennom hele menyen, legge varer i handlekurv og sende bestilling. Betaling skjer ved henting i restauranten — ingen betalingsintegrasjon nødvendig. Ordrevarsler sendes automatisk til restauranten via Telegram.

---

## Plattform & Teknologi

| Komponent | Valg | Begrunnelse |
|---|---|---|
| **Framework** | Next.js (App Router) | Samme som UJ Studio portfolio — gjenbruk av kunnskap og setup |
| **Hosting** | Vercel (gratis) | Allerede konto, nullkostnad |
| **Menydata** | Hardkodet i koden | Enklere enn API-kall; menyen endres sjelden |
| **Ordrevarsel** | n8n webhook → Telegram | Allerede satt opp og testet |
| **Ingen** | Betalingsløsning | Kunden betaler ved henting |

---

## Design System

Basert på restaurantens fysiske meny:

| Element | Verdi |
|---|---|
| **Bakgrunn hero** | `linear-gradient(135deg, #5a9a00, #7DC61F, #C8E831)` |
| **Bakgrunn sider** | `#111111` (mørk) |
| **Bakgrunn kort** | `#1a1a1a` |
| **Grønn aksent** | `#7DC61F` |
| **Lys grønn** | `#C8E831` |
| **Pris farge** | `#C8E831` (gul-grønn) |
| **Tekst primær** | `#ffffff` |
| **Tekst sekundær** | `#666666` |
| **Knapp primær** | Grønn fylt (`#7DC61F`, svart tekst) |
| **Font** | `font-weight: 900` for overskrifter (bold og fet) |

---

## Sidestruktur

### 1. 🏠 Hjemside / Hero
- Navigasjonsbar: Logo + menylenker + handlekurv-ikon (antall varer)
- Hero med grønn gradient: Restaurantnavn, tagline, "Bestill nå" knapp
- Stats: Antall retter, startpris (fra 99,-), vurdering
- Kategorifaner: 🍕 Pizza · 🥙 Kebab · 🍔 Burger · 🍟 Sides · 🥤 Drikke

### 2. 📋 Meny
- Filtrering per kategori (Pizza, Kebab, Hamburger, Sides, Salat, Drikke)
- Hvert menykort viser:
  - Navn (fet, hvit)
  - Beskrivelse (grå)
  - Størrelses-/variantvalg (H/S/M for pizza, Medium/Stor for kebab)
  - Pris (grønn)
  - "+ Legg til" knapp
- Flytende handlekurv-bar nederst (vises når handlekurv har varer)

### 3. 🛒 Handlekurv / Bestillingsskjema
- Bestillingsoversikt med alle valgte varer + størrelser
- Skjema: Navn (påkrevd), Telefon (påkrevd), Hentingstid (valgfri)
- Totalsum
- "Send bestilling" knapp
- Infotekst: "Betaling skjer ved henting i restauranten"

### 4. ✅ Bekreftelsesside
- Ordrenummer
- Oppsummering av bestillingen
- Forventet hentingstid
- Kontaktinfo til restauranten

---

## Ordreflyt

```
1. Kunde blar gjennom menyen
2. Velger størrelse og trykker "+ Legg til"
3. Varer legges i handlekurv (React state + localStorage)
4. Kunden fyller inn navn, telefon, hentingstid
5. Trykker "Send bestilling"
6. POST → n8n webhook (https://n8n.ujstudionorge.com/webhook/kebab-orders)
7. n8n sender Telegram-varsel til restaurantens gruppe (-4964846993)
8. Kunden ser bekreftelsesside med ordrenummer
```

### Telegram-melding format
```
🆕 Ny bestilling #[ordrenr]!

👤 [navn]
📞 [telefon]
⏰ Hentes: [tid]

🍕 [vare] ([størrelse]) — [pris],-
🥙 [vare] ([størrelse]) — [pris],-

💰 Totalt: [sum],–
💳 Betales ved henting
```

---

## Menydata

Full meny fra Google Sheet (`1Xrq185-bFivGmgwaSF-IX3XcAOa3VlQs`) hardkodes i `lib/menu.ts`:

| Kategori | Antall retter |
|---------|--------------|
| Pizza | 22 retter (størrelser H/S/M: 204–274 NOK) |
| Kebab | Pita, rull, tallerken med/uten drikke (99–269 NOK) |
| Hamburger | Burger, cheeseburger, kylling, fisk, løvstek (109–219 NOK) |
| Sides | Pommes frites, søtpotet frites (60–99 NOK) |
| Salat | Kyllingsalat (190 NOK) |
| Drikke | 0,5L / 1,5L (39–59 NOK) |

---

## Filstruktur

```
din-kebab/                          ← nytt repo / mappe
├── app/
│   ├── layout.tsx                  ← global layout, font, metadata
│   ├── page.tsx                    ← hjemside med hero + meny
│   ├── bestilling/
│   │   └── page.tsx                ← handlekurv + skjema
│   └── bekreftelse/
│       └── page.tsx                ← ordrebekreftelse
├── components/
│   ├── Navbar.tsx                  ← logo + nav + handlekurv-ikon
│   ├── Hero.tsx                    ← grønn gradient hero
│   ├── MenuSection.tsx             ← kategorifaner + menykort
│   ├── MenuItem.tsx                ← enkelt menykort med størrelsesvalg
│   ├── CartBar.tsx                 ← flytende handlekurv-bar
│   └── OrderForm.tsx               ← skjema for navn/tlf/tid
├── lib/
│   ├── menu.ts                     ← all menydata hardkodet
│   └── cart.ts                     ← handlekurv-logikk (context/state)
├── public/
│   └── logo.png                    ← restaurantens logo (trengs fra klient)
└── package.json
```

---

## n8n Integrasjon

Eksisterende workflow `ZEFKOkNT7bFZtK0Q` brukes.
Webhook URL: `https://n8n.ujstudionorge.com/webhook/kebab-orders`

Nytt POST-payload fra nettsiden:
```json
{
  "order_number": "1042",
  "customer_name": "Ahmed Hassan",
  "customer_phone": "+47 123 45 678",
  "pickup_time": "18:30",
  "items": [
    { "name": "Lambertseter Spesial", "size": "M", "price": 239 },
    { "name": "Kebab i Pitabrød", "size": "Medium", "price": 99 }
  ],
  "total": 338,
  "source": "website"
}
```

---

## Avhengigheter

- [ ] Restaurantens logo (PNG) — hentes fra klient
- [ ] Bekreftet Telegram gruppe-ID (`-4964846993`) — allerede testet
- [ ] Domenenavn (valgfritt) — kan bruke `din-kebab.vercel.app` gratis

---

## Neste Steg

1. Implementasjonsplan (writing-plans)
2. Bygg Next.js app
3. Koble n8n webhook
4. Test ordreflyt
5. Deploy til Vercel
