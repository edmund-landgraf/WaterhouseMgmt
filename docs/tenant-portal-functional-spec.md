# Tenant Portal Functional Spec

## Purpose

The tenant portal gives residents a simple way to handle common community interactions: maintenance requests, notices, account prompts, and communication with Waterhouse.

## Primary Users

- Residents.
- Prospective residents if application flows are added.
- Waterhouse managers supporting resident communication.

## Core Jobs

- Submit maintenance requests.
- Review request status.
- View notices.
- See payment or rent prompts when payment integration exists.
- Contact the management team.
- Update basic contact information if enabled.

## Dashboard Sections

### Resident Summary

Fields:

- residentId
- contactId
- communityId
- lotId
- leaseStatus
- balanceStatus
- primaryPhone
- primaryEmail

### Maintenance Requests

Fields:

- ticketId
- communityId
- residentId
- status
- priority
- description
- photos
- openedAt
- closedAt

Statuses:

- submitted
- under review
- assigned
- scheduled
- waiting resident
- complete
- closed

Actions:

- Create request.
- Add photos.
- Add note.
- View status.
- Confirm completion.

### Notices

Fields:

- noticeId
- communityId
- title
- category
- body
- publishedAt
- expiresAt
- requiresAcknowledgement
- acknowledgedAt

Categories:

- community update
- maintenance
- paving schedule
- office notice
- emergency
- policy

### Payments

Future fields:

- accountId
- amountDue
- dueDate
- balanceStatus
- lastPaymentDate
- paymentProviderStatus

Payment note: rent collection should not launch until accounting, reconciliation, and compliance requirements are defined.

## Navigation

- Overview.
- Maintenance.
- Notices.
- Payments.
- Contact.

## Permissions

Tenants can:

- View their own resident record.
- Create and view their own maintenance requests.
- Upload photos for their own tickets.
- View notices for their community.
- Send messages to management.

Tenants cannot:

- View other resident records.
- View owner reports.
- Assign vendors.
- Change ticket priority after manager triage unless allowed.
- Access manager notes.

## Notifications

Events:

- Maintenance request received.
- Ticket scheduled.
- Ticket completed.
- New notice published.
- Notice requires acknowledgement.
- Payment reminder once enabled.

Channels:

- Portal notification.
- Email.
- SMS only for opted-in urgent messages.

## Acceptance Criteria

- Tenant can log in and see their community and lot context.
- Tenant can submit a maintenance request with description and optional photos.
- Tenant can view status changes for submitted requests.
- Tenant can view current notices.
- Tenant can acknowledge a notice when required.
- Tenant cannot see another tenant's data.
