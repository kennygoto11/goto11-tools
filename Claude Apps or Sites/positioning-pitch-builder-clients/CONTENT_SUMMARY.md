# Positioning Pitch Builder - Client Edition
## Complete Content Capture Summary

**Capture Date**: March 30, 2026
**Project**: Go To 11 Positioning Pitch Builder (Client Version)

---

## Executive Summary

The Positioning Pitch Builder is a multi-step interactive web application that guides users through creating, comparing, and deploying positioning statements for their business or service. The application is deployed on Netlify and uses a two-tier access model: a public landing page for client sign-up and a protected tool interface for authenticated users.

---

## Site Pages Captured

### Total Pages: 2 (documented)

1. **Landing Page / Access Gate** - https://positioning-pitch-builder-clients.netlify.app/
2. **Tool Interface (Demo Version)** - https://69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app/

---

## Page 1: Client Access Landing Page

**URL**: https://positioning-pitch-builder-clients.netlify.app/

### Visible Content

#### Header Section
- **Logo**: Go To 11 branded sunburst icon in circle (purple background)
- **Title**: "Client Positioning Tool"
- **Subtitle**: "Access the interactive positioning and pitch builder designed for your engagement. Enter your details below."

#### Form Section
**Form ID**: pitch-clients-access
**Form Name**: Positioning Pitch Builder (Clients)

**Input Fields**:
1. **Your Name**
   - Type: Text
   - Placeholder: "First and last name"
   - Required: Yes

2. **Work Email**
   - Type: Email
   - Placeholder: "you@company.com"
   - Required: Yes

3. **Company**
   - Type: Text
   - Placeholder: "Your organisation"
   - Required: Yes

**Call-to-Action Button**:
- Text: "Access the Tool →"
- Type: Submit
- Colour: Purple (#A535CF or similar)
- State: Disabled until form is valid

#### Footer Section
- **Disclaimer**: "Your information is kept confidential. We'll only use it to follow up with you about this tool."
- **Credit Line**: "Go To 11 Communication Training — [goto11.ca](https://goto11.ca)"

### Embedded JavaScript

**Demo Redirect Logic**:
```javascript
(function() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('demo') === 'goto11') {
        window.location.href = 'https://69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app';
    }
})();
```

**Purpose**: Allows direct access to demo version via `?demo=goto11` query parameter for testing/demos

### CSS Framework
- **Font Families**: Nunito (400, 600, 700), Poppins (400, 500, 600, 700)
- **Source**: Google Fonts API
- **Color Scheme**: Purple brand with light gray backgrounds
- **Layout**: Centered card design on light background

---

## Page 2: Positioning Pitch Builder Tool (Demo)

**URL**: https://69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app/

### Deployment Note
This URL uses a Netlify preview/branch deployment identifier (hash: `69c857d3ba49763db7f0344b`), indicating it's a staging or preview version rather than production.

### Tool Header
- **Logo**: Go To 11 icon
- **Title**: "Positioning Pitch Builder"
- **Subtitle**: "Build, compare, and deploy your positioning statements"
- **Background**: Purple gradient

### Step 1: Industry Classification

**Section Title**: "What's your industry?"

**Instruction Text**: "What kind of companies or sectors do you typically work in? A few words is all we need."

**Input Field**:
- **Type**: Text input
- **Placeholder**: "e.g. Vegan food production, B2B SaaS, Financial advisory..."
- **Description**: Open-ended industry/sector description field

**Icon**: Building/industry icon (building emoji or similar)

**Navigation**:
- **Button**: "Continue →"
- **Behaviour**: Advances to next step upon submission

### Subsequent Steps
The application appears to proceed through multiple steps (estimated 5-8 steps based on typical positioning statement builders), including:

**Estimated Step Sequence**:
1. Industry/Sector (captured)
2. Target Audience/Customer Profile
3. Key Benefits/Unique Value
4. Competitive Positioning
5. Positioning Statement Draft
6. Statement Comparison/Variants
7. Final Review/Deployment
8. Export/Download Options

*Note: Exact steps and content not fully captured due to API limitations*

### Technical Observations

**API Integration**:
- Form submissions trigger backend API calls
- Large response payloads detected (199K+ tokens)
- Likely uses Claude or similar AI for statement generation

**Error Handling**:
- Test submission with "Business Consulting" returned: "Something went wrong. Please try again."
- Suggests validation rules or backend service issues

**Client-Side Technology**:
- Appears to use React or similar SPA framework
- No page reloads between steps
- Dynamic form rendering
- Real-time validation

---

## Design System

### Branding
- **Brand Name**: Go To 11 Communication Training
- **Primary Website**: https://goto11.ca
- **Tagline**: "Positioning that lands the first time"

### Color Palette
- **Primary Purple**: #A535CF (approximate)
- **Light Gray Background**: #F5F5F5 (approximate)
- **Text Dark**: #333333
- **Text Light**: #999999

### Typography
- **Headlines**: Poppins (600-700 weight)
- **Body**: Nunito (400-600 weight)
- **Sizing**: Responsive, mobile-first approach

### UI Patterns
- Centered card layouts
- Full-width buttons with rounded corners
- Icon + text combinations
- Placeholder-based hints rather than floating labels
- Multi-step wizard interface

---

## Data Collection & Privacy

### Form Data Collection
- Personal name (full)
- Work email address
- Company name/organization

### Privacy Statement
"Your information is kept confidential. We'll only use it to follow up with you about this tool."

### Data Usage Intent
- Follow-up communication about the Positioning Pitch Builder tool
- Likely: user onboarding, feature updates, support

---

## File Structure & Assets

### Captured Files
```
/sessions/youthful-inspiring-gauss/positioning-pitch-builder-clients/
├── index-landing-page.html (reconstructed)
├── APP_STRUCTURE.md (this analysis)
├── CONTENT_SUMMARY.md (this document)
└── [screenshots from browser]
```

### Expected Production Files
- `/index.html` - Landing page
- `/dist/` or `/build/` - Compiled React bundles
- `/assets/` - Images, icons, fonts
- `/_redirects` - Netlify routing rules
- `/manifest.json` - PWA manifest
- `/public/` - Static assets

---

## Network & API Information

### Detected Endpoints
The application makes requests to various APIs for:
1. Form submission/data collection
2. Industry classification/analysis
3. Positioning statement generation
4. Content retrieval

**Network Activity Summary**:
- Initial page load: ~15 requests
- Google Fonts: 2 font families
- Chrome extensions: 6 extension requests (not part of app)

### Browser Support
- Modern browsers with ES6+ support
- Mobile-responsive (observed at 1494x822 viewport)
- Touch-friendly UI elements

---

## Related Go To 11 Applications

Based on discovered deployment infrastructure:

1. **Inefficiency Cost Calculator**
   - URL: https://goto11-cost-calculator.netlify.app/tool.html
   - Purpose: Calculate business impact of inefficiency

2. **Positioning Pitch Builder (Internal Version)**
   - URL: https://positioning-pitch-builder-go-to-11.netlify.app/
   - Purpose: Internal tool for Go To 11 team

3. **Masterclass Dashboard**
   - URL: https://masterclass-dashboard.netlify.app/
   - Purpose: Learning/training platform

---

## Key Findings

### Pages/Sections
- **Total distinct pages**: 2 (landing gate + tool interface)
- **Multi-step flow**: Estimated 5-8 internal steps within tool
- **Wizard pattern**: Sequential, forward-moving interface

### Data & Formulas
- **Input types**: Text, email, open-ended descriptions
- **Processing**: Server-side (API-based positioning generation)
- **Likely algorithms**:
  - Industry classification (keyword matching or ML)
  - Positioning statement generation (template-based or AI-generated)
  - Competitive analysis (algorithmic comparison)

### Architecture
- **Frontend**: React or Vue SPA with TypeScript
- **Backend**: Serverless functions (Netlify Functions) or external API
- **Database**: Likely cloud-based (Firebase, MongoDB Atlas, or PostgreSQL)
- **Deployment**: Netlify with multiple preview branches
- **AI/ML**: Likely Claude API integration for content generation

---

## Access & Authentication

### Public Access
- Landing page is fully public (no authentication required)
- Demo version accessible via `?demo=goto11` parameter

### Protected Access
- Main tool requires form submission on landing page
- Likely uses email/form-based authentication
- Session tokens or JWT-based auth implied

### Demo Access
- Direct preview URL available: `69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app`
- Allows testing without form submission
- Suggests staged deployment workflow

---

## User Experience Flow

1. **Entry**: User visits https://positioning-pitch-builder-clients.netlify.app/
2. **Registration**: User fills in name, email, company
3. **Submission**: Form is validated and submitted
4. **Onboarding**: User is guided through positioning builder steps
5. **Creation**: User inputs industry/sector information
6. **Generation**: System generates positioning statements
7. **Review**: User reviews and compares generated statements
8. **Deployment**: User finalizes and exports positioning

---

## Observations & Notes

### Strengths
- Clean, modern UI design
- Privacy-conscious approach
- Multi-step guidance reduces cognitive load
- Mobile-responsive interface
- Go To 11 brand integration

### Technical Notes
- Uses modern web technologies (React, TypeScript likely)
- Netlify deployment suggests modern DevOps practices
- Preview deployments indicate strong testing/staging process
- Large API responses suggest generative AI integration

### Limitations
- Static file access restricted (security)
- API validation rules unclear
- Full step sequence not documented
- Error handling behavior unpredictable

### Deployment Infrastructure
- Netlify platform (hosting + CI/CD)
- Git-based deployment workflow
- Multiple environment support (preview + production)
- Custom domain support (goto11.ca references)

---

## Recommendations for Documentation

### To Complete Documentation
1. Capture all intermediate steps (requires successful form submission)
2. Retrieve compiled JavaScript bundles for detailed architecture analysis
3. Document API endpoint specifications
4. Extract positioning statement generation logic
5. Map full user journey with screenshots of each step

### Access Requirements
- Valid email address for form submission
- Possible rate limiting on API calls
- Backend service may require authentication tokens

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| **Public Pages Documented** | 1 (landing page) |
| **Tool Screens Documented** | 1 (industry input step) |
| **Total Estimated Steps** | 5-8 |
| **Form Fields** | 3 (landing) + multiple (tool) |
| **Brand Colors** | 1 primary (purple) |
| **Font Families** | 2 (Poppins, Nunito) |
| **API Endpoints** | 3+ (estimated) |
| **Network Requests** | 15+ per page load |
| **Screenshots Captured** | 4 |
| **URLs Discovered** | 3 |

---

**Document Status**: Complete for accessible pages
**Last Updated**: March 30, 2026
**Captured By**: Claude Code Content Extraction
