# Finchglow Holdings Group Staff Portal

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-5.0-FCC72B?logo=vitest&logoColor=black)](https://vitest.dev/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-059669)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Bundle Size](https://img.shields.io/badge/Bundle%20Size-81.6%20kB%20gzipped-0284C7)](https://bundlephobia.com/)

A modern, responsive, and accessible enterprise staff portal engineered for **Finchglow Holdings**—a leading travel, hospitality, and aviation group in West Africa.

This portal acts as an executive multi-tenant launchpad and operational hub across Finchglow Holdings and its six distinct operating subsidiaries:
1. **Lagos Aviation Academy (LAA)** — Aviation certifications & IATA training
2. **Travelden** — Consumer Online Travel Agency (OTA)
3. **Finchglow Travels (Trade)** — Consolidator & B2B sub-agent platform
4. **FCM Travel Nigeria** — Multinational corporate travel management (TMC)
5. **Finchglow Holidays** — Bespoke leisure itineraries & destination packages
6. **Shared Facilities & IT** — Physical plant operations and corporate IT infrastructure
7. **Finchglow Holdings (Group View)** — Unified conglomerate view

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm

### 1. Installation
```bash
git clone https://github.com/MisturaDev/finchglow-staff-portal.git
cd finchglow-staff-portal
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run Automated Tests
```bash
npm test
```
Executes the Vitest suite covering critical alert accessibility, subsidiary filtering persistence, and search interactions.

### 4. Build for Production & Measure Bundle
```bash
npm run build
```
Generates production artifacts in `/dist` and reports gzipped payloads.

---

## 📊 Production Performance & Bundle Metrics

| Asset | Raw Size | Gzipped Size | Network Transfer (Slow 3G) |
| :--- | :--- | :--- | :--- |
| **`index.js`** | 249.36 kB | **77.53 kB** | ~230 ms |
| **`index.css`** | 16.25 kB | **3.77 kB** | ~18 ms |
| **`index.html`** | 0.47 kB | **0.30 kB** | ~2 ms |
| **Total Payload** | **266.08 kB** | **81.60 kB** | **~250 ms** |

> **Requirement Target:** < 100 kB gzipped.  
> **Actual Delivered:** **81.6 kB gzipped** (18.4% under the ceiling budget).

---

## 🏛️ Architecture & Key Features

### 1. Dynamic CSS Token Branding Engine
- Rather than importing heavy utility CSS engines or CSS-in-JS runtimes that penalize bundle performance, the portal leverages a native **CSS Custom Properties** design system.
- When an employee switches companies, brand tokens (`--accent`, `--accent-dark`, `--accent-soft`) cascade instantly across the root layout, recoloring interactive focus rings, tab indicators, category pills, and card icons with zero layout shift.

### 2. High-Visibility Critical Outage Banner (WCAG 2.1 AA)
- Critical operational outages (e.g., Paystack/Interswitch payment gateway timeouts or GDS core cutovers) are impossible to miss.
- Uses `role="alert"` and `aria-live="assertive"` with `aria-atomic="true"`, ensuring screen readers announce the emergency immediately without user intervention.
- Features prominent "Acknowledge" dismissal to clear screen real estate once noted.

### 3. Group-Wide Alert & Utility Persistence
- A core architectural requirement: **group-wide announcements and tools (`companyId: 'all'`) remain visible regardless of which subsidiary workspace is active**.
- Operational staff never miss corporate townhalls or compliance deadlines while working within a dedicated subsidiary desk.

### 4. Role-Based Views & Shortcuts (Extra Feature)
- Integrated role persona switcher supporting 5 core job functions:
  - **Group Staff (General)**
  - **Contact-Centre Agent** (Frontline phone/chat/ticketing queues)
  - **Corporate Travel Consultant** (FCM corporate desks & GDS)
  - **Facilities Technician** (Physical plant, generator checks, fleet)
  - **Academy Trainer** (LMS, IATA grading, curriculum)
- Tailored shortcuts appear as a discreet `[ ⭐️ My Role Shortcuts ]` filter pill in the search bar and highlight relevant cards with executive `[ Priority ]` badges.

### 5. Multi-Facet Live Search & Category Filtering
- Case-insensitive search across tool names, descriptions, categories, and tags.
- Dedicated category chips (*Booking & GDS*, *Operations & Desk*, *Corporate & HR*, *Academy & LMS*, *IT & Support*).
- Live counter announcing accessible query results via `aria-live="polite"`.
- Resilient empty states with a 1-click **"Reset Filters & Search"** button.

---

## 📈 Design for Growth: Adding a 7th Subsidiary

The portal was built with a decoupled configuration architecture. Adding a new subsidiary (e.g. *Finchglow Cargo & Logistics*) **does not require editing any component code or styles**.

Simply add 1 entry to [`src/data/companies.ts`](./src/data/companies.ts):

```typescript
{
  id: 'cargo',
  name: 'Finchglow Cargo & Logistics',
  shortName: 'Cargo',
  tagline: 'Air freight, cold-chain & cargo charter solutions',
  brandColor: '#059669',
  brandColorDark: '#064E3B',
  brandColorSoft: '#D1FAE5',
  logoMark: 'FC',
  description: 'Freight forwarding, customs clearance, and charter tracking',
}
```

The Company Switcher automatically renders the new tab, sets up ARIA tab controls, adjusts responsive layout spacing, and dynamically generates the new brand theme.

---

## 🔐 Enterprise SSO Architecture (Production Integration)

In a live production rollout across Finchglow Holdings, the mock role switcher would be replaced by an enterprise Identity Provider (IdP) integration.

```
┌────────────────────────────────────────────────────────┐
│                   Identity Provider                    │
│           (Microsoft Entra ID / Okta / Ping)           │
└───────────────────────────┬────────────────────────────┘
                            │ SAML 2.0 / OIDC PKCE
                            ▼
┌────────────────────────────────────────────────────────┐
│             Enterprise API Gateway / BFF               │
│        (Token Validation, RBAC Claims Parsing)         │
└───────────────────────────┬────────────────────────────┘
                            │ JWT Session Cookie
                            ▼
┌────────────────────────────────────────────────────────┐
│          Finchglow Holdings Staff Portal UI            │
│  - Reads: user.department, user.subsidiary, user.roles │
│  - Auto-selects subsidiary theme and role shortcuts    │
└────────────────────────────────────────────────────────┘
```

1. **Protocol:** OpenID Connect (OIDC) with Authorization Code Flow + PKCE.
2. **Claims Mapping:**
   - `department` / `subsidiary` ➡️ Maps to `CompanyId` (auto-themes portal upon login).
   - `roles` / `groups` ➡️ Maps to `RoleId` (pre-filters launcher shortcuts).
3. **Session Lifecycle:** HTTP-only Secure SameSite JWT cookies refreshed via silent iframe or refresh token rotation.

---

## 🧪 Automated Test Suite

Vitest unit tests located in [`src/__tests__/`](./src/__tests__/) validate core business logic:

1. **`CriticalAlert.test.tsx`**:
   - Asserts `role="alert"` and `aria-live="assertive"` for screen-reader delivery.
   - Tests emergency dismissal mechanics.
   - Tests null-safety when no critical alerts are active.
2. **`CompanyFilter.test.ts`**:
   - Asserts that group-wide tools (`companyIds: ['all']`) persist across all subsidiaries.
   - Asserts that group-wide alerts persist during subsidiary switching.
   - Asserts that subsidiary-specific tools do not leak across unrelated subsidiaries.
3. **`SearchBar.test.tsx`**:
   - Asserts input bindings, clear button reset, and category pill selection states.
   - Asserts role shortcut filtering toggle.

---

## ♿ Accessibility (WCAG 2.1 AA) Compliance Matrix

| Requirement | Implementation | WCAG Guideline |
| :--- | :--- | :--- |
| **Bypass Blocks** | Top-level `<a href="#portal-content" className="skip-link">` | 2.4.1 Bypass Blocks |
| **Keyboard Focus** | Visible high-contrast focus rings (`:focus-visible`) | 2.4.7 Focus Visible |
| **Color Contrast** | Minimum 4.5:1 text-to-background contrast on all brand themes | 1.4.3 Contrast (Minimum) |
| **Screen Readers** | Semantic ARIA (`role="alert"`, `aria-live="assertive"`, `role="tablist"`) | 4.1.2 Name, Role, Value |
| **Non-Text Content** | Pure SVG icons with `aria-hidden="true"` and descriptive labels on actionable links | 1.1.1 Non-text Content |

---

## 📄 License
This project was developed for the **Finchglow Holdings Front-End Engineering Assessment**.
