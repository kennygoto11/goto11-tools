# Positioning Pitch Builder — Client Version

## What This Is
An interactive tool that guides clients through building, comparing, and deploying positioning statements. Multi-step wizard that asks about industry context and generates positioning options.

## Live URL
https://positioning-pitch-builder-clients.netlify.app

## Netlify
- **Site ID:** c7e299e1-060b-4a17-b4df-6c9f5ae4be1d
- **Project URL:** https://app.netlify.com/projects/positioning-pitch-builder-clients
- **Deploy type:** Manual (no linked Git repo)

## Architecture
- React SPA (compiled/bundled)
- Netlify Forms for gating
- Demo bypass: `?demo=goto11` redirects to preview deployment
- Form ID: `pitch-clients-access`

## How It Works
1. Gate page collects name, email, company
2. Step 1: "What's your industry?" — text input
3. Subsequent steps guide through positioning statement creation
4. Users can compare and deploy positioning statements

## Important Note
This is a compiled React app. The source files in this folder are documentation and reconstructed HTML — not the original React source code. To make significant changes, the app would need to be rebuilt. For content-level changes (copy, defaults, styling), the compiled output can be modified directly.

## Last Updated
March 30, 2026 — Content captured from live site and documented.
