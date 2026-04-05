# Masterclass Dashboard - Capture Summary

## Site Overview

**Domain:** `masterclass-dashboard.netlify.app` (redirects to preview build: `69b9b8bf01f4df93ef3947ef--masterclass-dashboard.netlify.app`)

**Purpose:** A gated-access launch hub for managing Kenny Solway's "Executive Communication Master Class" event scheduled for April 7, 2026.

---

## Pages Captured

### 1. **Public Landing Page** (index.html / root)
- **URL:** `https://masterclass-dashboard.netlify.app/`
- **Title:** Masterclass Dashboard | Go To 11
- **Type:** Gated access form
- **Content:** Registration form with three fields (Name, Email, Company)
- **Features:**
  - URL parameter detection script that checks for `?demo=goto11`
  - Demo mode redirects to preview build
  - Hidden form fields for tracking
  - Privacy notice

### 2. **Full Dashboard** (Demo/Preview Build)
- **URL:** `https://69b9b8bf01f4df93ef3947ef--masterclass-dashboard.netlify.app/`
- **Access:** Via `?demo=goto11` parameter on main page
- **Title:** Go To 11 — Master Class Launch Hub
- **Type:** Interactive management dashboard
- **Status:** Fully functional, clickable metrics

---

## Dashboard Features & Components

### Header Section
- Event title: "How to Sound Confident Under Pressure"
- Subtitle: "Executive Communication Master Class"
- Event date: April 7, 2026 at 12:00 PM ET
- Format: Live on Zoom
- Price: FREE

### Navigation (7 Tab Views)
1. **Scoreboard** — Key metrics overview
2. **Content Calendar** — LinkedIn posts and email schedule
3. **Pipeline** — Sales funnel tracking
4. **Phases** — 6-phase launch roadmap
5. **Registrants** — Registration progress tracking
6. **Quick Links** — Notion and external resource links
7. **Decisions** — Configuration parameters

### Core Metrics (Live Scoreboard)
All metrics are clickable and auto-save:
- Registrations: 0 / 50
- LinkedIn Posts: 0 / 9
- Emails Sent: 0 / 8
- Lead Magnets: 0 / 20
- Warm Outreach: 0 / 10
- Clients Closed: 0 / 3

### Content Calendar

**LinkedIn Posts (9-post strategy)**
- Dates span: Mar 18 — Apr 5
- Themes: Problem positioning, credibility stories, framework breakdowns, case studies, outcomes, final push
- Each post has specific angle/hook

**Email Campaign (8 + 4 follow-ups)**
- Main sequence: Mar 19 — Apr 7
- Subjects focus on objection handling, curiosity, FOMO, social proof
- Follow-up sequence: Apr 7 — Apr 10 (post-event nurture)

### Sales Pipeline
6-stage funnel:
- Aware
- Warm
- Hot
- Offer Sent
- Closed
- Not Now

Supports dynamic lead addition.

### Phase Tracker (6 Phases)
1. **Fill the Room** (Mar 17–Apr 6) — Active
2. **Build the Room** (Apr 1–6) — Upcoming
3. **Deliver & Close** (Apr 7) — Upcoming
4. **Follow Up** (Apr 7–10) — Upcoming
5. **Package** (Apr–May) — Upcoming
6. **Scale** (Jun+) — Upcoming

### Registration Progress
- Tracking: 0 / 50 target
- Milestone notifications at 10, 25, 50 registrants
- Integrated with Calendly CSV export
- Calibrated to track through Notion registrant tracker

### Integrated Tools & Resources
**Notion Pages (6 linked workspaces):**
- Command Centre (Strategy & decisions)
- Phase 1 Launch Assets (Hooks, title, lead magnet)
- Calendly Setup Guide (Registration setup)
- Session Design Intent (Taster positioning)
- Notion Launch Hub (Visual hub)
- Sales Pipeline (Notion board view)

**External Integrations:**
- Google Calendar event (Apr 7, 12:00 PM ET)
- Calendly CSV import support
- Registration link placeholder

### Key Decisions Panel
Configuration checklist (mostly TBD):
- Price: FREE ✓
- Date & time: Apr 7, 12:00 PM ET ✓
- Title: "Confident Under Pressure" ✓
- Registration platform: TBD
- Registration link: TBD
- Offer type: TBD
- Program name: TBD
- Paid program price: TBD
- Lead magnet designed: TBD
- Bonus decided: TBD
- Payment link created: TBD

---

## Technical Architecture

### Technology Stack
- **Framework:** React-based SPA (Single Page Application)
- **Hosting:** Netlify
- **Preview Builds:** Supports automated preview branch deploys
- **State Management:** Client-side auto-save functionality

### Key Technical Features
1. **Auto-save Metrics** — All scoreboard updates persist automatically
2. **Modal Dialogs** — Metric update modal with Cancel/Save
3. **URL Parameter Routing** — Demo mode detection and redirect
4. **External API Integration:**
   - Notion (embedded pages)
   - Google Calendar
   - Calendly (CSV import)
5. **Form Validation** — Hidden fields track form source/type

### Data Flow
- User submits registration form on public page
- Form data captured with hidden field identifiers
- Demo mode redirects to preview build with full dashboard
- All metrics stored client-side with auto-persistence
- Links to Notion/Google Calendar for collaborative editing

---

## File Structure

```
/sessions/youthful-inspiring-gauss/masterclass-dashboard/
├── index.txt              # Landing page content
├── dashboard.txt          # Full dashboard content & structure
└── SUMMARY.md            # This file
```

---

## Pages Not Found

**Tested URLs that returned 404:**
- `/dashboard.html`
- `/tool.html`
- `/api`

The site appears to be a single-page application (SPA) where routing is handled client-side, not through separate HTML files.

---

## Key Insights

1. **Gated Access Model** — Main domain is a registration gate; full dashboard only accessible via demo parameter or after form submission.

2. **Launch Orchestration** — Dashboard is a complete launch management tool, not just a tracker. It consolidates content calendar, sales pipeline, and project phases.

3. **Multi-Channel Strategy** — Coordinated 9-post LinkedIn sequence + 12-email campaign (main + follow-up) over 22 days.

4. **Notion-First Workflow** — Heavy integration with Notion workspaces suggests the real operational hub lives in Notion, with this dashboard as a summary/progress tracker.

5. **B2B Sales Funnel** — Sales pipeline tracking alongside registration metrics indicates dual focus: event attendance + direct client acquisition.

6. **Evergreen Assets** — Phase 5 (Package) and Phase 6 (Scale) suggest the masterclass will be productized into self-paced course + corporate/licensing offerings.

7. **Auto-Save UX** — All changes persist automatically, suggesting this is a real operational tool Kenny uses daily, not just a demo.

---

## Data Embedded in Dashboard

### Formulas/Calculations (None explicitly shown, but implied)
- Milestone triggers at 10, 25, 50 registrants
- Phase status logic (Active now vs Upcoming)
- Metric progress calculations (0/50, etc.)

### Fixed Data Points
- Event date/time: Apr 7, 2026, 12:00 PM ET
- Registration target: 50
- Campaign timeline: Mar 17 — Apr 10 (24 days)
- Content plan: 9 posts + 12 emails

### Dynamic Data Tracked
- Registration count (user-updated from Calendly)
- Metric completions (6 scoreboard items)
- Lead pipeline (6 stages with individual lead capacity)
- Phase progress (implicit in status labels)

---

## Summary Table

| Aspect | Details |
|--------|---------|
| **Total Pages** | 2 (landing page + dashboard) |
| **Public Access** | Landing page (gated) |
| **Demo Access** | Dashboard via ?demo=goto11 parameter |
| **Content Sections** | 8 major sections (Scoreboard, Posts, Emails, Pipeline, Phases, Registrants, Links, Decisions) |
| **Integrated Tools** | Notion (6 pages), Google Calendar, Calendly |
| **Tracked Metrics** | 6 core + infinite custom leads in pipeline |
| **Launch Timeline** | Mar 17 — Jun+ (6 phases) |
| **Event Details** | Free, Zoom, Apr 7, 12:00 PM ET |
| **Target Audience** | Executive communication buyers (B2B) |
