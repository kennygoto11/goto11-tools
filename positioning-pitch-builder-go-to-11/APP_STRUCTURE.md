# Positioning Pitch Builder - Complete Application Structure

## Overview

The Positioning Pitch Builder is an interactive tool designed for Go To 11 clients and internal team to create, compare, and deploy positioning statements. It uses a structured workflow based on audience context.

**Live URLs:**
- Internal Tool: https://positioning-pitch-builder-go-to-11.netlify.app/
- Client Tool: https://positioning-pitch-builder-clients.netlify.app/
- Demo/Staging: https://69c802f9b878206b9e8f8e79--positioning-pitch-builder-go-to-11.netlify.app/

## Architecture

### Technology Stack
- Frontend: React SPA (Single Page Application)
- Hosting: Netlify
- Authentication: Form-based gating (collects name, email, company)
- State Management: Likely localStorage or backend API
- Styling: Appears to be custom CSS (styled with emojis in buttons)

### Pages/Routes

#### 1. Access/Landing Page
**URL:** https://positioning-pitch-builder-go-to-11.netlify.app/
**Purpose:** Gated access control
**Form Fields:**
- Your Name (text input, placeholder: "First and last name")
- Work Email (email input, placeholder: "you@company.com")
- Company (text input, placeholder: "Your organisation")
- Access the Tool button (submit)

**Hidden Form Fields:**
- form-id: "pitch-goto11-access"
- form-name: "Positioning Pitch Builder (Go To 11)"

**Additional Elements:**
- Privacy notice: "Your information is kept confidential. We'll only use it to follow up with you about this tool."
- Footer link: goto11.ca

**Demo Redirect Logic:**
- If URL param `?demo=goto11` is present, redirects to the preview deployment

#### 2. Client Access Page
**URL:** https://positioning-pitch-builder-clients.netlify.app/
**Purpose:** Same as above but for clients
**Structure:** Identical to internal access page
**Hidden Form Fields:**
- form-id: "pitch-clients-access"
- form-name: "Positioning Pitch Builder (Clients)"

#### 3. Main Application Dashboard
**URL:** https://69c802f9b878206b9e8f8e79--positioning-pitch-builder-go-to-11.netlify.app/
**Heading:** "Positioning Pitch Builder"
**Tagline:** "Build, compare, and deploy your positioning statements"

**Navigation Tabs (3 main sections):**
1. ✏️ Builder - Create new positioning statements
2. 📋 My List - View and manage saved pitches
3. 🗑️ Trash - View deleted items

**Three-Column Layout:**
- Column 1: "Audience" - Choose target context
- Column 2: "Who + What" - Build the positioning elements
- Column 3: "Your Pitches" - View generated statements

## Workflow / User Flow

### Step 1: Audience Selection
User selects from 6 industry/context categories:

**1. Tech / SaaS**
- Context: "Selling platforms, integrations, or digital products"
- Use cases: Pitching B2B software, APIs, integrations, digital tools

**2. Investment / Finance**
- Context: "Raising capital, pitching funds, or selling financial products"
- Use cases: Fundraising, pitch to VCs, selling financial instruments

**3. CPG / Consumer Goods**
- Context: "Launching products, entering markets, or pitching retail"
- Use cases: Consumer product launches, retail placement, brand pitches

**4. Professional Services**
- Context: "Consulting, agencies, or advisory firms pitching clients"
- Use cases: Consulting firms, agencies, advisory services pitching to clients

**5. Startup / Founder**
- Context: "Pitching investors, boards, or strategic partners"
- Use cases: Startup founder pitches, board presentations, partnership pitches

**6. Internal Corporate**
- Context: "Pitching up — strategies, budgets, or initiatives to leadership"
- Use cases: Internal pitches to executives, budget requests, initiative proposals

### Expected Subsequent Steps
(Based on common positioning frameworks)
- Step 2: Define the problem/opportunity
- Step 3: Identify the solution
- Step 4: Build the pitch/positioning statement
- Step 5: Compare and refine
- Step 6: Deploy/Export

## Data Model (Inferred)

### Positioning Statement Object
```
{
  id: string (unique identifier),
  createdAt: timestamp,
  updatedAt: timestamp,
  name: string (user-given name),
  audience: "tech" | "finance" | "cpg" | "services" | "startup" | "corporate",
  problemStatement: string,
  solutionStatement: string,
  positioningStatement: string,
  pitchVariations: array[string],
  status: "draft" | "published" | "deleted"
}
```

### User Session Data
```
{
  name: string,
  email: string,
  company: string,
  sessionId: string,
  accessedAt: timestamp,
  savedPitches: array[Positioning Statement Object],
  trash: array[Positioning Statement Object]
}
```

## Key Features

1. **Multi-Audience Support** - Contextualizes positioning based on who you're pitching
2. **Structured Workflow** - Step-by-step guide through positioning development
3. **Comparison Tools** - Compare pitches side-by-side
4. **Revision History** - Trash/recovery system
5. **Export Capability** - Deploy/share positioned statements

## Integration Points

- Netlify Forms API (likely used for the access form)
- Possibly connected to backend for user data persistence
- Possible CRM integration for follow-up tracking

## Accessibility & Branding

- Header: Go To 11 logo
- Consistent branding with goto11.ca
- Privacy-conscious (no tracking beyond form submission)
- Professional, clean interface
- Emoji-based navigation (modern, friendly tone)

## Notes on Go To 11 Framework Integration

The tool appears to implement Go To 11's positioning methodology:
- Recognition of different audience contexts
- Problem-Solution-Positioning arc
- Focus on decision acceleration through clear positioning
- Three Pillars consideration (People, Process, Presentation)

