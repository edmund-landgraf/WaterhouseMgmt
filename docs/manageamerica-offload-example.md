# ManageAmerica Offload Example

This example uses ManageAmerica as a reference provider for deciding which manufactured housing management functions Waterhouse should build internally as an MVP and which functions can be offloaded to a purpose-built external platform.

Waterhouse's general product approach:

- Build an MVP workflow for every Waterhouse business area where it is viable.
- Allow an explicit operating-mode override: `Use internal` or `Use external`.
- Integrate with external providers when they have mature APIs or import/export paths.
- Provide lightweight Waterhouse SaaS workflows when smaller vendors do not have their own software.

## ManageAmerica Reference Capabilities

ManageAmerica publicly positions itself as property management software built specifically for manufactured housing. Its listed capabilities include:

- Clear home, site, and resident distinction.
- Site occupancy changes.
- Home inventory, title, and prospect tracking.
- Centralized documentation.
- Utility billing and utility rate recertification.
- Month-over-month meter variance reporting.
- Resident-friendly billing.
- Rent and fee collections by ACH, debit, credit, check, and other payment methods.
- Delinquency and balance tracking.
- Automated late payment notifications.
- Portfolio, region, and community reporting dashboards.
- Exportable real-time data.
- Lead tracking, applicant screening, and lead-to-move-in workflows.
- Resident communication, onboarding, payments, and issue resolution.
- Role-based tools for owners, portfolio managers, regional managers, community managers, compliance teams, and finance teams.
- Audit trails, legal documentation tracking, and GL/accounting software compatibility.

## Pricing and Cost Structure Notes

ManageAmerica appears to use customized pricing tailored to manufactured housing portfolio size and operating needs. Public software listings indicate subscription costs starting around `$69.00` per month, but Waterhouse should treat that as a directional estimate, not confirmed contract pricing.

Expected pricing model:

- Tailored pricing based on portfolio size and selected functionality.
- Per-property or portfolio-scaled pricing that grows with operations.
- Customized agreements rather than one-size-fits-all packages.
- Basic onboarding and training likely included during implementation.
- Cost justification tied to utility recovery, collections, automation, and reduced staff workload.

Key cost-saving and revenue features to evaluate:

- Automated monthly utility rate recertification.
- Utility variance analysis to detect unbilled sites, meter issues, and excessive usage.
- Consolidated rent, utility, storage, trash, and fee billing.
- Delinquency tracking and automated late notices.
- Resident insurance or similar add-on revenue programs, such as SafeHaven.
- Resident mobile apps for iOS and Android.

Waterhouse evaluation note: any claimed savings or ROI should be validated against Waterhouse's actual community count, billing complexity, utility recovery gaps, staff workload, and current software stack.

## Strategic Rule

Waterhouse should not rebuild mature, high-risk property management functionality just to own it. Instead:

- Build enough internal workflow to coordinate Waterhouse operations.
- Keep the Waterhouse operating record as the command center.
- Offload specialized property management functions when a provider is stronger.
- Keep data portability through imports, exports, and external IDs.

## Function Replacement Table

| Area | ManageAmerica Capability | Waterhouse Internal MVP | External Override | Build Difficulty / Risk | Recommended Mode |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Community structure | Tracks homes, sites, and residents separately | Maintain `Community`, `Lot`, `Home`, and `Resident` entities | Sync records from ManageAmerica if it is system of record | Medium. Domain modeling is viable, but data cleanup and migration can be tedious. | Hybrid |
| Occupancy changes | Streamline site occupancy changes | Track lot status, resident status, and current home | Import occupancy and vacancy status | High. Occupancy ties into billing, notices, leasing dates, and compliance records. | External for accounting-grade operations |
| Home inventory | Track home inventory, titles, and prospects | Track home status, model, lot, and sale price | Import inventory/title status | Medium. Basic tracking is easy; title workflows and sales handoffs are harder. | Hybrid |
| Documents | Centralize essential documentation | Store documents by `ownerType`, `ownerId`, category, and visibility | Import/download documents from provider | Medium. Storage is easy; permissions, retention, signatures, and audit trails are harder. | Hybrid |
| Utility billing | Rate recertification, bill-back, variance reporting | Track utility notes and high-level owner issues | Use ManageAmerica for billing, rate recertification, and meter logic | Very high. Meter reads, rate changes, bill-back rules, variance handling, and disputes are easy to get wrong. | External |
| Resident billing | Combine charges into one resident bill | Display basic payment prompts only when integrated | Use external ledger/payment provider | Very high. A resident ledger becomes a financial system with reconciliation and audit requirements. | External |
| Collections | Track balances, delinquencies, and late notifications | Show summary balance status if imported | Use ManageAmerica or accounting system for collections | Very high. Collections require legal timing, notices, ledger accuracy, and careful communication controls. | External |
| Payments | ACH, debit, credit, check, CashPay, text payment claims in public material | Do not store payment details; create payment integration shell | Use external payment/provider workflow | Very high. PCI, ACH, reversals, refunds, failed payments, and reconciliation are not MVP-friendly. | External |
| Reporting | Portfolio, region, community dashboards and exports | Owner dashboard summaries and report placeholders | Import metrics and export Waterhouse notes | Medium. Visual summaries are viable; financial source-of-truth reporting should stay external. | Hybrid |
| Lead-to-lease | Lead tracking, screening, conversion workflow | Capture prospect and application status | Use ManageAmerica or screening provider for decisioning | High. Lead tracking is easy; screening, adverse-action logic, leasing docs, and compliance are hard. | Hybrid |
| Resident experience | Payments, leasing/onboarding, proactive communication | Tenant portal for maintenance, notices, contact | Deep link or sync resident billing/lease actions | Medium to high. Maintenance and notices are viable; payments and leases should be external. | Hybrid |
| Compliance | Audit trails, legal documentation, billing controls | Waterhouse audit events for internal actions | Use external platform for regulated billing/compliance workflows | Very high. Compliance edge cases are costly and require operational/legal review. | External for high-risk workflows |
| GL/accounting | Works with leading GL software | Store external accounting references only | Export/import with accounting platform | Very high. General ledger, trust accounting, reconciliations, and close processes should not be recreated casually. | External |
| Mobile field work | Mobile manager/resident tooling | Responsive portal and lightweight work updates | Use provider mobile app when deployed | Medium. Basic responsive workflows are viable; offline mode, push notifications, and device capture add complexity. | Hybrid |

## Hard-to-Build Functionality

The following areas should be treated as impractical for a first Waterhouse MVP unless there is a strong business reason and a dedicated implementation budget.

### Utility Billing and Rate Recertification

Why it is hard:

- Utility rates change.
- Reads can be missing, wrong, late, or disputed.
- Bill-back rules vary by community and jurisdiction.
- Variance analysis requires historical baselines.
- Incorrect utility billing can create resident trust and compliance issues.

Waterhouse MVP should only display imported summaries or manager notes.

### Resident Ledger, Rent Collection, and Payments

Why it is hard:

- The ledger must be exact.
- Payments fail, reverse, refund, partially apply, and reconcile.
- ACH and card payments create compliance and support obligations.
- Late fees, notices, and collection timing can have legal consequences.
- Accounting teams need durable audit trails.

Waterhouse MVP should link out, deep link, or import balance status from the external system.

### Screening and Leasing Decisioning

Why it is hard:

- Screening requires regulated provider integrations.
- Adverse-action workflows must be correct.
- Lease packages and signatures need document controls.
- Applicant data is sensitive.

Waterhouse MVP can track status, but decisioning should be external.

### GL and Accounting

Why it is hard:

- Accounting records are source-of-truth financial data.
- Integrations must handle chart of accounts, periods, corrections, and close workflows.
- Mistakes create reporting and audit risk.

Waterhouse MVP should store external references, not recreate accounting.

### Compliance Workflows

Why it is hard:

- Rules vary by jurisdiction and service line.
- Notices, billing, document retention, and audit trails must be precise.
- Operational shortcuts can become legal exposure.

Waterhouse MVP should maintain internal audit events and defer regulated workflows to specialized systems.

## Internal vs External Toggle

Each major module should support a configuration mode.

### Example Configuration

```json
{
  "communityId": "coddingtown",
  "propertyManagementSystem": {
    "mode": "external",
    "provider": "ManageAmerica",
    "externalCommunityId": "ma-12345",
    "syncDirection": "bidirectional"
  },
  "maintenance": {
    "mode": "internal"
  },
  "residentBilling": {
    "mode": "external",
    "provider": "ManageAmerica"
  },
  "ownerReporting": {
    "mode": "hybrid"
  }
}
```

## Data Sync Model

### Import from ManageAmerica

Potential imports:

- Communities.
- Sites/lots.
- Homes.
- Residents.
- Occupancy status.
- Balance status.
- Delinquency summaries.
- Utility billing status.
- Report metrics.
- Documents.

### Export to ManageAmerica

Potential exports:

- Waterhouse manager notes.
- Maintenance context if ManageAmerica is used for work orders.
- Owner-visible status summaries.
- Document metadata.
- Lead or prospect handoff records.

### External IDs

Every synced object should preserve external IDs:

- `externalProvider`
- `externalCommunityId`
- `externalLotId`
- `externalResidentId`
- `externalHomeId`
- `externalDocumentId`
- `lastSyncedAt`

## Vendor SaaS Pattern

ManageAmerica is a large, mature property management provider. The same pattern should apply across Waterhouse service lines:

- Large vendor with software/API: integrate or offload.
- Small vendor without software/API: provide Waterhouse vendor portal.

Example:

| Vendor Type | Example | Operating Pattern |
| :--- | :--- | :--- |
| Large asphalt vendor | Vendor has estimating, scheduling, invoice, and API tools | Waterhouse exports job scope and imports status, photos, invoices |
| Small asphalt vendor | Vendor has no SaaS | Vendor logs into Waterhouse vendor portal to accept work, update status, upload photos, and submit invoice details |
| Large screening provider | Provider has API decisioning | Waterhouse sends application package and imports result |
| Small maintenance contractor | Contractor works by phone/text | Waterhouse portal becomes the simple work-order SaaS |

## What Waterhouse Should Build First

### MVP Internal

- Community list.
- Lot and resident summary.
- Maintenance request intake.
- Owner report shell.
- Manager task list.
- Document library.
- External provider configuration.
- External ID mapping.
- Vendor portal for small vendors.

### External First

- Utility billing.
- Resident ledger.
- Rent collection.
- Payment processing.
- Formal delinquency workflows.
- GL/accounting.
- Screening decisioning.

### Hybrid

- Owner reporting.
- Resident communication.
- Lead-to-lease status.
- Home inventory and infill tracking.
- Compliance/audit visibility.

## Decision Matrix

Use external provider when:

- Workflow touches money, billing, compliance, or regulated records.
- Provider is already mature and industry-specific.
- Provider supports imports, exports, APIs, webhooks, or reliable reporting.
- Building internally would create accounting or legal risk.

Use internal MVP when:

- Workflow is coordination-heavy.
- Waterhouse needs visibility across multiple business lines.
- External provider coverage is weak.
- Vendors or contractors are small and need a simple portal.
- The workflow is unique to Waterhouse operations.

## Open Questions for ManageAmerica Evaluation

- Does ManageAmerica expose APIs for communities, sites, residents, homes, billing, and documents?
- Does it support webhooks, scheduled exports, or SFTP?
- What is the export format for owner reports and ledger summaries?
- Can Waterhouse keep its own manager portal while using ManageAmerica as system of record for billing?
- How are custom roles and permissions handled?
- Can Waterhouse link from its portal directly into a specific community, resident, or report inside ManageAmerica?
- What data can be safely mirrored into Waterhouse without creating duplicate accounting records?

## Recommendation

Treat ManageAmerica as a potential external system of record for manufactured housing property management functions that are expensive or risky to rebuild:

- Utility billing.
- Resident charges.
- Collections.
- Compliance reporting.
- Portfolio-level property management reporting.

Waterhouse should keep its internal MVP focused on coordination, cross-business visibility, owner communication, vendor workflows, and integration control.
