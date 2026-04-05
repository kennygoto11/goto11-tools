# Positioning Pitch Builder - Site Structure

## Pages Discovered

### 1. Landing/Access Page
- URL: https://positioning-pitch-builder-go-to-11.netlify.app/
- Purpose: Gated access form for Go To 11 internal positioning tool
- Elements: Name, Email, Company fields + Submit button
- Purpose: Collects contact info before allowing access to the tool

### 2. Client Access Page
- URL: https://positioning-pitch-builder-clients.netlify.app/
- Purpose: Gated access form for client-facing positioning tool
- Elements: Name, Email, Company fields + Submit button

### 3. Main Application (Demo)
- URL: https://69c802f9b878206b9e8f8e79--positioning-pitch-builder-go-to-11.netlify.app/
- Purpose: Interactive positioning and pitch builder tool
- Navigation Buttons:
  * ✏️ Builder - Create new positioning statements
  * 📋 My List - View saved pitches
  * 🗑️ Trash - View deleted items

## Key Sections

### Step 1: Audience Selection
User selects from 6 industry/context categories:
1. Tech / SaaS - "Selling platforms, integrations, or digital products"
2. Investment / Finance - "Raising capital, pitching funds, or selling financial products"
3. CPG / Consumer Goods - "Launching products, entering markets, or pitching retail"
4. Professional Services - "Consulting, agencies, or advisory firms pitching clients"
5. Startup / Founder - "Pitching investors, boards, or strategic partners"
6. Internal Corporate - "Pitching up — strategies, budgets, or initiatives to leadership"

## Application Type
- React-based SPA (Single Page Application)
- Netlify hosted
- Authentication via gated access form
- State management for saving user pitches (localStorage or backend)

