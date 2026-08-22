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

The consultation form and `/admin` inquiry workspace use Supabase. Create a Supabase project, run `supabase.sql` in its SQL Editor, copy `.env.example` to `.env.local`, and fill in the four values. In Vercel, add the same variables under **Project Settings → Environment Variables**, then redeploy. Keep the service-role key and admin values secret; never expose them through `NEXT_PUBLIC_` variables.

Open `/admin` and sign in with `ADMIN_PASSWORD`. Admin sessions use a secure HTTP-only cookie signed with `ADMIN_SECRET`. The dashboard supports viewing inquiries and updating their status.

Before launch, also replace the placeholder domain/email settings and Open Graph asset, add payment checkout hooks for resources, and connect academy enrollment/LMS services.

## Deploy

The app can be deployed directly to Vercel or any Node.js host that supports Next.js 15. Set the production domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
