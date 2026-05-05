# Payment Integration Strategy

This document outlines future payment handling for Waterhouse portals.

## Payment Use Cases

- Tenant rent payments.
- Tenant fees.
- Owner reimbursements or project funding.
- Manufactured home deposits.
- Paving invoices.
- Brokerage-related invoice payments where appropriate.

## Recommended Processors

### Stripe

Good fit for card payments, ACH, invoices, and future portal checkout flows.

### Plaid or Stripe Financial Connections

Good fit for bank verification, ACH setup, and reducing routing/account entry errors.

## Property Management Caveat

Rent collection and trust accounting may require purpose-built property management software or bank controls. The portal should not replace accounting controls until compliance, reconciliation, and reporting are fully designed.

## Security Requirements

- Do not store card numbers.
- Use hosted checkout or tokenized payment components.
- Enforce HTTPS.
- Log payment intent IDs, not sensitive account data.
- Separate resident, owner, and vendor payment records.

## Future Portal Flow

1. User chooses invoice or payment item.
2. Portal creates a payment intent.
3. Provider handles account/card details.
4. Portal receives success/failure status.
5. Receipt is stored as a document.
6. Owner or manager dashboard updates.
