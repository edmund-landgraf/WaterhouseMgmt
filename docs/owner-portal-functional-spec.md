# Owner Portal Functional Spec

## Purpose

The owner portal gives property and community owners a concise operating view of portfolio performance, projects, documents, and communication with Waterhouse managers.

## Primary Users

- Property owners.
- Community owners.
- Asset managers.
- Ownership representatives.
- Waterhouse managers supporting owner communication.

## Core Jobs

- Review portfolio and community status.
- Track owner-facing maintenance and capital projects.
- Access monthly reports and documents.
- Review occupancy, open issues, and project milestones.
- Contact the assigned Waterhouse manager.

## Dashboard Sections

### Portfolio Summary

Fields:

- totalCommunities
- totalLots
- occupiedLots
- vacantLots
- occupancyRate
- openMaintenanceCount
- openProjectCount
- monthlyReportStatus

### Community Cards

Fields:

- communityId
- name
- city
- state
- occupiedLots
- vacantLots
- activeTickets
- activeProjects
- lastReportDate

Actions:

- View report.
- View projects.
- View documents.
- Contact manager.

### Project Tracker

Fields:

- projectId
- communityId
- title
- category
- status
- targetDate
- budgetEstimate
- managerNote

Statuses:

- planning
- pending approval
- scheduled
- in progress
- blocked
- complete

### Document Library

Fields:

- documentId
- ownerType
- ownerId
- name
- category
- signedStatus
- createdAt
- storageUrl

Categories:

- monthly report
- management agreement
- invoice
- paving estimate
- capital project
- inspection
- compliance

## Navigation

- Overview.
- Communities.
- Projects.
- Documents.
- Messages.

## Permissions

Owners can:

- View records for their assigned communities/properties.
- Download documents marked owner-visible.
- Send messages or requests to Waterhouse.
- Approve project scopes if enabled.

Owners cannot:

- See resident PII beyond approved reporting summaries.
- Modify internal task status.
- See vendor notes marked internal.
- Access manager-only workflows.

## Notifications

Events:

- Monthly report published.
- Project requires approval.
- Project status changed.
- Document uploaded.
- Manager message sent.

Channels:

- Email.
- Portal notification.
- SMS only for urgent owner approvals.

## Acceptance Criteria

- Owner can log in and see only assigned portfolio data.
- Owner can open a community and view current status.
- Owner can filter projects by status and community.
- Owner can download owner-visible documents.
- Owner can send a message to Waterhouse.
- Mobile layout preserves all core actions without horizontal scrolling.
