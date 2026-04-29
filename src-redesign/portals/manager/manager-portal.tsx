import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  BarChart3,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileSearch,
  FileSpreadsheet,
  Gauge,
  Megaphone,
  MessageSquareText,
  PlugZap,
  Search,
  Settings2,
  ShieldCheck,
  UserPlus,
  UsersRound,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Dashboard", "Leasing", "Accounting", "Maintenance", "Communications", "Reports", "Admin"] as const;

type ManagerTab = (typeof tabs)[number];

const pageCopy: Record<ManagerTab, { eyebrow: string; title: string; summary: string }> = {
  Dashboard: {
    eyebrow: "Daily control center",
    title: "Manager dashboard",
    summary: "Search across the portfolio, watch automation queues, and see the partner systems Waterhouse uses for specialized work.",
  },
  Leasing: {
    eyebrow: "Marketing and leasing",
    title: "Lead-to-lease workspace",
    summary: "Track listings, prospects, applications, screening, renewals, signatures, and move-in readiness from one operating view.",
  },
  Accounting: {
    eyebrow: "Accounting and reporting",
    title: "Receivables and payables center",
    summary: "Keep rent, owner distributions, vendor bills, deposits, reserves, and accounting exports moving without rebuilding a full GL.",
  },
  Maintenance: {
    eyebrow: "Maintenance and efficiency",
    title: "Work order command board",
    summary: "Coordinate resident requests, vendor dispatch, inspections, unit turns, bid approvals, and closeout documentation.",
  },
  Communications: {
    eyebrow: "Communication and service",
    title: "Unified inbox",
    summary: "Triage resident, owner, prospect, vendor, and internal messages with templates and follow-up ownership.",
  },
  Reports: {
    eyebrow: "Management and growth",
    title: "Performance reports",
    summary: "Package owner statements, rent rolls, maintenance ledgers, leasing funnels, and portfolio insights for decision-making.",
  },
  Admin: {
    eyebrow: "Staffing and workflows",
    title: "System administration",
    summary: "Configure roles, properties, custom fields, workflows, audit history, and third-party connections for the team.",
  },
};

const pageStats: Record<ManagerTab, Array<{ icon: LucideIcon; label: string; value: string; tone: string }>> = {
  Dashboard: [
    { icon: Gauge, label: "Occupancy", value: "96%", tone: "green" },
    { icon: Banknote, label: "Collected this month", value: "$184K", tone: "gold" },
    { icon: ClipboardCheck, label: "Open workflows", value: "42", tone: "purple" },
  ],
  Leasing: [
    { icon: UserPlus, label: "Active prospects", value: "27", tone: "green" },
    { icon: FileSearch, label: "Applications", value: "9", tone: "gold" },
    { icon: Building2, label: "Vacancies", value: "3", tone: "purple" },
  ],
  Accounting: [
    { icon: Banknote, label: "Deposits to reconcile", value: "$184K", tone: "green" },
    { icon: FileSpreadsheet, label: "Bills pending", value: "14", tone: "gold" },
    { icon: UsersRound, label: "Owner payouts", value: "$71K", tone: "purple" },
  ],
  Maintenance: [
    { icon: Wrench, label: "Open work orders", value: "31", tone: "green" },
    { icon: CalendarCheck, label: "Inspections", value: "7", tone: "gold" },
    { icon: ClipboardCheck, label: "Owner approvals", value: "4", tone: "purple" },
  ],
  Communications: [
    { icon: MessageSquareText, label: "Unread messages", value: "18", tone: "green" },
    { icon: Megaphone, label: "Scheduled notices", value: "6", tone: "gold" },
    { icon: UsersRound, label: "Assigned follow-ups", value: "23", tone: "purple" },
  ],
  Reports: [
    { icon: BarChart3, label: "Ready reports", value: "8", tone: "green" },
    { icon: FileSpreadsheet, label: "Owner packets", value: "3", tone: "gold" },
    { icon: Gauge, label: "Portfolio KPIs", value: "12", tone: "purple" },
  ],
  Admin: [
    { icon: Settings2, label: "Custom roles", value: "5", tone: "green" },
    { icon: PlugZap, label: "Integrations", value: "6", tone: "gold" },
    { icon: ShieldCheck, label: "Audit events", value: "238", tone: "purple" },
  ],
};

const leasingPipeline = [
  { name: "Grass Valley vacancy", stage: "Market", owner: "Listing live", next: "Publish to ILS" },
  { name: "Space 18A prospect", stage: "Apply", owner: "American Canyon", next: "Collect application" },
  { name: "Bennett application", stage: "Screen", owner: "Partner check", next: "Review result" },
  { name: "Lopez renewal", stage: "Sign", owner: "DocuSign", next: "Send reminder" },
];

const accountingQueue = [
  { item: "Rent deposits", amount: "$184,140", status: "Reconcile", system: "Stripe export" },
  { item: "Vendor bill approvals", amount: "$19,420", status: "4 pending", system: "AP workflow" },
  { item: "Owner distribution batch", amount: "$71,500", status: "Ready", system: "Banking partner" },
  { item: "QuickBooks sync", amount: "April", status: "Queued", system: "Accounting export" },
];

const maintenanceBoard = [
  { item: "Sink leak", property: "Almond Blossom 42B", status: "Scheduled", age: "1d" },
  { item: "Roadway patching", property: "Grass Valley", status: "Approval", age: "2d" },
  { item: "Unit turn inspection", property: "American Canyon 18A", status: "Checklist", age: "4h" },
  { item: "Tree trimming", property: "American Canyon", status: "In progress", age: "3d" },
];

const communicationQueue = [
  { sender: "Resident", subject: "Maintenance follow-up", channel: "Portal", priority: "Normal" },
  { sender: "Owner", subject: "April packet question", channel: "Email", priority: "High" },
  { sender: "Vendor", subject: "Certificate renewal", channel: "Text", priority: "Normal" },
  { sender: "Prospect", subject: "Showing availability", channel: "Web form", priority: "New lead" },
];

const integrations = ["Stripe payments", "DocuSign leases", "TransUnion screening", "QuickBooks export", "Vendor insurance tracking", "Email and SMS gateway"];

export function ManagerPortal() {
  const [activeTab, setActiveTab] = useState<ManagerTab>("Dashboard");
  const copy = pageCopy[activeTab];

  return (
    <section className="portal-dashboard manager-dashboard">
      <PortalTopbar role="Manager" name="Waterhouse Operations" />

      <div className="portal-dashboard-grid">
        <aside className="portal-sidebar">
          <p className="portal-kicker">Waterhouse Back Office</p>
          <h1>
            Manager
            <span className="dashboard-word">Console</span>
          </h1>
          <p>Centralize the work Waterhouse owns, then hand off payments, signatures, screening, accounting, and messages to trusted tools.</p>
          <div className="portal-side-list">
            <span>8 communities</span>
            <span>42 workflow tasks</span>
            <span>6 partner integrations</span>
          </div>
          <Link className="portal-secondary-action" to="/portals/manager/login">
            Switch manager
          </Link>
        </aside>

        <div className="portal-main">
          <div className="portal-tabbar" aria-label="Manager portal sections">
            {tabs.map((tab) => (
              <button className={activeTab === tab ? "is-active" : ""} key={tab} onClick={() => setActiveTab(tab)} type="button">
                {tab}
              </button>
            ))}
          </div>

          <section className="manager-page-heading">
            <div>
              <p className="portal-kicker">{copy.eyebrow}</p>
              <h2>{copy.title}</h2>
              <p>{copy.summary}</p>
            </div>
            <button type="button">{activeTab === "Dashboard" ? "Create task" : `New ${activeTab.slice(0, -1).toLowerCase() || activeTab.toLowerCase()}`}</button>
          </section>

          <div className="portal-stat-grid">
            {pageStats[activeTab].map((stat) => (
              <PortalStat icon={stat.icon} key={stat.label} label={stat.label} value={stat.value} tone={stat.tone} />
            ))}
          </div>

          {activeTab === "Dashboard" && <DashboardMockup />}
          {activeTab === "Leasing" && <LeasingMockup />}
          {activeTab === "Accounting" && <AccountingMockup />}
          {activeTab === "Maintenance" && <MaintenanceMockup />}
          {activeTab === "Communications" && <CommunicationsMockup />}
          {activeTab === "Reports" && <ReportsMockup />}
          {activeTab === "Admin" && <AdminMockup />}
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="portal-panel-grid">
      <section className="portal-panel">
        <PanelTitle icon={Search} title="Universal Search" />
        <div className="portal-search-box">
          <Search className="h-4 w-4" />
          <input placeholder="Search residents, owners, sites, vendors, invoices" />
        </div>
        <div className="portal-notice">Quickly jump across resident, owner, property, work order, document, and accounting records.</div>
      </section>
      <section className="portal-panel">
        <PanelTitle icon={ShieldCheck} title="Automation Queue" />
        <MetricStack items={[["Lease reminders", "8"], ["Bill approvals", "4"], ["Inspection follow-ups", "11"]]} />
      </section>
      <section className="portal-panel wide">
        <PanelTitle icon={PlugZap} title="Third-Party Stack" />
        <ChipList items={integrations} />
      </section>
    </div>
  );
}

function LeasingMockup() {
  return (
    <div className="manager-mockup-grid">
      <section className="portal-panel wide">
        <PanelTitle icon={UserPlus} title="Lead-to-Lease Pipeline" />
        <div className="manager-kanban">
          {["Market", "Apply", "Screen", "Sign"].map((stage) => (
            <div className="manager-kanban-column" key={stage}>
              <strong>{stage}</strong>
              {leasingPipeline
                .filter((item) => item.stage === stage)
                .map((item) => (
                  <article key={item.name}>
                    <span>{item.name}</span>
                    <em>{item.next}</em>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </section>
      <section className="portal-panel">
        <PanelTitle icon={Megaphone} title="Listing Controls" />
        <MetricStack items={[["Published listings", "5"], ["Showing requests", "12"], ["Renewals due", "14"]]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={FileSearch} title="Screening Handoff" />
        <div className="portal-notice">Applications stay in Waterhouse, while credit, background, and identity checks come from a screening partner.</div>
        <ChipList items={["Application", "Screening", "Lease draft", "Move-in"]} />
      </section>
    </div>
  );
}

function AccountingMockup() {
  return (
    <div className="manager-mockup-grid">
      <section className="portal-panel wide">
        <PanelTitle icon={Banknote} title="Accounting Work Queue" />
        <PortalRows rows={accountingQueue} columns={["Queue item", "Amount", "Status", "System"]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={FileSpreadsheet} title="AR/AP Actions" />
        <div className="portal-action-grid single">
          <button type="button">Post resident charge</button>
          <button type="button">Approve vendor bill</button>
          <button type="button">Reconcile deposits</button>
          <button type="button">Export accounting batch</button>
        </div>
      </section>
      <section className="portal-panel">
        <PanelTitle icon={UsersRound} title="Owner Money Movement" />
        <MetricStack items={[["Reserve balance", "$48K"], ["Next ACH", "May 10"], ["Statements ready", "3"]]} />
      </section>
    </div>
  );
}

function MaintenanceMockup() {
  return (
    <div className="manager-mockup-grid">
      <section className="portal-panel wide">
        <PanelTitle icon={Wrench} title="Dispatch Board" />
        <PortalRows rows={maintenanceBoard} columns={["Issue", "Property", "Status", "Age"]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={CalendarCheck} title="Inspections and Unit Turns" />
        <MetricStack items={[["Open inspections", "7"], ["Turn checklists", "3"], ["Photos uploaded", "46"]]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={ClipboardCheck} title="Vendor and Approval Flow" />
        <div className="manager-step-list">
          {["Resident intake", "Triage priority", "Dispatch vendor", "Owner approval", "Closeout photos"].map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

function CommunicationsMockup() {
  return (
    <div className="manager-mockup-grid">
      <section className="portal-panel wide">
        <PanelTitle icon={MessageSquareText} title="Unified Inbox" />
        <PortalRows rows={communicationQueue} columns={["From", "Subject", "Channel", "Priority"]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={Megaphone} title="Template Library" />
        <div className="portal-action-grid single">
          <button type="button">Rent reminder</button>
          <button type="button">Community notice</button>
          <button type="button">Owner update</button>
          <button type="button">Vendor ETA request</button>
        </div>
      </section>
      <section className="portal-panel">
        <PanelTitle icon={UsersRound} title="Assignments" />
        <MetricStack items={[["Resident follow-ups", "9"], ["Owner replies", "4"], ["Vendor messages", "10"]]} />
      </section>
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="manager-report-grid">
      {[
        ["Owner packet", "Statements, reserves, project notes", "Ready"],
        ["Rent roll", "Balances, leases, site details", "Updated"],
        ["Maintenance ledger", "Work orders, costs, vendors", "Draft"],
        ["Leasing funnel", "Listings, leads, applications", "Live"],
      ].map(([title, detail, status]) => (
        <section className="portal-panel" key={title}>
          <PanelTitle icon={FileSpreadsheet} title={title} />
          <p className="manager-card-copy">{detail}</p>
          <em className="manager-status-pill">{status}</em>
        </section>
      ))}
      <section className="portal-panel wide">
        <PanelTitle icon={BarChart3} title="Performance Insights" />
        <MetricStack items={[["Delinquency", "2.8%"], ["Vacancy days", "18 avg"], ["Maintenance SLA", "91%"], ["NOI estimate", "$96K"]]} />
      </section>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="manager-admin-grid">
      <section className="portal-panel">
        <PanelTitle icon={Settings2} title="Roles and Permissions" />
        <MetricStack items={[["Admin", "2 users"], ["Property manager", "5 users"], ["Maintenance coordinator", "3 users"]]} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={Building2} title="Portfolio Setup" />
        <div className="portal-action-grid single">
          <button type="button">Add property</button>
          <button type="button">Add resident</button>
          <button type="button">Invite owner</button>
          <button type="button">Connect partner</button>
        </div>
      </section>
      <section className="portal-panel">
        <PanelTitle icon={PlugZap} title="Integrations" />
        <ChipList items={integrations} />
      </section>
      <section className="portal-panel">
        <PanelTitle icon={ShieldCheck} title="Audit Log" />
        <div className="manager-step-list">
          {["Lease sent by Anna", "Bill approved by Mark", "Owner packet published", "Role changed for Julia"].map((event) => (
            <span key={event}>{event}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

function PortalTopbar({ role, name }: { role: string; name: string }) {
  return (
    <header className="portal-topbar">
      <div className="portal-topbar-inner">
        <Link to="/">Waterhouse</Link>
        <span>
          {role}: {name}
        </span>
      </div>
    </header>
  );
}

function PortalStat({ icon: Icon, label, value, tone }: { icon: LucideIcon; label: string; value: string; tone: string }) {
  return (
    <div className={`portal-stat ${tone}`}>
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PanelTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="portal-panel-title">
      <Icon className="h-5 w-5" />
      {title}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="portal-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function MetricStack({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="portal-metric-stack">
      {items.map(([label, value]) => (
        <Metric key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <div className="portal-chip-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function PortalRows({ rows, columns }: { rows: Array<Record<string, string>>; columns: string[] }) {
  return (
    <div className="owner-table">
      <div className="owner-table-row header">
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      {rows.map((row, index) => (
        <div className="owner-table-row" key={Object.values(row).join("-") || index}>
          {Object.values(row).map((value, valueIndex) =>
            valueIndex === 0 ? <strong key={value}>{value}</strong> : <span key={`${value}-${valueIndex}`}>{value}</span>,
          )}
        </div>
      ))}
    </div>
  );
}
