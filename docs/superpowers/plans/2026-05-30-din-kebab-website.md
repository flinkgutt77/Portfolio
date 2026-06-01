# Din Kebab Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js website for Din Kebab Pizza & Grill where customers browse the menu, add items to a cart, and submit orders that go to the restaurant via Telegram.

**Architecture:** New Next.js 16 app (separate project from portfolio), deployed to Vercel for free. Menu is hardcoded in TypeScript. Cart state lives in React Context + localStorage. Order submission POSTs to an existing n8n webhook which sends a Telegram message to the restaurant.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, React Context for cart, n8n webhook for order delivery.

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Root layout, font, metadata, CartProvider |
| `app/page.tsx` | Home page — Hero + MenuSection + CartBar |
| `app/bestilling/page.tsx` | Checkout — order summary + form |
| `app/bekreftelse/page.tsx` | Confirmation page after order submitted |
| `app/api/bestill/route.ts` | API route — forwards order to n8n webhook |
| `components/Navbar.tsx` | Logo + nav + cart icon with item count |
| `components/Hero.tsx` | Green gradient hero section |
| `components/MenuSection.tsx` | Category tabs + grid of MenuItems |
| `components/MenuItem.tsx` | Single menu card with size selector + add button |
| `components/CartBar.tsx` | Sticky bottom bar showing cart total + checkout link |
| `components/OrderForm.tsx` | Name, phone, pickup time form fields |
| `lib/menu.ts` | All menu data typed and hardcoded |
| `lib/cart.tsx` | CartContext, CartProvider, useCart hook |
| `lib/types.ts` | Shared TypeScript types |

---

### Task 1: Scaffold the Project

**Files:**
- Create: `~/din-kebab/` (new project directory)
- Create: `~/din-kebab/package.json` and all Next.js scaffolding

- [ ] **Step 1: Create new Next.js app**

```bash
cd ~
npx create-next-app@latest din-kebab \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"
cd din-kebab
```

When prompted, accept all defaults.

- [ ] **Step 2: Verify it runs**

```bash
npm run dev
```

Open http://localhost:3000 — you should see the default Next.js page. Stop with Ctrl+C.

- [ ] **Step 3: Clean up default files**

Delete the default content in `app/page.tsx` and replace with:

```tsx
export default function Home() {
  return <main><p>Din Kebab</p></main>
}
```

Replace `app/globals.css` with:

```css
@import "tailwindcss";
```

- [ ] **Step 4: Initial commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js project for Din Kebab website"
```

---

### Task 2: TypeScript Types

**Files:**
- Create: `lib/types.ts`

- [ ] **Step 1: Create types file**

```typescript
// lib/types.ts

export type MenuSize = {
  label: string      // "H" | "S" | "M" | "Medium" | "Stor" | "100g" etc
  price: number      // NOK
}

export type MenuItem = {
  id: string
  category: 'pizza' | 'kebab' | 'hamburger' | 'sides' | 'salat' | 'drikke'
  name: string
  description: string
  sizes: MenuSize[]  // one entry = no size choice, multiple = customer picks
}

export type CartItem = {
  menuItemId: string
  name: string
  size: string
  price: number
  quantity: number
}

export type Order = {
  orderNumber: string
  customerName: string
  customerPhone: string
  pickupTime: string
  items: CartItem[]
  total: number
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/types.ts
git commit -m "feat: add shared TypeScript types"
```

---

### Task 3: Menu Data

**Files:**
- Create: `lib/menu.ts`

- [ ] **Step 1: Create menu data file**

```typescript
// lib/menu.ts
import { MenuItem } from './types'

export const menuItems: MenuItem[] = [
  // ── PIZZA ──────────────────────────────────────────────
  { id: 'p1',  category: 'pizza', name: 'Lambertseter Spesial Pizza', description: 'Biff, skinke, løk og paprika',
    sizes: [{ label: 'H', price: 239 }, { label: 'S', price: 199 }, { label: 'M', price: 219 }] },
  { id: 'p2',  category: 'pizza', name: 'Visuvio', description: 'Ost og skinke',
    sizes: [{ label: 'H', price: 204 }, { label: 'S', price: 169 }, { label: 'M', price: 184 }] },
  { id: 'p3',  category: 'pizza', name: 'Pepperoni Star', description: 'Pepperoni, ananas og paprika',
    sizes: [{ label: 'H', price: 220 }, { label: 'S', price: 185 }, { label: 'M', price: 199 }] },
  { id: 'p4',  category: 'pizza', name: 'Marco Polo', description: 'Skinke og ananas',
    sizes: [{ label: 'H', price: 214 }, { label: 'S', price: 179 }, { label: 'M', price: 194 }] },
  { id: 'p5',  category: 'pizza', name: 'Rafaele', description: 'Biff, pepperoni, løk og paprika',
    sizes: [{ label: 'H', price: 240 }, { label: 'S', price: 205 }, { label: 'M', price: 220 }] },
  { id: 'p6',  category: 'pizza', name: 'Mona Lisa', description: 'Hvitløk, marinert biff, løk og champignon',
    sizes: [{ label: 'H', price: 231 }, { label: 'S', price: 196 }, { label: 'M', price: 211 }] },
  { id: 'p7',  category: 'pizza', name: 'Mexicaneren', description: 'Kjøttdeig, skinke, løk, paprika og oliven',
    sizes: [{ label: 'H', price: 237 }, { label: 'S', price: 202 }, { label: 'M', price: 217 }] },
  { id: 'p8',  category: 'pizza', name: 'Vegetarianeren', description: 'Paprika, champignon, løk, oliven, tomat og mais',
    sizes: [{ label: 'H', price: 222 }, { label: 'S', price: 187 }, { label: 'M', price: 202 }] },
  { id: 'p9',  category: 'pizza', name: 'Milano', description: 'Marinert biff, løk og paprika',
    sizes: [{ label: 'H', price: 234 }, { label: 'S', price: 199 }, { label: 'M', price: 214 }] },
  { id: 'p10', category: 'pizza', name: 'Chicken George', description: 'Marinert kylling, løk og paprika',
    sizes: [{ label: 'H', price: 227 }, { label: 'S', price: 192 }, { label: 'M', price: 207 }] },
  { id: 'p11', category: 'pizza', name: 'Huglo', description: 'Marinert biff, kylling, løk, paprika og champignon',
    sizes: [{ label: 'H', price: 244 }, { label: 'S', price: 209 }, { label: 'M', price: 224 }] },
  { id: 'p12', category: 'pizza', name: 'Hot Zafari', description: 'Pepperoni, biff, løk og jalapeños',
    sizes: [{ label: 'H', price: 252 }, { label: 'S', price: 217 }, { label: 'M', price: 232 }] },
  { id: 'p13', category: 'pizza', name: 'Kebab Pizza', description: 'Kebabkjøtt, paprika, løk og mais',
    sizes: [{ label: 'H', price: 234 }, { label: 'S', price: 199 }, { label: 'M', price: 214 }] },
  { id: 'p14', category: 'pizza', name: 'American Way', description: 'Skinke, pepperoni, biff, bacon, løk, champignon og paprika',
    sizes: [{ label: 'H', price: 274 }, { label: 'S', price: 239 }, { label: 'M', price: 254 }] },
  { id: 'p15', category: 'pizza', name: 'Margaretha', description: 'Tomatsaus og ferske tomater',
    sizes: [{ label: 'H', price: 204 }, { label: 'S', price: 169 }, { label: 'M', price: 184 }] },
  { id: 'p16', category: 'pizza', name: 'New York City', description: 'Pepperoni, skinke, kjøttboller, løk, jalapeños og oliven',
    sizes: [{ label: 'H', price: 254 }, { label: 'S', price: 219 }, { label: 'M', price: 234 }] },
  { id: 'p17', category: 'pizza', name: 'Tommy Spesial', description: 'Skinke, biff, champignon og løk',
    sizes: [{ label: 'H', price: 234 }, { label: 'S', price: 199 }, { label: 'M', price: 214 }] },
  { id: 'p18', category: 'pizza', name: 'Stian Spesial', description: 'Skinke, pepperoni, biff og løk',
    sizes: [{ label: 'H', price: 246 }, { label: 'S', price: 211 }, { label: 'M', price: 226 }] },
  { id: 'p19', category: 'pizza', name: 'Robeen Spesial', description: 'Kylling, biff, kjøttdeig, nachochips, paprika og løk',
    sizes: [{ label: 'H', price: 246 }, { label: 'S', price: 211 }, { label: 'M', price: 226 }] },
  { id: 'p20', category: 'pizza', name: 'Raja Spesial', description: 'Tunfisk, tomat, oliven, jalapeños og løk',
    sizes: [{ label: 'H', price: 246 }, { label: 'S', price: 211 }, { label: 'M', price: 226 }] },
  { id: 'p21', category: 'pizza', name: 'Fifty Fifty Pizza', description: 'Halvt og halvt — velg to smaker',
    sizes: [{ label: 'H', price: 274 }, { label: 'S', price: 239 }, { label: 'M', price: 254 }] },
  { id: 'p22', category: 'pizza', name: 'Din Egen Pizza', description: 'Velg 6 garnityrer fra menyen',
    sizes: [{ label: 'H', price: 274 }, { label: 'S', price: 239 }, { label: 'M', price: 254 }] },

  // ── KEBAB ──────────────────────────────────────────────
  { id: 'k1', category: 'kebab', name: 'Kebab i Pitabrød', description: '',
    sizes: [{ label: 'Medium', price: 99 }, { label: 'Stor', price: 119 }] },
  { id: 'k2', category: 'kebab', name: 'Kyllingkebab i Pitabrød', description: '',
    sizes: [{ label: 'Medium', price: 129 }, { label: 'Stor', price: 139 }] },
  { id: 'k3', category: 'kebab', name: 'Biffkebab', description: '',
    sizes: [{ label: 'Medium', price: 185 }, { label: 'Stor', price: 203 }] },
  { id: 'k4', category: 'kebab', name: 'Kebabtallerken', description: '',
    sizes: [{ label: 'Medium', price: 144 }, { label: 'Stor', price: 169 }] },
  { id: 'k5', category: 'kebab', name: 'Kebabtallerken med drikke', description: '',
    sizes: [{ label: 'Medium', price: 169 }, { label: 'Stor', price: 194 }] },
  { id: 'k6', category: 'kebab', name: 'Kyllingkebabtallerken', description: '',
    sizes: [{ label: 'Medium', price: 169 }, { label: 'Stor', price: 184 }] },
  { id: 'k7', category: 'kebab', name: 'Kyllingkebabtallerken med drikke', description: '',
    sizes: [{ label: 'Medium', price: 189 }, { label: 'Stor', price: 204 }] },
  { id: 'k8', category: 'kebab', name: 'Biffkebabtallerken', description: '',
    sizes: [{ label: 'Medium', price: 225 }, { label: 'Stor', price: 244 }] },
  { id: 'k9', category: 'kebab', name: 'Biffkebabtallerken med drikke', description: '',
    sizes: [{ label: 'Medium', price: 249 }, { label: 'Stor', price: 269 }] },
  { id: 'k10', category: 'kebab', name: 'Shish Kebab Rull', description: '',
    sizes: [{ label: 'Medium', price: 115 }, { label: 'Stor', price: 135 }] },
  { id: 'k11', category: 'kebab', name: 'Falaffel i Rull', description: '',
    sizes: [{ label: 'Medium', price: 115 }, { label: 'Stor', price: 129 }] },
  { id: 'k12', category: 'kebab', name: 'Kylling i Rull', description: '',
    sizes: [{ label: 'Medium', price: 125 }, { label: 'Stor', price: 139 }] },
  { id: 'k13', category: 'kebab', name: 'Kebab i Rull', description: '',
    sizes: [{ label: 'Medium', price: 115 }, { label: 'Stor', price: 126 }] },

  // ── HAMBURGER ──────────────────────────────────────────
  { id: 'h1', category: 'hamburger', name: 'Hamburger', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 109 }, { label: '160g', price: 129 }, { label: '190g', price: 154 }, { label: '255g', price: 162 }] },
  { id: 'h2', category: 'hamburger', name: 'Hamburger m/pommes frites', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 139 }, { label: '160g', price: 159 }, { label: '190g', price: 179 }, { label: '255g', price: 190 }] },
  { id: 'h3', category: 'hamburger', name: 'Hamburger m/pommes frites og drikke', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 159 }, { label: '160g', price: 179 }, { label: '190g', price: 189 }, { label: '255g', price: 209 }] },
  { id: 'h4', category: 'hamburger', name: 'Cheeseburger', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 119 }, { label: '160g', price: 139 }, { label: '190g', price: 165 }, { label: '255g', price: 175 }] },
  { id: 'h5', category: 'hamburger', name: 'Cheeseburger m/pommes frites', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 149 }, { label: '160g', price: 179 }, { label: '190g', price: 189 }, { label: '255g', price: 194 }] },
  { id: 'h6', category: 'hamburger', name: 'Cheeseburger m/pommes frites og drikke', description: 'I brød med salat og dressing',
    sizes: [{ label: '100g', price: 175 }, { label: '160g', price: 194 }, { label: '190g', price: 210 }, { label: '255g', price: 219 }] },
  { id: 'h7', category: 'hamburger', name: 'Fiskeburger', description: 'I brød med salat og dressing',
    sizes: [{ label: 'Normal', price: 119 }] },
  { id: 'h8', category: 'hamburger', name: 'Fiskeburger m/pommes frites', description: '',
    sizes: [{ label: 'Normal', price: 149 }] },
  { id: 'h9', category: 'hamburger', name: 'Fiskeburger m/pommes frites og drikke', description: '',
    sizes: [{ label: 'Normal', price: 175 }] },
  { id: 'h10', category: 'hamburger', name: 'Kyllingburger', description: '',
    sizes: [{ label: 'Normal', price: 119 }] },
  { id: 'h11', category: 'hamburger', name: 'Kyllingburger m/pommes frites', description: '',
    sizes: [{ label: 'Normal', price: 149 }] },
  { id: 'h12', category: 'hamburger', name: 'Kyllingburger m/pommes frites og drikke', description: '',
    sizes: [{ label: 'Normal', price: 175 }] },
  { id: 'h13', category: 'hamburger', name: 'Løvstekburger', description: '',
    sizes: [{ label: 'Normal', price: 135 }] },
  { id: 'h14', category: 'hamburger', name: 'Løvstektallerken m/pommes frites', description: '',
    sizes: [{ label: 'Normal', price: 169 }] },
  { id: 'h15', category: 'hamburger', name: 'Løvstektallerken m/pommes frites og drikke', description: '',
    sizes: [{ label: 'Normal', price: 190 }] },

  // ── SIDES ──────────────────────────────────────────────
  { id: 's1', category: 'sides', name: 'Pommes Frites', description: '',
    sizes: [{ label: 'Liten', price: 60 }, { label: 'Stor', price: 75 }] },
  { id: 's2', category: 'sides', name: 'Søt Potet Pommes Frites', description: '',
    sizes: [{ label: 'Liten', price: 89 }, { label: 'Stor', price: 99 }] },

  // ── SALAT ──────────────────────────────────────────────
  { id: 'sa1', category: 'salat', name: 'Kyllingsalat', description: 'Med mais, tomat og agurk',
    sizes: [{ label: 'Normal', price: 190 }] },

  // ── DRIKKE ─────────────────────────────────────────────
  { id: 'd1', category: 'drikke', name: 'Drikke', description: '',
    sizes: [{ label: '0,5 L', price: 39 }, { label: '1,5 L', price: 59 }] },
]

export const categories = [
  { id: 'alle',       label: '🍽️ Alle' },
  { id: 'pizza',      label: '🍕 Pizza' },
  { id: 'kebab',      label: '🥙 Kebab' },
  { id: 'hamburger',  label: '🍔 Burger' },
  { id: 'sides',      label: '🍟 Sides' },
  { id: 'salat',      label: '🥗 Salat' },
  { id: 'drikke',     label: '🥤 Drikke' },
] as const
```

- [ ] **Step 2: Commit**

```bash
git add lib/menu.ts
git commit -m "feat: add complete menu data (pizza, kebab, burger, sides, salat, drikke)"
```

---

### Task 4: Cart Context

**Files:**
- Create: `lib/cart.tsx`

- [ ] **Step 1: Create cart context**

```tsx
// lib/cart.tsx
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { CartItem } from './types'

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (menuItemId: string, size: string) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('din-kebab-cart')
    if (saved) setItems(JSON.parse(saved))
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('din-kebab-cart', JSON.stringify(items))
  }, [items])

  function addItem(newItem: Omit<CartItem, 'quantity'>) {
    setItems(prev => {
      const existing = prev.find(
        i => i.menuItemId === newItem.menuItemId && i.size === newItem.size
      )
      if (existing) {
        return prev.map(i =>
          i.menuItemId === newItem.menuItemId && i.size === newItem.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  function removeItem(menuItemId: string, size: string) {
    setItems(prev => prev.filter(
      i => !(i.menuItemId === menuItemId && i.size === size)
    ))
  }

  function clearCart() {
    setItems([])
    localStorage.removeItem('din-kebab-cart')
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/cart.tsx
git commit -m "feat: add cart context with localStorage persistence"
```

---

### Task 5: Root Layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update root layout with CartProvider**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { CartProvider } from '@/lib/cart'
import './globals.css'

export const metadata: Metadata = {
  title: 'Din Kebab Pizza & Grill — Lambertseter',
  description: 'Bestill pizza, kebab og hamburger online. Hentes i restauranten på Lambertseter, Oslo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with CartProvider"
```

---

### Task 6: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

```tsx
// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function Navbar() {
  const { count } = useCart()

  return (
    <nav style={{
      background: '#111',
      borderBottom: '2px solid #7DC61F',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <Link href="/" style={{ color: '#7DC61F', fontWeight: 900, fontSize: '18px', textDecoration: 'none' }}>
        🍕 DIN KEBAB
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link href="/#meny" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Meny</Link>
        <Link href="/#om-oss" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Om oss</Link>
        <Link href="/bestilling" style={{
          background: count > 0 ? '#7DC61F' : '#222',
          color: count > 0 ? '#000' : '#ccc',
          padding: '8px 16px',
          borderRadius: '6px',
          fontWeight: 700,
          fontSize: '14px',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}>
          🛒 {count > 0 ? `${count} vare${count > 1 ? 'r' : ''}` : 'Handlekurv'}
        </Link>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar with cart count"
```

---

### Task 7: Hero Component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero**

```tsx
// components/Hero.tsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #3d6b00 0%, #7DC61F 50%, #C8E831 100%)',
      padding: '60px 24px',
      textAlign: 'center',
    }}>
      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
        Lambertseter, Oslo
      </p>
      <h1 style={{
        color: '#fff',
        fontSize: 'clamp(32px, 6vw, 64px)',
        fontWeight: 900,
        lineHeight: 1.1,
        textShadow: '0 4px 20px rgba(0,0,0,0.4)',
        marginBottom: '12px',
      }}>
        Lambertseter's<br />beste kebab!
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '32px' }}>
        Pizza · Kebab · Hamburger · Henting
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
        <Link href="/#meny" style={{
          background: '#fff',
          color: '#3d6b00',
          padding: '14px 32px',
          borderRadius: '6px',
          fontWeight: 900,
          fontSize: '16px',
          textDecoration: 'none',
        }}>
          🛒 Bestill nå
        </Link>
        <a href="tel:+4798075638" style={{
          background: 'rgba(0,0,0,0.2)',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '6px',
          fontWeight: 700,
          fontSize: '16px',
          textDecoration: 'none',
          border: '2px solid rgba(255,255,255,0.4)',
        }}>
          📞 Ring oss
        </a>
      </div>

      <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
        {[['50+', 'Retter'], ['99,-', 'Fra'], ['⭐ 4.8', 'Vurdering']].map(([val, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <p style={{ color: '#ffff00', fontSize: '24px', fontWeight: 900, margin: 0 }}>{val}</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with green gradient"
```

---

### Task 8: MenuItem Component

**Files:**
- Create: `components/MenuItem.tsx`

- [ ] **Step 1: Create MenuItem card**

```tsx
// components/MenuItem.tsx
'use client'

import { useState } from 'react'
import { MenuItem as MenuItemType } from '@/lib/types'
import { useCart } from '@/lib/cart'

export default function MenuItemCard({ item }: { item: MenuItemType }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(item.sizes[0])
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      menuItemId: item.id,
      name: item.name,
      size: selectedSize.label,
      price: selectedSize.price,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div style={{
      background: '#1a1a1a',
      border: '1px solid #2a2a2a',
      borderRadius: '10px',
      padding: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: '0 0 4px' }}>{item.name}</p>
        {item.description && (
          <p style={{ color: '#666', fontSize: '12px', margin: '0 0 8px' }}>{item.description}</p>
        )}
        {item.sizes.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {item.sizes.map(size => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(size)}
                style={{
                  background: selectedSize.label === size.label ? '#7DC61F' : '#222',
                  border: `1px solid ${selectedSize.label === size.label ? '#7DC61F' : '#444'}`,
                  color: selectedSize.label === size.label ? '#000' : '#ccc',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: selectedSize.label === size.label ? 700 : 400,
                  cursor: 'pointer',
                }}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <p style={{ color: '#C8E831', fontWeight: 900, fontSize: '15px', margin: '0 0 8px' }}>
          {selectedSize.price},–
        </p>
        <button
          onClick={handleAdd}
          style={{
            background: added ? '#3d6b00' : '#7DC61F',
            color: '#000',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '6px',
            fontWeight: 900,
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {added ? '✓ Lagt til' : '+ Legg til'}
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/MenuItem.tsx
git commit -m "feat: add MenuItem card with size selector"
```

---

### Task 9: MenuSection Component

**Files:**
- Create: `components/MenuSection.tsx`

- [ ] **Step 1: Create MenuSection with category tabs**

```tsx
// components/MenuSection.tsx
'use client'

import { useState } from 'react'
import { menuItems, categories } from '@/lib/menu'
import MenuItemCard from './MenuItem'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('alle')

  const filtered = activeCategory === 'alle'
    ? menuItems
    : menuItems.filter(i => i.category === activeCategory)

  return (
    <section id="meny" style={{ background: '#111', padding: '40px 24px' }}>
      <p style={{ color: '#7DC61F', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '8px' }}>
        VÅR MENY
      </p>
      <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '28px', textAlign: 'center', marginBottom: '24px' }}>
        Velg det du har lyst på
      </h2>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              background: activeCategory === cat.id ? '#7DC61F' : '#222',
              color: activeCategory === cat.id ? '#000' : '#ccc',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: activeCategory === cat.id ? 700 : 400,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '12px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {filtered.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/MenuSection.tsx
git commit -m "feat: add MenuSection with category filter tabs"
```

---

### Task 10: CartBar Component

**Files:**
- Create: `components/CartBar.tsx`

- [ ] **Step 1: Create sticky CartBar**

```tsx
// components/CartBar.tsx
'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function CartBar() {
  const { count, total } = useCart()

  if (count === 0) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #3d6b00, #7DC61F)',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
    }}>
      <div>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: 0 }}>
          🛒 {count} vare{count > 1 ? 'r' : ''} i handlekurven
        </p>
        <p style={{ color: '#ffff00', fontWeight: 900, fontSize: '18px', margin: 0 }}>
          {total},– NOK
        </p>
      </div>
      <Link href="/bestilling" style={{
        background: '#fff',
        color: '#3d6b00',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: 900,
        fontSize: '15px',
        textDecoration: 'none',
      }}>
        Gå til bestilling →
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/CartBar.tsx
git commit -m "feat: add sticky CartBar shown when cart has items"
```

---

### Task 11: Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Compose home page**

```tsx
// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MenuSection from '@/components/MenuSection'
import CartBar from '@/components/CartBar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#111', minHeight: '100vh' }}>
        <Hero />
        <MenuSection />
        {/* Info section */}
        <section id="om-oss" style={{ background: '#0a0a0a', padding: '40px 24px', textAlign: 'center' }}>
          <h2 style={{ color: '#7DC61F', fontWeight: 900, fontSize: '24px', marginBottom: '16px' }}>
            📍 Finn oss
          </h2>
          <p style={{ color: '#ccc', fontSize: '16px', marginBottom: '8px' }}>Lambertseter, Oslo</p>
          <p style={{ color: '#ccc', fontSize: '16px', marginBottom: '8px' }}>📞 <a href="tel:+4798075638" style={{ color: '#7DC61F' }}>+47 980 75 638</a></p>
          <p style={{ color: '#ccc', fontSize: '16px', marginBottom: '8px' }}>🕐 Man–Søn: 12:00–22:00</p>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '16px' }}>
            Bestill online og hent i restauranten. Betaling ved henting.
          </p>
        </section>
      </main>
      <CartBar />
    </>
  )
}
```

- [ ] **Step 2: Run and verify**

```bash
npm run dev
```

Open http://localhost:3000. You should see:
- Green gradient hero with "Bestill nå" button
- Category tabs (Alle, Pizza, Kebab, etc.)
- Menu items with size selectors and "Legg til" buttons
- Sticky green cart bar appears after adding an item

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose home page with Hero, MenuSection, CartBar"
```

---

### Task 12: Checkout Page

**Files:**
- Create: `app/bestilling/page.tsx`
- Create: `components/OrderForm.tsx`

- [ ] **Step 1: Create OrderForm component**

```tsx
// components/OrderForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart'

export default function OrderForm() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', pickupTime: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Navn og telefon er påkrevd.')
      return
    }
    setLoading(true)
    setError('')

    const orderNumber = String(Math.floor(1000 + Math.random() * 9000))

    try {
      const res = await fetch('/api/bestill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber,
          customerName: form.name,
          customerPhone: form.phone,
          pickupTime: form.pickupTime || 'Snarest',
          items,
          total,
        }),
      })

      if (!res.ok) throw new Error('Noe gikk galt')

      clearCart()
      router.push(`/bekreftelse?nr=${orderNumber}&navn=${encodeURIComponent(form.name)}&total=${total}`)
    } catch {
      setError('Kunne ikke sende bestillingen. Prøv igjen eller ring oss.')
      setLoading(false)
    }
  }

  const inputStyle = {
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '6px',
    padding: '12px',
    color: '#fff',
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    color: '#7DC61F',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Ditt navn *</label>
        <input style={inputStyle} placeholder="Fullt navn" value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Telefon *</label>
        <input style={inputStyle} placeholder="+47 xxx xx xxx" value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <label style={labelStyle}>Ønsket hentingstid</label>
        <input style={inputStyle} placeholder="f.eks. 18:30 (valgfri)" value={form.pickupTime}
          onChange={e => setForm(f => ({ ...f, pickupTime: e.target.value }))} />
      </div>

      {error && <p style={{ color: '#ff4444', marginBottom: '16px', fontSize: '14px' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{
        background: loading ? '#3d6b00' : 'linear-gradient(135deg, #3d6b00, #C8E831)',
        color: '#000',
        border: 'none',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
        fontWeight: 900,
        fontSize: '16px',
        cursor: loading ? 'not-allowed' : 'pointer',
      }}>
        {loading ? 'Sender...' : 'Send bestilling →'}
      </button>
      <p style={{ color: '#555', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
        Betaling skjer ved henting i restauranten
      </p>
    </form>
  )
}
```

- [ ] **Step 2: Create bestilling page**

```tsx
// app/bestilling/page.tsx
'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import OrderForm from '@/components/OrderForm'
import { useCart } from '@/lib/cart'

export default function BestillingPage() {
  const { items, total, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main style={{ background: '#111', minHeight: '100vh', padding: '60px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '18px', marginBottom: '24px' }}>Handlekurven er tom.</p>
          <Link href="/" style={{ color: '#7DC61F', fontWeight: 700 }}>← Gå til menyen</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main style={{ background: '#111', minHeight: '100vh', padding: '40px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link href="/" style={{ color: '#7DC61F', fontSize: '14px', textDecoration: 'none' }}>← Tilbake til meny</Link>

          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '28px', margin: '16px 0 24px' }}>
            Din bestilling
          </h1>

          {/* Order summary */}
          <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '20px', marginBottom: '24px' }}>
            {items.map(item => (
              <div key={`${item.menuItemId}-${item.size}`} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '8px 0', borderBottom: '1px solid #2a2a2a',
              }}>
                <div>
                  <p style={{ color: '#fff', fontSize: '14px', margin: 0 }}>{item.name}</p>
                  <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>{item.size} × {item.quantity}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <p style={{ color: '#C8E831', fontWeight: 700, margin: 0 }}>{item.price * item.quantity},–</p>
                  <button onClick={() => removeItem(item.menuItemId, item.size)}
                    style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: '16px' }}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
              <p style={{ color: '#fff', fontWeight: 900, fontSize: '16px', margin: 0 }}>Totalt</p>
              <p style={{ color: '#C8E831', fontWeight: 900, fontSize: '20px', margin: 0 }}>{total},–</p>
            </div>
          </div>

          {/* Form */}
          <OrderForm />
        </div>
      </main>
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/bestilling/page.tsx components/OrderForm.tsx
git commit -m "feat: add checkout page with order summary and form"
```

---

### Task 13: API Route (n8n Webhook)

**Files:**
- Create: `app/api/bestill/route.ts`

- [ ] **Step 1: Create API route**

```typescript
// app/api/bestill/route.ts
import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK = 'https://n8n.ujstudionorge.com/webhook/kebab-orders'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { orderNumber, customerName, customerPhone, pickupTime, items, total } = body

  // Build Telegram-friendly order text
  const itemLines = items.map((item: { name: string; size: string; quantity: number; price: number }) =>
    `• ${item.name} (${item.size}) × ${item.quantity} — ${item.price * item.quantity},–`
  ).join('\n')

  const payload = {
    order_number: orderNumber,
    customer_name: customerName,
    customer_phone: customerPhone,
    pickup_time: pickupTime,
    items,
    total,
    message: `🆕 Ny nettbestilling #${orderNumber}!\n\n👤 ${customerName}\n📞 ${customerPhone}\n⏰ Hentes: ${pickupTime}\n\n${itemLines}\n\n💰 Totalt: ${total},–\n💳 Betales ved henting`,
    source: 'website',
  }

  try {
    const res = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('n8n webhook error:', await res.text())
      return NextResponse.json({ error: 'Webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true, orderNumber })
  } catch (err) {
    console.error('Failed to reach n8n:', err)
    return NextResponse.json({ error: 'Network error' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/bestill/route.ts
git commit -m "feat: add API route that forwards orders to n8n webhook"
```

---

### Task 14: Confirmation Page

**Files:**
- Create: `app/bekreftelse/page.tsx`

- [ ] **Step 1: Create bekreftelse page**

```tsx
// app/bekreftelse/page.tsx
'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Suspense } from 'react'

function BekreftelsContent() {
  const params = useSearchParams()
  const nr = params.get('nr')
  const navn = params.get('navn')
  const total = params.get('total')

  return (
    <main style={{ background: '#111', minHeight: '100vh', padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>✅</div>
        <h1 style={{ color: '#7DC61F', fontWeight: 900, fontSize: '28px', marginBottom: '8px' }}>
          Bestilling mottatt!
        </h1>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '32px' }}>
          Ordrenr: <strong style={{ color: '#fff' }}>#{nr}</strong>
        </p>

        <div style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '10px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'left',
        }}>
          <p style={{ color: '#ccc', margin: '0 0 8px' }}>👤 {navn}</p>
          <p style={{ color: '#ccc', margin: '0 0 8px' }}>📍 Hentes på Lambertseter</p>
          <p style={{ color: '#C8E831', fontWeight: 900, fontSize: '18px', margin: 0 }}>
            💰 Totalt: {total},– (betales ved henting)
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #3d6b00, #7DC61F)',
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '24px',
        }}>
          <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 4px' }}>
            📲 Restauranten er varslet!
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>
            Spørsmål? Ring oss på <a href="tel:+4798075638" style={{ color: '#ffff00' }}>+47 980 75 638</a>
          </p>
        </div>

        <Link href="/" style={{
          display: 'inline-block',
          color: '#7DC61F',
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '15px',
        }}>
          ← Tilbake til menyen
        </Link>
      </div>
    </main>
  )
}

export default function BekreftelsePage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ background: '#111', minHeight: '100vh' }} />}>
        <BekreftelsContent />
      </Suspense>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/bekreftelse/page.tsx
git commit -m "feat: add order confirmation page"
```

---

### Task 15: Test Full Order Flow

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Test the flow**

1. Go to http://localhost:3000
2. Click a category tab — verify filtering works
3. Select a size, click "+ Legg til" — verify cart bar appears at bottom
4. Add 2-3 items
5. Click "Gå til bestilling" — verify order summary shows correct items and total
6. Fill in name and phone, submit
7. Verify you land on /bekreftelse with correct order number
8. Check Telegram — restaurant should receive the order message

- [ ] **Step 3: Fix any issues found in testing**

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "test: verified full order flow works end-to-end"
```

---

### Task 16: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

Create a new private GitHub repo called `din-kebab-website`, then:

```bash
git remote add origin https://github.com/flinkgutt77/din-kebab-website.git
git push -u origin main
```

- [ ] **Step 2: Deploy on Vercel**

1. Go to https://vercel.com/new
2. Import `din-kebab-website` repo
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy**

- [ ] **Step 3: Verify live site**

Open the Vercel URL (e.g. `din-kebab-website.vercel.app`). Test full order flow on the live site.

- [ ] **Step 4: Final commit**

```bash
git tag v1.0.0
git push --tags
```

---

## Self-Review

**Spec coverage:**
- ✅ Green gradient design from physical menu
- ✅ Full menu (Pizza, Kebab, Burger, Sides, Salat, Drikke) with size selection
- ✅ Cart with localStorage persistence
- ✅ Checkout form (name, phone, pickup time)
- ✅ Order → n8n webhook → Telegram to restaurant
- ✅ Confirmation page
- ✅ Pay at pickup (no payment gateway)
- ✅ Next.js + Vercel deployment

**Placeholder scan:** No TBDs, all code complete.

**Type consistency:** `CartItem`, `MenuItem`, `MenuSize` used consistently across all files.
