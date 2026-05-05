# Manager Portal Functional Spec

## Purpose

The manager portal is the daily operations console for Waterhouse staff. It should centralize maintenance, leasing, resident support, owner reporting, infill coordination, paving projects, brokerage tasks, and internal follow-up.

## Primary Users

- Property managers.
- Community managers.
- Operations staff.
- Leasing staff.
- Maintenance coordinators.
- Waterhouse administrators.

## Core Jobs

- Triage and assign maintenance requests.
- Track community status and open issues.
- Coordinate vendor work.
- Prepare owner updates.
- Monitor infill and home setup projects.
- Track paving and brokerage tasks.
- Manage internal documents and operational notes.

## Dashboard Sections

### Operations Overview

Fields:

- openTickets
- urgentTickets
- overdueTasks
- pendingOwnerApprovals
- activeInfillProjects
- activePavingJobs
- activeDeals

### Maintenance Queue

Fields:

- ticketId
- communityId
- residentId
- vendorId
- status
- priority
- description
- photos
- openedAt
- dueDate
- closedAt

Statuses:

- new
- triage
- assigned
- waiting resident
- waiting vendor
- scheduled
- complete
- closed

Actions:

- Assign vendor.
- Change priority.
- Add note.
- Upload photo.
- Notify resident.
- Mark complete.

### Community Operations

Fields:

- communityId
- name
- city
- state
- activeTickets
- vacantLots
- infillCandidates
- inspectionStatus
- ownerReportStatus

Actions:

- Create task.
- Open community report.
- View lots.
- View residents.
- View documents.

### Infill and Home Setup

Fields:

- infillProjectId
- communityId
- lotId
- status
- removalRequired
- lotPrepRequired
- manufacturer
- deliveryDate
- setupDate
- salesOwnerId

Actions:

- Update milestone.
- Add lot readiness note.
- Add utility note.
- Upload setup photos.
- Notify sales owner.

### Paving Jobs

Fields:

- pavingJobId
- customerId
- propertyAddress
- status
- scope
- estimateAmount
- scheduledStart
- scheduledEnd
- crewId
- equipmentIds

Actions:

- Add estimate.
- Update scope.
- Schedule work.
- Add closeout note.
- Upload photos.

## Navigation

- Dashboard.
- Maintenance.
- Communities.
- Residents.
- Owners.
- Infill.
- Paving.
- Brokerage.
- Documents.
- Reports.

## Permissions

Managers can:

- View assigned communities and operational records.
- Edit tickets, tasks, projects, and notes.
- Upload documents.
- Mark documents owner-visible.
- Trigger resident and owner notifications.

Managers cannot:

- Change system-level roles unless granted admin access.
- Delete audit events.
- Send bulk messages without confirmation.

## Notifications

Events:

- New maintenance request.
- Ticket overdue.
- Owner approval required.
- Infill milestone missed.
- Paving schedule change.
- Document upload failed.

## Acceptance Criteria

- Manager can triage a new ticket and assign a vendor.
- Manager can open a community and see tickets, lots, tasks, and documents.
- Manager can update infill and paving milestones.
- Manager can publish or flag an owner report.
- Manager can search across communities, contacts, tickets, and documents.
- All major state changes create audit events.
