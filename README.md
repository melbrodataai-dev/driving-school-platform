# Ronald's Driving School — website demonstration

A Next.js demonstration for a Zimbabwe driving school. The interface includes a school homepage, sample VID theory practice, student learning area, sample login and admin preview.

**This repository is public. Do not put real student data, passwords, private school records or secrets here.** School identity and sample material remain provisional. Student accounts, saved progress, protected video, enquiry delivery and real administration have not been connected. Do not use this demo for real student records.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev -- --port 3100
```

Open <http://localhost:3100>. The `/preview` route shows the same school preview. To run checks:

```bash
npm run lint
npm run build
```

## Main routes

- `/` — school homepage and free sample theory test
- `/login` — demonstration student sign-in
- `/dashboard` — sample student learning area after demo sign-in
- `/practice` — sample mock exam after demo sign-in
- `/preview` — homepage and in-page previews for school, student and admin views

The sample sign-in values are prefilled on the login page. They are public demo credentials and must never be treated as secure accounts.

## Demo boundaries

- Questions and answers are sample content pending school/instructor approval.
- Sample lesson footage is a generic placeholder, not a driving lesson.
- Progress and admin changes are temporary demonstrations.
- Enquiry forms do not send or store submissions.
- Video upload and password reset controls do not perform those actions.
- The design uses provisional school branding and confirmed contact details are still needed.

## Before real student use

Implement and verify real authentication and role checks, student data isolation, persistent progress, protected lesson delivery, password recovery, enquiry delivery, approved course content, backups and recovery. Confirm the school identity, content rights, provider costs and account owners. Test the complete student and admin journeys on ordinary phones before inviting students.

The local redesign is source work only. A GitHub push does not by itself prove a successful Vercel deployment; verify the deployment and its target commit separately.
