# App Architecture

## Stack

The current scaffold uses:

- Node.js
- Express
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-style local UI components
- lucide-react icons
- framer-motion

## Current Repository Structure

```text
.
├── docs/
├── server/
│   ├── data/
│   │   └── waterhouse.js
│   └── index.js
├── src/
│   ├── components/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── app.tsx
│   ├── main.tsx
│   └── styles.css
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Current API

### `GET /api/health`

Returns service health.

### `GET /api/waterhouse`

Returns the full seeded operating model:

- company
- pages
- communities
- business lines
- functions
- SaaS components
- provider examples

### `GET /api/waterhouse/business-lines/:id`

Returns one business line by id.

## Current Frontend

The first UI is an operations map.

Current views:

- hero summary
- company contact card
- business-line selector
- function chips
- SaaS component cards
- provider examples
- scraped site-page links
- community portfolio search/filter

## Suggested Production Architecture

### Frontend

- React Router for routed sections
- TanStack Query for API state
- React Hook Form and Zod for validated forms
- shadcn components installed through CLI as the UI surface grows
- dashboard layout with persistent left navigation

### Backend

- Express API by domain route:
  - `/api/business-lines`
  - `/api/communities`
  - `/api/providers`
  - `/api/components`
  - `/api/workflows`
  - `/api/documents`
- Zod request/response schemas
- authentication middleware
- role-aware authorization

### Data

Start with Postgres.

Recommended options:

- Supabase for hosted Postgres, auth, storage, and edge functions
- Neon or Render Postgres if auth/storage are handled separately
- Prisma or Drizzle as ORM/query layer

### Integrations

Initial integration candidates:

- Stripe or Zego-style payments abstraction
- DocuSign or Dropbox Sign
- Google Maps Platform
- AppFolio/Yardi/Rent Manager export/import workflows
- HubSpot CRM
- MHVillage/listing feeds

## Domains to Keep Separate

The app should not force one workflow model onto every business line.

Keep these domains separate:

- property management
- dealership/infill projects
- asphalt paving jobs
- brokerage deals
- communities and resident experience
- shared CRM/contact records
- shared documents
- shared reporting
