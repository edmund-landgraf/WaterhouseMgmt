# Initial Data Model

This model is derived from the public site and the operating workflows implied by the business lines.

## Entity Relationship Diagram

```mermaid
erDiagram
  COMPANY ||--o{ BUSINESS_LINE : "has many"
  COMPANY ||--o{ COMMUNITY : "has many"
  COMPANY ||--o{ CONTACT : "has many"
  BUSINESS_LINE ||--o{ FUNCTION : "has many"
  BUSINESS_LINE }o--o{ SOFTWARE_COMPONENT : "uses"
  BUSINESS_LINE ||--o{ TASK : "drives"
  SOFTWARE_COMPONENT }o--o{ PROVIDER : "has candidates"
  COMMUNITY ||--o{ LOT : "has many"
  COMMUNITY ||--o{ RESIDENT : "has many"
  COMMUNITY ||--o{ MAINTENANCE_TICKET : "has many"
  COMMUNITY ||--o{ INFILL_PROJECT : "has many"
  COMMUNITY ||--o{ HOME : "contains"
  LOT ||--o| HOME : "current home"
  LOT ||--o{ RESIDENT : "houses"
  LOT ||--o{ INFILL_PROJECT : "receives"
  RESIDENT ||--o{ MAINTENANCE_TICKET : "opens"
  CONTACT ||--o{ RESIDENT : "profile"
  CONTACT ||--o{ MAINTENANCE_TICKET : "vendor"
  CONTACT ||--o{ PAVING_JOB : "customer"
  CONTACT ||--o{ INFILL_PROJECT : "sales owner"
  CONTACT ||--o{ DEAL : "buyer"
  CONTACT ||--o{ DEAL : "seller"
  CONTACT ||--o{ TASK : "assignee"
  CONTACT ||--o{ AUDIT_EVENT : "actor"
  DOCUMENT }o--|| CONTACT : "may belong to"
  DOCUMENT }o--|| COMPANY : "may belong to"
  DOCUMENT }o--|| COMMUNITY : "may belong to"
  DOCUMENT }o--|| BUSINESS_LINE : "may belong to"
  TASK }o--|| CONTACT : "may belong to"
  TASK }o--|| COMPANY : "may belong to"
  TASK }o--|| COMMUNITY : "may belong to"
  TASK }o--|| BUSINESS_LINE : "may belong to"

  COMPANY {
    string id
    string name
    string description
    string email
    string phone
    string address
    string website
  }

  BUSINESS_LINE {
    string id
    string name
    string shortName
    string summary
    string sourceUrl
  }

  FUNCTION {
    string id
    string businessLineId
    string name
    string description
    string sourceNote
    string confidence
  }

  SOFTWARE_COMPONENT {
    string id
    string name
    string category
    string priority
    string description
  }

  PROVIDER {
    string id
    string name
    string website
    string category
    string notes
    boolean confirmedVendor
  }

  COMMUNITY {
    string id
    string name
    string city
    string state
    string address
    string phone
    string url
    string region
    string description
    string amenities
  }

  LOT {
    string id
    string communityId
    string lotNumber
    string status
    string utilityNotes
    string sizeNotes
    string currentHomeId
  }

  RESIDENT {
    string id
    string communityId
    string lotId
    string contactId
    string leaseStatus
    string balanceStatus
  }

  MAINTENANCE_TICKET {
    string id
    string communityId
    string residentId
    string vendorId
    string status
    string priority
    string description
    string photos
    datetime openedAt
    datetime closedAt
  }

  HOME {
    string id
    string manufacturer
    string model
    string size
    string floorplan
    string status
    string communityId
    string lotId
    number salePrice
  }

  INFILL_PROJECT {
    string id
    string communityId
    string lotId
    string status
    boolean removalRequired
    boolean lotPrepRequired
    string manufacturer
    date deliveryDate
    date setupDate
    string salesOwnerId
  }

  PAVING_JOB {
    string id
    string customerId
    string propertyAddress
    string status
    string scope
    number estimateAmount
    date scheduledStart
    date scheduledEnd
    string crewId
    string equipmentIds
  }

  DEAL {
    string id
    string type
    string status
    string buyerContactId
    string sellerContactId
    string propertyId
    number estimatedValue
    date closeDate
  }

  CONTACT {
    string id
    string type
    string firstName
    string lastName
    string companyName
    string email
    string phone
    string address
  }

  DOCUMENT {
    string id
    string ownerType
    string ownerId
    string name
    string category
    string storageUrl
    string signedStatus
    datetime createdAt
  }

  TASK {
    string id
    string ownerType
    string ownerId
    string assignedTo
    string status
    date dueDate
    string title
    string description
  }

  AUDIT_EVENT {
    string id
    string actorId
    string eventType
    string entityType
    string entityId
    string metadata
    datetime createdAt
  }
```

## Core Entities

### Company

Fields:

- id
- name
- description
- email
- phone
- address
- website

Relationships:

- has many business lines
- has many communities
- has many contacts

### BusinessLine

Fields:

- id
- name
- shortName
- summary
- sourceUrl

Examples:

- Property and Asset Management
- Manufactured Home Dealership and Infill
- Asphalt Paving
- Real Estate Brokerage

Relationships:

- has many functions
- has many software components
- has many workflows

### Function

Fields:

- id
- businessLineId
- name
- description
- sourceNote
- confidence

Examples:

- rent collection
- tenant screening
- lot preparation
- hot asphalt paving
- transaction management

### SoftwareComponent

Fields:

- id
- name
- category
- priority
- description

Examples:

- property management system
- resident payment portal
- construction estimating
- real estate CRM

Relationships:

- belongs to many business lines
- has many providers

### Provider

Fields:

- id
- name
- website
- category
- notes
- confirmedVendor

Examples:

- AppFolio
- Yardi Breeze
- Rent Manager
- HubSpot
- JobTread
- HCSS
- Follow Up Boss

Important:

Provider names currently mean "candidate providers," not confirmed vendors.

## Property Management Entities

### Community

Fields:

- id
- name
- city
- state
- address
- phone
- url
- region
- description
- amenities

Relationships:

- has many lots
- has many residents
- has many maintenance tickets
- has many inspections

### Lot

Fields:

- id
- communityId
- lotNumber
- status
- utilityNotes
- sizeNotes
- currentHomeId

Statuses:

- occupied
- vacant
- needs removal
- ready for home
- under setup

### Resident

Fields:

- id
- communityId
- lotId
- contactId
- leaseStatus
- balanceStatus

### MaintenanceTicket

Fields:

- id
- communityId
- residentId
- vendorId
- status
- priority
- description
- photos
- openedAt
- closedAt

## Dealership and Infill Entities

### Home

Fields:

- id
- manufacturer
- model
- size
- floorplan
- status
- communityId
- lotId
- salePrice

Statuses:

- planned
- ordered
- in transit
- delivered
- setup
- listed
- sold

### InfillProject

Fields:

- id
- communityId
- lotId
- status
- removalRequired
- lotPrepRequired
- manufacturer
- deliveryDate
- setupDate
- salesOwnerId

## Asphalt Entities

### PavingJob

Fields:

- id
- customerId
- propertyAddress
- status
- scope
- estimateAmount
- scheduledStart
- scheduledEnd
- crewId
- equipmentIds

Statuses:

- lead
- assessment scheduled
- estimated
- approved
- scheduled
- in progress
- complete
- invoiced

## Brokerage Entities

### Deal

Fields:

- id
- type
- status
- buyerContactId
- sellerContactId
- propertyId
- estimatedValue
- closeDate

Types:

- single family home
- manufactured home
- mobile home park
- apartment complex
- raw land
- commercial property

## Shared Entities

### Contact

Fields:

- id
- type
- firstName
- lastName
- companyName
- email
- phone
- address

Types:

- resident
- prospect
- owner
- vendor
- contractor
- buyer
- seller
- investor
- staff

### Document

Fields:

- id
- ownerType
- ownerId
- name
- category
- storageUrl
- signedStatus
- createdAt

### Task

Fields:

- id
- ownerType
- ownerId
- assignedTo
- status
- dueDate
- title
- description

### AuditEvent

Fields:

- id
- actorId
- eventType
- entityType
- entityId
- metadata
- createdAt
