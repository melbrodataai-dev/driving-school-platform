# Professional Driving School Redesign

## Goal
Replace the playful visual treatment with a credible, adult-oriented driving school website that feels appropriate to Zimbabwean learners and works well on mobile. Keep the no-fee handover context and clearly label all demonstration-only features.

## Source baseline
Use the latest `origin/main` of `web/` (currently one commit ahead of the local checkout at review time). Preserve its consolidated routes and student practice flow. Do not publish or deploy as part of the redesign.

## Design direction
Use a restrained orange, warm white/cream, charcoal and muted grey palette. Use strong, readable typography, consistent spacing, subtle borders, compact radii and a clear content hierarchy. Remove cartoon illustrations, oversized decorative signs, emoji decoration and playful slogans. Use credible driving imagery only when a suitable asset is available; do not fabricate school photos, credentials, testimonials or claims. Keep the school identity and supplied content marked provisional until Ronald confirms them.

## Pages and interactions
- **School homepage:** clear identity and Zimbabwe location, concise value proposition, prominent lesson enquiry and theory-practice actions, transparent demonstration notice, course/service overview, practical next steps, confirmed contact details only.
- **Learning hub and practice:** consistent header and navigation, focused lesson list, restrained progress display, clear quiz progress and answer feedback, sample-content notice, legible diagrams and mobile-friendly controls.
- **Login and admin demonstrations:** coherent visual language with persistent notices that these are previews and cannot manage real students or upload content.
- Preserve current working demo navigation, quiz scoring, practice flow and sample lesson interactions. Do not imply authentication, persistence, enquiries, uploads or access controls work when they do not.

## Accessibility and responsive behavior
Use semantic headings and landmarks, visible keyboard focus, readable contrast, comfortable tap targets, reduced-motion support and layouts that work at 375px and larger screens. Avoid color-only correctness indicators.

## Validation
Run the project's lint and production build. Inspect homepage, practice, login and admin demo at desktop and narrow mobile widths. Verify navigation and quiz interactions still work. These checks validate the demo only; they do not establish production readiness or test real student services.

## Out of scope
Backend/authentication, real school content, account or billing transfers, service provisioning, Vercel deployment, GitHub publication, and claims of improved enrolment or pass rates.
