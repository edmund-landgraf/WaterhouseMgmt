# Implementation Walkthrough

This document tracks major implementation milestones for the Waterhouse site and internal dashboard.

## Public Redesign

Implemented:

- Public home page.
- Services page.
- Communities page.
- History page.
- Contact page.
- Tenant, owner, and manager portal prototypes.

## Dev Server Ports

Current defaults:

- Main app: `6001`
- Redesign app: `6002`

Package scripts:

- `npm run dev:client`
- `npm run dev:redesign`

## Internal Dashboard

Implemented:

- `/internal/login`
- `/internal`
- Client-side session flag.
- Password prototype.
- Test user override.
- Markdown docs viewer.

## Documentation Expansion

Waterhouse docs now mirror the same strategic and operational areas that existed in the BrokerBizOps internal documentation set, adapted to Waterhouse's businesses.

## Next Implementation Targets

- Server-side protection for `/internal`.
- Search across Markdown contents, not only filenames.
- Live docs discovery instead of hardcoded imports.
- Production static hosting through Nginx.
- Replace prototype portal state with backend-backed auth and records.
