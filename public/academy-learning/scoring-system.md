# UPSTRIDE Academy Submission and Scoring System

## Learner flow

1. The learner reads the module and its field-by-field lab explanation.
2. The learner opens the course lab workbook and completes that module’s connected evidence package.
3. **Check my work** provides immediate provisional feedback.
4. The learner revises until the work reaches at least 75/100.
5. **Export submission JSON** creates a safe structured submission containing all ten modules, individual scores, total course points, and overall percentage.
6. The future learning system accepts the JSON and evidence attachments, repeats the deterministic checks on the server, and places flagged work in the instructor queue.
7. Instructor-reviewed points replace provisional points when professional judgment or working behavior must be assessed.

## Points per main module

| Category | Points | Automatic evidence check |
|---|---:|---|
| Objective and brief | 20 | Objective, current-state evidence, inputs, and constraints meet structure requirements |
| Implementation decisions | 25 | At least three explained decisions are present |
| Test coverage | 25 | At least three tests represent normal, boundary, and failure/permission conditions |
| Evidence and traceability | 20 | Evidence references are present and can be traced to the work |
| Reflection | 10 | Learner explains a decision, limitation, and next improvement |

Each course has 1,000 available main-module points. The passing threshold is 750, subject to review of critical requirements.

## Mandatory instructor review triggers

- A capstone or tool module claims that a system works.
- Evidence cannot be opened, traced, or safely verified.
- The submission includes personal data, credentials, private client information, or fabricated results.
- Tests omit an important safety, privacy, access, accessibility, or failure condition.
- The learner’s explanation conflicts with the submitted artifact.
- Originality or authorship requires clarification.

## Future backend contract

The website backend should store the learner ID, course and module IDs, submission version, structured answers, safe evidence references, automatic score, instructor score, feedback, status, timestamps, and audit history. Files should use private storage and time-limited access. Secrets and real client data must be rejected. Authentication, storage, malware scanning, plagiarism/originality review, notifications, and instructor moderation are required before production use.

The local workbooks are functional review prototypes. They save only in the learner’s browser and export JSON; they do not send data to the live website.
