# Driving school consolidation

Keep the GitHub-linked `driving-school-platform` project and its Sunrise design.
Remove `driving-school-demo-ronald` only after the replacement has been verified
and any unique source, configuration, or stored data has been accounted for.

## Feature inventory (16 September 2026)

| Feature | Consolidated location | Status |
| --- | --- | --- |
| Ronald free 10-question test | Home → Free theory test | Shared original Quiz and question bank retained |
| Correct answers, explanations, score, retry | Quiz component | Retained |
| Mock exam and roundabout diagram | Learning hub → Mock practice; `/practice` | Retained |
| Student demo sign-in/session/logout | `/login`, `/dashboard`, existing API routes | New design now calls the existing demo login |
| Ronald sample video and original dashboard | `/practice` | Original implementation retained |
| Sunrise landing page, FAQs, instructor section | `/` and `/preview` | Retained |
| Eight lesson entries and completion counter | Learning hub | Existing in-memory demo; resets on reload |
| Road-sign library | Learning hub → Road signs | Existing three-sign demo retained |
| Enquiry form | Home → contact | Preview only; does not send or store enquiries |
| Add/pause/restore students and print | Footer → Admin demo | In-memory demo; no real permissions or persistence |
| Video selection and password reset | Admin demo | Placeholders; no upload or password change |
| Leaderboard and score history | Learning hub | Placeholder, no stored rankings |

Ronald's `/` and `/login` were fetched successfully; `/admin` and `/preview`
returned 404. A complete source/configuration export of the standalone Ronald
deployment has not been obtained, so absence of other routes or data is not assumed.

## Production work still required

- Verified identities and server-enforced admin/student roles. Never infer admin
  privileges from a username entered in a form.
- Persistent student accounts, enrolment/access controls, lesson progress and scores.
- Real video storage, delivery, password recovery and enquiry delivery.
- School-approved lessons, question bank, contact details and enrolment policy.

Current public demo credentials and mock session are unsuitable for real student data.
Do not describe this prototype as a completed production learning platform.

## Deployment cleanup

Production alias: `https://driving-school-platform-navy.vercel.app`.
The Vercel connector provides inspection, but no project-delete operation is
advertised. No Vercel CLI authentication/token is configured in this workspace.
The duplicate has not been deleted. Never delete the GitHub repository.
