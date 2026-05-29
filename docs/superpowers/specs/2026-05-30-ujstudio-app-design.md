# UJ Studio Norge — Portfolio & Booking App Design
**Dato:** 2026-05-30  
**Status:** Godkjent av Umar Javed

---

## Oversikt

En mobilapp for UJ Studio Norge som lar potensielle kunder bla gjennom portfolio, lese priser og sende bookingforespørsler direkte. Appen publiseres til Google Play Store (Android) og Apple App Store (iOS).

---

## Plattform & Teknologi

| Komponent | Valg | Begrunnelse |
|---|---|---|
| **Bygging** | Base44 (gratis plan) | Allerede kjent, ingen ekstra kostnad |
| **Android publisering** | PWABuilder → Google Play | Gratis, direkte fra Base44 URL |
| **iOS publisering** | PWABuilder → Apple App Store | Krever Apple Developer ($99/år) |
| **Backend / varsler** | n8n (allerede satt opp) | Eksisterende infrastruktur |
| **Booking lagring** | Base44 entities | Innebygd i plattformen |

---

## Design System

- **Bakgrunn:** `#0a0a0a` (sort)
- **Sekundær bakgrunn:** `#1a1a2e` (mørk navy)
- **Aksent:** `#c9a84c` (gull)
- **Tekst primær:** `#ffffff`
- **Tekst sekundær:** `#666666`
- **Knapper:** Gull fylt (primær) + gull outline (sekundær)
- **Font stil:** Lett/tynn overskrift + fet undertittel

---

## App Struktur — 5 Skjermer

### 1. 🏠 Hjemskjerm
- Logo + tagline: *"Crafting Visual Stories That Last Forever"*
- Stats: 150+ Bryllup | 10+ År erfaring | ★ 5.0
- CTA knapper: "📅 Book en økt" + "📸 Se Portfolio"
- Bunnmeny navigasjon

### 2. 📸 Portfolio
- Filtrerbart bildegalleri
- Kategorier: Alle / Bryllup / Portrett / Reklame / Signage / Mote
- Klikk på bilde → fullskjerm visning

### 3. 💰 Priser & Tjenester
- Bryllupsfotografi & Film
- Bursdagsfotografi & Film
- Familieportretter
- Motefotografi & Film
- Reklamefotografi & Film
- Digital Skilting (Yodeck)
- Hvert kort viser: ikon, navn, kort beskrivelse, pris fra X NOK

### 4. ⭐ Omtaler & Instagram
- 6 kundeomtaler med navn og tekst
- Live Instagram feed fra @ujstudionorge (embed)

### 5. 👤 Om UJ Studio
- Profilbilde av Umar
- Bio tekst
- Erfaring og utstyr
- Kontaktinfo (WhatsApp + e-post)

---

## Booking Flyt

```
1. Kunde åpner "Book en økt" skjerm
2. Fyller inn: Navn, Telefon, E-post, Tjeneste, Dato, Melding
3. Trykker "Send forespørsel"
4. Base44 lagrer booking som entity (status: "ny")
5. n8n webhook trigger aktiveres
6. n8n sender Telegram varsel til @flinkguttbot (NOVA)
7. n8n sender e-post til flinkgutt11@gmail.com
8. Kunde ser bekreftelsesmelding i appen
```

### Booking Entity (Base44)
```
- customer_name (string, required)
- customer_phone (string, required)
- customer_email (string, required)
- service (enum: bryllup/bursdag/portrett/mote/reklame/signage)
- preferred_date (date, required)
- message (string)
- status (enum: ny/bekreftet/avslatt) default: ny
- created_date (auto)
```

---

## n8n Integrasjon

### Telegram Varsel (til @flinkguttbot)
```
Ny booking fra [navn]!
📞 [telefon]
📧 [e-post]
🎯 Tjeneste: [tjeneste]
📅 Dato: [dato]
💬 [melding]
```

### E-post Varsel (til flinkgutt11@gmail.com)
- Via eksisterende Gmail OAuth2 credential i n8n
- Samme informasjon som Telegram + link til Base44 admin panel

---

## Publisering Plan

### Google Play (Android)
1. Base44 → produksjons-URL (krever Base44 oppgradering)
2. PWABuilder → last inn URL → generer `.aab` fil
3. Google Play Console → last opp → fyll inn butikkinfo
4. Ventetid: 1-3 dager (allerede har konto, venter på verifisering)

### Apple App Store (iOS)
1. Samme Base44 URL
2. PWABuilder → generer iOS pakke
3. Xcode (på Mac) → signer og last opp
4. Apple Developer konto ($99/år) kreves
5. Ventetid: 1-7 dager Apple review

---

## App Store Listing Innhold

| Felt | Innhold |
|---|---|
| **App navn** | UJ Studio Norge |
| **Kort beskrivelse** | Profesjonell fotograf og filmskaper i Norge |
| **Kategori** | Foto & Video / Livsstil |
| **Ikon** | UJ Studio logo (512x512 PNG, sort bakgrunn + gull) |
| **Screenshots** | Hjemskjerm, Portfolio, Booking, Priser (min. 3) |

---

## Avhengigheter

- [ ] Base44 oppgradering (for produksjons-URL) — gjøres når klient betaler
- [ ] Google Play Console verifisering — venter på Google
- [ ] Apple Developer konto — $99/år når klar for iOS
- [ ] n8n webhook URL for bookingvarsel — settes opp under bygging
- [ ] App ikon fra Umar (eller lager i Canva)

---

## Neste Steg

1. Implementasjonsplan (writing-plans)
2. Bygg app i Base44
3. Koble n8n webhook
4. Test booking flyt
5. Publiser til Google Play
