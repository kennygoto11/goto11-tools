# Positioning Pitch Builder - Client Version

## Project Overview

The Positioning Pitch Builder is an interactive web application designed for clients to build, compare, and deploy their positioning statements. It's created by Go To 11 Communication Training.

## Site URLs

### Landing Page (Access Gate)
- **URL**: https://positioning-pitch-builder-clients.netlify.app/
- **Purpose**: Client access gate - collects name, email, and company information
- **Purpose**: Redirects to demo version or authenticated version based on form submission
- **Demo Redirect**: Contains JavaScript that detects `?demo=goto11` query parameter and redirects to: https://69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app

### Demo Version (Public Demo)
- **URL**: https://69c857d3ba49763db7f0344b--positioning-pitch-builder-clients.netlify.app/
- **Status**: Active, fully functional demo
- **Note**: This is a Netlify preview/branch deployment URL (indicated by preview hash)

### Alternative Deployment URLs
- The preview URL structure suggests multiple deployment branches/versions exist
- Naming pattern: `[HASH]--positioning-pitch-builder-clients.netlify.app`

## Application Structure

### Page 1: Industry Input
**Title**: "What's your industry?"

**Form Elements**:
- Text input field with placeholder: "e.g. Vegan food production, B2B SaaS, Financial advisory..."
- Icon: Building/Industry icon
- Button: "Continue →"

**Description**: Asks what kind of companies or sectors the user typically works in, requesting a few words describing their industry.

### Subsequent Pages
- Unknown - the application appears to use client-side routing (likely React)
- Form submission triggers API calls that generate positioning statements
- Navigation follows a multi-step wizard pattern

## Form Structure

### Landing Page Form (pitch-clients-access)
**Fields**:
- Your Name (required, text)
- Work Email (required, email)
- Company (required, text)

**Form Metadata**:
- form-id: `pitch-clients-access`
- form-name: `Positioning Pitch Builder (Clients)`

**Note**: Form appears to be connected to a backend service for managing client access

## Technology Stack

### Fonts
- **Nunito** (weights: 400, 600, 700) - from Google Fonts
- **Poppins** (weights: 400, 500, 600, 700) - from Google Fonts

### Architecture Indicators
- Uses React or similar SPA framework (page transitions without full reloads)
- Client-side form validation
- API communication for form submissions
- Dynamic step-based UI

## Brand Elements

### Go To 11 Branding
- Logo: Go To 11 sunburst icon in circle
- Color Scheme: Purple (#A535CF or similar)
- Typography: Modern sans-serif (Poppins/Nunito)
- Tagline: "Positioning that lands the first time"

### Footer
- Text: "Powered by Go To 11 — positioning that lands the first time"
- Link: https://goto11.ca

## Known Issues/Observations

1. **API Error on Form Submission**: Test submission with "Business Consulting" industry resulted in "Something went wrong. Please try again." error
2. **No /tool.html endpoint**: Direct navigation to `/tool.html` returns 404
3. **Dynamic URL structure**: The actual tool is served from a preview URL hash, not the main domain
4. **Network Activity**: Large API responses detected (199,857+ tokens captured)

## Form Submission Flow

1. User fills in name, email, company on landing page
2. User clicks "Access the Tool →"
3. Form submits to backend (likely Netlify Forms or similar)
4. User is redirected to the tool interface OR authenticated access is granted
5. User completes industry questionnaire and subsequent steps

## Data Collection

### Personal Information Collected
- Full Name
- Work Email
- Company/Organization

**Privacy Statement**: "Your information is kept confidential. We'll only use it to follow up with you about this tool."

## Deployment Platform

- **Host**: Netlify (netlify.app domain)
- **Repository**: Likely connected to Git (GitHub/GitLab/Bitbucket)
- **Deploy Strategy**: Multiple preview deployments for testing

## Related Applications

Based on open tabs and context, other Go To 11 tools include:
- **Inefficiency Cost Calculator**: https://goto11-cost-calculator.netlify.app/tool.html
- **Positioning Pitch Builder (Go To 11 Internal Version)**: https://positioning-pitch-builder-go-to-11.netlify.app/
- **Masterclass Dashboard**: https://masterclass-dashboard.netlify.app/

## API Endpoints Detected

The application communicates with API endpoints, though specific endpoints are not directly visible due to browser security restrictions. Network activity suggests:
- Industry classification/analysis API
- Positioning statement generation
- User authentication/form processing

## File Structure

Expected file organization (typical Netlify/React deployment):
```
/
├── index.html (landing page)
├── _redirects (Netlify redirect rules)
├── /public/
│   ├── favicon.ico
│   └── [assets]
└── /dist/ or /build/
    ├── js/ (compiled React bundles)
    ├── css/ (compiled styles)
    └── [assets]
```

## Accessibility Features

- Proper form labels and inputs
- Semantic HTML structure
- Responsive design (works on different viewport sizes)
- Claude AI assistant integration available (chat button observed in UI)
