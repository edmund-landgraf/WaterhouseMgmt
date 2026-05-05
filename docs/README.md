# Waterhouse Operations Platform Docs

This docs section organizes the public-site scrape, operating model, SaaS cross-reference, product planning, technical notes, and internal operations playbooks for the Waterhouse Management platform.

## Files

| File | Category | Description |
| :--- | :--- | :--- |
| `README.md` | Index | Internal documentation map. |
| `site-scrape-outline.md` | Research | Public pages, service pages, and community detail pages found on waterhousemgmt.com. |
| `business-lines.md` | Operations | Waterhouse's distinct operating businesses and the functions each performs. |
| `saas-component-map.md` | Product | Software modules needed to support each operating function, with current provider examples. |
| `app-architecture.md` | Technical | Proposed Node, React, Tailwind, shadcn, and Express application structure. |
| `product-roadmap.md` | Product | Phased plan for turning the operating map into a production web app. |
| `data-model.md` | Product | Initial entities, fields, relationships, and ERD implied by the scrape. |
| `api-and-vendor-integration.md` | Technical | API import/export strategy and vendor portal model for non-API vendors. |
| `ai-strategy.md` | Strategic | AI roadmap for operations, community intelligence, infill, paving, and internal docs. |
| `automation-notifications.md` | Technical | Email/SMS notification roadmap for portal and operations events. |
| `portal-walkthrough.md` | Product | Tenant, owner, manager, and internal admin portal overview. |
| `owner-portal-functional-spec.md` | Product | Functional requirements for the owner portal. |
| `manager-portal-functional-spec.md` | Product | Functional requirements for the manager portal. |
| `tenant-portal-functional-spec.md` | Product | Functional requirements for the tenant portal. |
| `competitor-research.md` | Strategic | Market positioning across management, infill, paving, and brokerage. |
| `engagement-framework.md` | Operations | Engagement structure for management, infill, paving, and brokerage work. |
| `expanded-services.md` | Strategic | Service expansion opportunities by Waterhouse business line. |
| `google-ads-strategy.md` | Marketing | Search ad keyword, landing page, and KPI strategy. |
| `local-seo-gbp-strategy.md` | Marketing | Google Business Profile and local SEO roadmap. |
| `manageamerica-offload-example.md` | Strategic | Example offload matrix for using ManageAmerica while retaining Waterhouse MVP controls. |
| `payment-integration.md` | Technical | Future payment handling for rent, invoices, deposits, and portal flows. |
| `ssl-installation-guide.md` | Technical | HTTPS and certificate guidance for VPS/Nginx deployment. |
| `service-rates.md` | Operations | Planning reference for service pricing models and benchmarks. |
| `lead-sources-strategy.md` | Operations | Lead sourcing and scouting workflow by business line. |
| `operations-sop.md` | Operations | Repeatable standards for intake, management, infill, paving, brokerage, and documentation. |
| `standard-forms.md` | Resources | Forms and document categories to standardize. |
| `sample-operations-report.md` | Example | Sample Waterhouse-style operations report. |
| `implementation-walkthrough.md` | Technical | Implementation history and next targets. |

## Source Basis

The source-of-truth content is the public Waterhouse Management site:

- https://www.waterhousemgmt.com/
- https://www.waterhousemgmt.com/all-services
- https://www.waterhousemgmt.com/property-management
- https://www.waterhousemgmt.com/full-service-dealership
- https://www.waterhousemgmt.com/asphalt-paving
- https://www.waterhousemgmt.com/brokerage-services
- https://www.waterhousemgmt.com/our-communities
- https://www.waterhousemgmt.com/ourhistory
- https://www.waterhousemgmt.com/contact

Provider names in the SaaS map are inferred market options. They are not confirmed Waterhouse vendors.

## Maintenance Notes

- Keep source URLs in scrape notes when adding claims from the public website.
- Mark assumptions clearly when a workflow is inferred rather than confirmed.
- Update the data model before adding new workflow-specific UI.
- Update the SaaS component map when choosing real vendors or integrations.
- Keep the internal dashboard docs list in sync when adding or renaming Markdown files.
