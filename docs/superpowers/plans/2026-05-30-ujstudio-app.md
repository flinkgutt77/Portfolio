# UJ Studio Norge App — Implementasjonsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Mål:** Bygg UJ Studio Norge Portfolio & Booking app i Base44 med 5 skjermer, koble n8n for booking-varsler, og publiser til Google Play via PWABuilder.

**Arkitektur:** Base44 håndterer UI og datalagring. n8n mottar webhook ved ny booking og sender Telegram + e-post varsel. PWABuilder konverterer web-appen til Android-pakke for Google Play.

**Tech Stack:** Base44 (app builder), n8n (webhook/varsler), PWABuilder (Android publisering), Canva (app ikon)

---

## Oppgave 1: Opprett Booking Entity i Base44

**Mål:** Sett opp datamodellen for bookingforespørsler.

- [ ] **Steg 1: Opprett Booking entity**

  Gå til Base44 app → Data → Add Entity → navn: `Booking`

  Legg til disse feltene:
  ```
  customer_name    → Text (required)
  customer_phone   → Text (required)
  customer_email   → Email (required)
  service          → Select (required)
                     Options: bryllup, bursdag, portrett, mote, reklame, signage
  preferred_date   → Date (required)
  message          → Long Text
  status           → Select, default: ny
                     Options: ny, bekreftet, avslatt
  ```

- [ ] **Steg 2: Verifiser entity**

  Gå til Data → Booking → klikk "Add record" → fyll inn testdata → lagre.
  Forventet: Booking vises i listen med status "ny".

- [ ] **Steg 3: Slett testdata**

  Slett testraden. Entity er klar.

---

## Oppgave 2: Bygg Hjemskjerm

**Mål:** Lag hjemskjermen med hero, stats og CTA knapper i sort/gull design.

- [ ] **Steg 1: Sett opp design tokens**

  I Base44 → Settings → Theme, sett:
  ```
  Primary color:    #c9a84c  (gull)
  Background:       #0a0a0a  (sort)
  Surface color:    #1a1a2e  (navy)
  Text primary:     #ffffff
  Text secondary:   #666666
  ```

- [ ] **Steg 2: Bygg Hero-seksjon**

  Legg til på hjemskjermen:
  ```
  - Logo/tekst: "UJ STUDIO NORGE" (liten, gull, letter-spacing)
  - Overskrift: "Crafting Visual" (hvit, lett font)
  - Undertittel: "Stories That Last Forever" (gull, fet)
  - Avstand under: 24px
  ```

- [ ] **Steg 3: Legg til Stats-rad**

  3 kort side om side:
  ```
  Kort 1: "150+" / "Bryllup"
  Kort 2: "10+" / "År erfaring"
  Kort 3: "★ 5.0" / "Vurdering"
  Bakgrunn: #1a1a2e, border: #333, tekst: gull/grå
  ```

- [ ] **Steg 4: Legg til CTA-knapper**

  ```
  Knapp 1 (primær, gull fylt):  "📅 Book en økt"  → navigerer til Booking-skjerm
  Knapp 2 (outline, gull):      "📸 Se Portfolio"  → navigerer til Portfolio-skjerm
  ```

- [ ] **Steg 5: Legg til bunnmeny**

  5 ikoner i bunnmeny:
  ```
  🏠 Hjem | 📸 Portfolio | 💰 Priser | ⭐ Omtaler | 👤 Om oss
  Aktiv farge: #c9a84c | Inaktiv: #666666
  ```

- [ ] **Steg 6: Preview og verifiser**

  Klikk Preview i Base44. Sjekk:
  - Sort bakgrunn ✓
  - Gull aksenter ✓
  - Knapper fungerer ✓
  - Bunnmeny vises ✓

---

## Oppgave 3: Bygg Portfolio-skjerm

**Mål:** Filtrerbart bildegalleri med 6 kategorier.

- [ ] **Steg 1: Opprett Portfolio-skjerm**

  Base44 → Pages → Add Page → navn: "Portfolio"

- [ ] **Steg 2: Legg til kategorifilter**

  Filter-knapper øverst:
  ```
  Alle | Bryllup | Portrett | Reklame | Signage | Mote
  Aktiv: gull bakgrunn + sort tekst
  Inaktiv: #1a1a2e bakgrunn + grå tekst
  ```

- [ ] **Steg 3: Legg til bildegrid**

  2-kolonne grid under filteret:
  ```
  - Last opp 10-15 bilder fra ujstudionorge portfolio
  - Hvert bilde har kategori-tag
  - Filteret skjuler/viser basert på kategori
  ```

- [ ] **Steg 4: Legg til fullskjerm-visning**

  Klikk på bilde → åpner fullskjerm modal med:
  ```
  - Stort bilde
  - Kategori-label (gull)
  - X knapp for å lukke
  ```

- [ ] **Steg 5: Verifiser filtrering**

  Preview → klikk "Bryllup" → kun bryllupsbilder vises.
  Klikk "Alle" → alle bilder vises.

---

## Oppgave 4: Bygg Priser & Tjenester-skjerm

**Mål:** Vis alle 6 tjenester med ikon, navn, beskrivelse og pris.

- [ ] **Steg 1: Opprett Priser-skjerm**

  Base44 → Pages → Add Page → navn: "Priser"

- [ ] **Steg 2: Bygg tjenestekort**

  Lag 6 kort med dette innholdet:
  ```
  1. 💒 Bryllupsfotografi & Film
     "Full dag dekning, redigert film og bildegalleri"
     Fra 15 000 NOK

  2. 🎂 Bursdagsfotografi & Film
     "Profesjonell dokumentasjon av din spesielle dag"
     Fra 5 000 NOK

  3. 👨‍👩‍👧 Familieportretter
     "Tidløse familiebilder i studio eller utendørs"
     Fra 3 000 NOK

  4. 👗 Motefotografi & Film
     "Kreative mote- og portrettopptak"
     Fra 4 000 NOK

  5. 📢 Reklamefotografi & Film
     "Profesjonell innholdsproduksjon for bedrifter"
     Fra 8 000 NOK

  6. 🖥️ Digital Skilting (Yodeck)
     "Dynamiske skjermer for restaurant og butikk"
     Fra 500 NOK/mnd per skjerm
  ```

  Hvert kort: `#1a1a2e` bakgrunn, gull ikon-farge, hvit tekst, gull pris.

- [ ] **Steg 3: Legg til "Book nå" knapp per tjeneste**

  Hvert kort har liten gull outline-knapp → navigerer til Booking-skjerm med
  forhåndsvalgt tjeneste.

- [ ] **Steg 4: Verifiser**

  Preview → alle 6 tjenester vises → "Book nå" knapp navigerer til booking.

---

## Oppgave 5: Bygg Omtaler & Instagram-skjerm

**Mål:** Vis kundeomtaler og Instagram feed.

- [ ] **Steg 1: Opprett Omtaler-skjerm**

  Base44 → Pages → Add Page → navn: "Omtaler"

- [ ] **Steg 2: Legg til 6 kundeomtaler**

  Bruk disse (fra ujstudionorge.com):
  ```
  1. ★★★★★ — "Umar fanget våre bryllupsøyeblikk perfekt!"
     — Sara & Ahmed, Oslo

  2. ★★★★★ — "Fantastisk reklamefilm for vår restaurant"
     — Mohammed, Din Kebab Oslo

  3. ★★★★★ — "Digitale skjermer har økt salget vårt med 30%"
     — Restauranteier, Oslo

  4. ★★★★★ — "Bursdagsbildene er magiske, vi gråt av glede"
     — Fatima, Bergen

  5. ★★★★★ — "Profesjonell og kreativ — anbefales sterkt!"
     — Priya & Ehtisham, Oslo

  6. ★★★★★ — "Vår nye profil passer perfekt takket være UJ Studio"
     — Bedriftskunde, Drammen
  ```

  Hvert kort: `#1a1a2e` bakgrunn, gull stjerner, hvit tekst, grå navn.

- [ ] **Steg 3: Legg til Instagram embed**

  Under omtalene, legg til Instagram feed embed:
  ```
  URL: https://www.instagram.com/ujstudionorge/
  Vis som: grid med 6 siste bilder
  ```

  Alternativt: bruk Elfsight Instagram widget (gratis, embed-kode).

- [ ] **Steg 4: Verifiser**

  Preview → alle 6 omtaler vises → Instagram embed lastes.

---

## Oppgave 6: Bygg Om UJ Studio-skjerm

**Mål:** Presenter Umar og UJ Studio profesjonelt.

- [ ] **Steg 1: Opprett Om-skjerm**

  Base44 → Pages → Add Page → navn: "Om oss"

- [ ] **Steg 2: Legg til profilseksjon**

  ```
  - Profilbilde av Umar (sirkulær, 120x120px)
  - Navn: "Umar Javed" (hvit, stor)
  - Tittel: "Fotograf & Filmskaper" (gull)
  - Lokasjon: "📍 Norge"
  ```

- [ ] **Steg 3: Legg til bio-tekst**

  ```
  "Med over 10 års erfaring som fotograf og filmskaper i Norge,
  spesialiserer UJ Studio Norge seg på å skape tidløse visuelle
  fortellinger. Fra bryllup og portretter til reklame og digital
  skilting — vi leverer kvalitet som varer."
  ```

- [ ] **Steg 4: Legg til utstyrsliste**

  ```
  🎥 Sony FX3 / A7III
  📷 Prime-objektiver 35mm, 85mm, 135mm
  🚁 DJI Drone (luftfoto)
  💡 Professionell studioutstyr
  🖥️ Adobe Premiere Pro / Lightroom
  ```

- [ ] **Steg 5: Legg til kontaktknapper**

  ```
  Knapp 1 (gull fylt):    "💬 WhatsApp: +4792819510"
                           → åpner wa.me/4792819510
  Knapp 2 (gull outline): "📧 ujstudio48@gmail.com"
                           → åpner e-postklient
  ```

- [ ] **Steg 6: Verifiser**

  Preview → bio vises → kontaktknapper fungerer.

---

## Oppgave 7: Bygg Booking-skjerm

**Mål:** Skjema som lagrer booking i Base44 og trigger n8n webhook.

- [ ] **Steg 1: Opprett Booking-skjerm**

  Base44 → Pages → Add Page → navn: "Book en økt"

- [ ] **Steg 2: Bygg bookingskjema**

  Legg til disse feltene (koble til Booking entity):
  ```
  1. Navn*          → Text input → customer_name
  2. Telefon*       → Phone input → customer_phone
  3. E-post*        → Email input → customer_email
  4. Tjeneste*      → Dropdown → service
                      (bryllup/bursdag/portrett/mote/reklame/signage)
  5. Ønsket dato*   → Date picker → preferred_date
  6. Melding        → Textarea → message
  ```

  Design: `#1a1a2e` bakgrunn per felt, gull label, hvit input-tekst.

- [ ] **Steg 3: Legg til Send-knapp**

  ```
  Tekst: "Send forespørsel →"
  Stil: Gull fylt, full bredde
  Handling: Lagre til Booking entity + vis bekreftelse
  ```

- [ ] **Steg 4: Legg til bekreftelsesmelding**

  Etter vellykket innsending vises:
  ```
  ✅ Takk for din forespørsel, [navn]!
  Vi tar kontakt innen 24 timer.
  ```

- [ ] **Steg 5: Test bookingskjema**

  Preview → fyll inn testdata → send → sjekk at booking vises i Base44 Data → Booking.

---

## Oppgave 8: Sett opp n8n Webhook for Booking-varsler

**Mål:** Koble Base44 til n8n slik at nye bookinger gir Telegram + e-post varsel.

- [ ] **Steg 1: Opprett n8n webhook workflow**

  Åpne n8n (`https://n8n.ujstudionorge.com`) → New Workflow → navn: "UJ Studio App — Booking Varsel"

- [ ] **Steg 2: Legg til Webhook node**

  ```
  Node: Webhook
  Method: POST
  Path: ujstudio-booking
  Response: Immediately
  ```

  Kopier webhook URL: `https://n8n.ujstudionorge.com/webhook/ujstudio-booking`

- [ ] **Steg 3: Legg til Telegram node**

  ```
  Node: Telegram
  Credential: telegram - Notifications
  Operation: Send Message
  Chat ID: 6463557010
  Message:
  🆕 Ny booking fra appen!

  👤 Navn: {{ $json.customer_name }}
  📞 Telefon: {{ $json.customer_phone }}
  📧 E-post: {{ $json.customer_email }}
  🎯 Tjeneste: {{ $json.service }}
  📅 Dato: {{ $json.preferred_date }}
  💬 Melding: {{ $json.message }}
  ```

- [ ] **Steg 4: Legg til Gmail node**

  ```
  Node: Gmail
  Credential: Gmail account 4
  Operation: Send Email
  To: flinkgutt11@gmail.com
  Subject: 📅 Ny booking — {{ $json.service }} — {{ $json.customer_name }}
  Body:
  Ny bookingforespørsel fra UJ Studio Norge appen.

  Navn: {{ $json.customer_name }}
  Telefon: {{ $json.customer_phone }}
  E-post: {{ $json.customer_email }}
  Tjeneste: {{ $json.service }}
  Dato: {{ $json.preferred_date }}
  Melding: {{ $json.message }}

  Se alle bookinger: https://app.base44.com
  ```

- [ ] **Steg 5: Aktiver workflow**

  Klikk Save → klikk toggle øverst til høyre → workflow er aktiv.

- [ ] **Steg 6: Koble Base44 til webhook**

  I Base44 → Booking entity → Actions → "On Create" → HTTP Request:
  ```
  URL: https://n8n.ujstudionorge.com/webhook/ujstudio-booking
  Method: POST
  Body: alle booking-felter som JSON
  ```

- [ ] **Steg 7: Test full flyt**

  Preview appen → send testbooking → sjekk:
  - ✅ Booking lagret i Base44
  - ✅ Telegram melding mottatt på @flinkguttbot
  - ✅ E-post mottatt på flinkgutt11@gmail.com

---

## Oppgave 9: Lag App Ikon og Store-materiell

**Mål:** Lag nødvendige grafiske elementer for app store publisering.

- [ ] **Steg 1: Lag app ikon i Canva**

  ```
  Størrelse: 1024x1024px
  Bakgrunn: #0a0a0a (sort)
  Innhold: "UJ" i gull (#c9a84c), elegant font
  Eksporter: PNG, ingen avrundede hjørner (stores runder selv)
  ```

- [ ] **Steg 2: Ta screenshots**

  I Base44 preview-modus, ta skjermbilder av:
  ```
  1. Hjemskjerm (med hero og stats)
  2. Portfolio-skjerm (med bilder)
  3. Booking-skjerm (med skjema)
  4. Priser-skjerm (med tjenestekort)
  ```

  Minimum 3 screenshots kreves for Google Play.

- [ ] **Steg 3: Skriv butikkbeskrivelse**

  ```
  Kort (80 tegn):
  "Profesjonell fotograf & filmskaper i Norge — book din økt"

  Lang beskrivelse:
  "UJ Studio Norge tilbyr profesjonell fotografi og filming
  for bryllup, bursdager, portretter, mote og reklame i Norge.

  📸 Se vårt portfolio
  📅 Book direkte i appen
  💰 Transparente priser
  ⭐ Over 150 fornøyde kunder

  Kontakt oss for en uforpliktende prat!"
  ```

---

## Oppgave 10: Publiser til Google Play

**Mål:** Generer Android-pakke og last opp til Google Play Console.

- [ ] **Steg 1: Få produksjons-URL fra Base44**

  Oppgrader Base44 til betalt plan → få permanent URL:
  `https://ujstudio.base44.app` (eller lignende)

  *(Gjøres når Google Play verifisering er klar og klient har betalt)*

- [ ] **Steg 2: Generer Android-pakke via PWABuilder**

  ```
  1. Gå til pwabuilder.com
  2. Lim inn Base44 produksjons-URL
  3. Klikk Start → Android
  4. Last ned .aab fil
  ```

- [ ] **Steg 3: Last opp til Google Play Console**

  ```
  1. play.google.com/console
  2. Opprett ny app → "UJ Studio Norge"
  3. Last opp .aab fil
  4. Fyll inn: navn, beskrivelse, screenshots, ikon
  5. Kategori: Foto & Video
  6. Send til vurdering
  ```

- [ ] **Steg 4: Vent på godkjenning**

  Ventetid: 1-3 dager.
  Google Play sender e-post ved godkjenning.

---

## Avhengigheter og Rekkefølge

```
Oppgave 1 (Entity)     → må være ferdig før Oppgave 7 (Booking-skjerm)
Oppgave 7 (Booking)    → må være ferdig før Oppgave 8 (n8n webhook)
Oppgave 2-6 (Skjermer) → kan gjøres parallelt
Oppgave 9 (Ikon)       → kan gjøres når som helst
Oppgave 10 (Publisering) → sist, krever alle andre ferdig
```

## Estimert Tid

| Oppgave | Tid |
|---|---|
| Entity + 5 skjermer | 4-6 timer |
| n8n webhook | 1 time |
| Ikon + materiell | 1 time |
| Publisering | 1 time |
| **Totalt** | **7-9 timer** |
