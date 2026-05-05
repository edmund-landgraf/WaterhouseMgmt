# Portal Walkthrough

Waterhouse currently models tenant, owner, manager, and internal admin portal experiences.

## Tenant Portal

- Review notices.
- Submit maintenance requests.
- See rent/payment prompts once payment integration exists.
- Contact the management team.

The tenant experience should be mobile-first, clear, and low-friction.

## Owner Portal

- Review portfolio performance.
- See community-level reporting.
- Track projects and open issues.
- Access documents.

Owner-facing language should be concise, confident, and report-ready.

## Manager Portal

- Track maintenance.
- Review applications and leasing work.
- Monitor community tasks.
- Coordinate vendors and partner systems.
- See operational queues.

The manager experience should be dense but organized for repeated daily use.

## Internal Admin Dashboard

Current access:

- `/internal/login`
- `/internal`

Prototype access:

- Password: `waterhouse-admin`
- Test override button: `Use test user`

Security note: this is client-side access control for a prototype. Production protection should be enforced by the server, proxy, or identity provider.
