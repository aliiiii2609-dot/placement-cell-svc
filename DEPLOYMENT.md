# Deployment, one page

## Netlify, link from GitHub (recommended)

1. Push this repo to a GitHub organization the cell controls.
2. In Netlify, "Add new site" → "Import an existing project" → GitHub.
3. Select this repo. Netlify reads `netlify.toml` and configures the build automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Click "Deploy site". First build takes 60-90 seconds.
5. Wire DNS in Netlify → "Domain management". The cell's preferred domain points to Netlify's CNAME. SSL is automatic.

## Netlify, drag-and-drop (no GitHub needed)

1. Locally: `npm install && npm run build`
2. Open Netlify → "Deploys" tab.
3. Drag the `dist/` folder into the drop zone. The site is live in 30 seconds.

## Local production preview

```bash
npm run build
npm run preview
# Opens http://localhost:4173
```

## Continuous deployment

Once linked, every push to `main` triggers a new deploy. Preview deploys are created for every pull request automatically.

## Environment

No environment variables are required for the MVP build. Everything runs client-side. When the backend integration points are wired (admin auth, real form submission, CV uploads), set:

- `VITE_API_BASE` — the cell's API base URL
- `VITE_AUTH_PROVIDER` — magic-link or SSO endpoint
- `VITE_STORAGE_BUCKET` — file upload destination (S3, Cloudflare R2, etc.)

These are read by `vite.config.ts` and surfaced under `import.meta.env`.

## Domain ownership

The site should be served from a `du.ac.in` subdomain managed by the college, with a redirect from the cell's preferred short link. The Faculty Convener authorizes domain changes.

## Rollback

Every Netlify deploy is preserved. From the Netlify "Deploys" tab, click any prior deploy, then "Publish deploy" to roll back. No code change needed.
