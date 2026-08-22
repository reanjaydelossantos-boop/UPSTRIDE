# UPSTRIDE

Production-ready marketing website for **UPSTRIDE — Digital Solutions. Skills. Growth.** Built with Next.js App Router, TypeScript and a custom responsive design system.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. To verify the production bundle:

```bash
pnpm build
pnpm start
```

## Content and architecture

- `app/data.ts` is the single source for solution, academy, resource and concept-project catalogs.
- Dynamic detail templates live in `app/components.tsx` and are statically generated.
- Consultation and certificate verification are intentional frontend demo flows with success, error, and accessibility states.
- Use `UPA-DEMO-2026` to test a positive certificate verification result.

## Production wiring

Before launch, replace the placeholder domain/email settings and Open Graph asset, connect the consultation form to an approved API/CRM, add payment checkout hooks for resources, and connect academy enrollment/LMS services. No fake backend, payments or authentication are included.

## Deploy

The app can be deployed directly to Vercel or any Node.js host that supports Next.js 15. Set the production domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
