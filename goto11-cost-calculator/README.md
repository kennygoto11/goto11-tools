# Inefficiency Cost Calculator

## What This Is
An interactive web tool that quantifies the dollar impact of ineffective communication across an organisation. Used in sales conversations, proposals, and client walkthroughs to demonstrate the cost of inaction.

## Live URL
https://goto11-cost-calculator.netlify.app

## Netlify
- **Site ID:** 2abeb723-613b-460d-8072-41191c288008
- **Project URL:** https://app.netlify.com/projects/goto11-cost-calculator
- **Deploy type:** Manual (no linked Git repo)

## File Structure
- `index.html` — Gate page (collects name, email, company via Netlify Forms)
- `tool.html` — The calculator itself (all logic embedded in JS)

## How It Works
Two pages. The gate page collects lead info, then redirects to the calculator. Demo bypass: add `?demo=goto11` to skip the gate.

### Calculator Inputs
- Average attendee salary (default: $185,000)
- Number of attendees (default: 5)
- Meeting duration (default: 60 min)
- People involved in rework (default: 3)
- Total rework time (default: 120 min)
- Value of the initiative (default: $500,000)
- Decision delay (default: 5 days)
- Failed communications per week (default: 3)
- Direct reports (default: 6)

### Core Formulas
- Per-minute rate = salary ÷ 2,080 hours ÷ 60 minutes
- Wasted meeting cost = rate × attendees × duration × waste factor
- Rework cost = rate × rework people × rework time × waste factor
- Delay cost = (initiative value ÷ 365) × delay days
- Annual projection = single event total × frequency × reports × 52 weeks
- FTE equivalent = annual total ÷ salary

### Two Modes
- **Conservative:** 50% waste factor on meeting and rework (use for sceptical CFOs)
- **Moderate:** Full cost (default)

## How to Deploy
To redeploy after making changes, use the Netlify MCP deploy tool with site ID `2abeb723-613b-460d-8072-41191c288008`. Both `index.html` and `tool.html` must be deployed together as a single site.

## Last Updated
March 30, 2026 — Source files pulled from live site and saved here for the first time.
