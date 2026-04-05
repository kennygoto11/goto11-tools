# Positioning Pitch Builder — Go To 11 (Internal)

## What This Is
Internal version of the Positioning Pitch Builder for Kenny's own use at Go To 11. Same core functionality as the client version but configured for internal positioning work.

## Live URL
https://positioning-pitch-builder-go-to-11.netlify.app

## Netlify
- **Site ID:** 963283d5-fb5b-4cb3-b7ab-2ffc3c20e467
- **Project URL:** https://app.netlify.com/projects/positioning-pitch-builder-go-to-11
- **Deploy type:** Manual (no linked Git repo)

## Architecture
- React SPA (compiled/bundled)
- Netlify Forms for gating
- Demo bypass: `?demo=goto11` redirects to preview deployment
- Form ID: `pitch-goto11-access`

## Main App Features
Three-tab interface:
1. **Builder** — Create new positioning statements with 6 audience categories:
   - Tech/SaaS
   - Investment/Finance
   - CPG/Consumer Goods
   - Professional Services
   - Startup/Founder
   - Internal Corporate
2. **My List** — View and manage saved pitches
3. **Trash** — View deleted items with recovery

## Important Note
This is a compiled React app. The source files in this folder are documentation and reconstructed HTML — not the original React source code. To make significant changes, the app would need to be rebuilt.

## Last Updated
March 30, 2026 — Content captured from live site and documented.
