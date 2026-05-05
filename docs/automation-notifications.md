# Automation and Notifications

This guide defines the notification roadmap for Waterhouse portals and internal operations.

## Notification Events

- New contact form inquiry.
- New resident maintenance request.
- Maintenance ticket status change.
- Owner report published.
- Infill project milestone reached.
- Paving estimate requested or approved.
- Brokerage lead assigned.
- Internal task becomes overdue.

## Email Notifications

Recommended providers:

- Resend
- SendGrid
- Postmark

Email templates should follow the Waterhouse brand and keep messages operational.

## SMS Notifications

SMS should be reserved for high-urgency events:

- Emergency maintenance escalation.
- Same-day paving schedule change.
- Critical resident access issue.
- Manager task escalation.

Recommended provider: Twilio.

## Fail-Safe Rules

- Persist the source event before sending any external notification.
- Do not block the user flow if email or SMS fails.
- Rate-limit public forms and portal actions.
- Log provider response codes for troubleshooting.
- Keep resident-facing messages short and plain.

## Future Admin Controls

- Notification recipients by community.
- Escalation windows.
- SMS opt-in status.
- Quiet hours.
- Message templates.
