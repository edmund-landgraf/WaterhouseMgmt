import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  Hammer,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const portfolio = [
  { property: "Almond Blossom", occupancy: "97%", collected: "$72,410", receivables: "$3,210", projects: "2 active" },
  { property: "American Canyon", occupancy: "94%", collected: "$58,090", receivables: "$5,880", projects: "1 active" },
  { property: "Grass Valley", occupancy: "96%", collected: "$53,640", receivables: "$4,120", projects: "3 active" },
];

const rentRoll = [
  { resident: "Maria Lopez", property: "Almond Blossom 42B", balance: "$0.00", lease: "Jan 2027" },
  { resident: "David Chen", property: "American Canyon 18A", balance: "$218.40", lease: "Sep 2026" },
  { resident: "Nora Patel", property: "Grass Valley 7C", balance: "$0.00", lease: "Month-to-month" },
];

const workOrders = [
  { title: "Roadway patching", property: "Grass Valley", status: "Owner approval", cost: "$12,800" },
  { title: "Clubhouse HVAC", property: "Almond Blossom", status: "Vendor scheduled", cost: "$4,950" },
  { title: "Tree trimming", property: "American Canyon", status: "In progress", cost: "$2,700" },
];

const reports = [
  { name: "April owner statement", status: "Ready", detail: "Generated from accounting export" },
  { name: "Rent roll", status: "Updated today", detail: "Resident balances and lease expirations" },
  { name: "Capital plan", status: "Draft", detail: "Five-year repair and improvement forecast" },
];

const integrations = [
  "Accounting export to QuickBooks",
  "ACH distributions through banking partner",
  "Vendor insurance tracking",
  "Background checks through screening partner",
];

const tabs = ["Overview", "Portfolio", "Rent Roll", "Maintenance", "Reports", "Approvals"] as const;

type OwnerTab = (typeof tabs)[number];

export function OwnerPortal() {
  const [activeTab, setActiveTab] = useState<OwnerTab>("Overview");

  return (
    <section className="portal-dashboard owner-dashboard">
      <PortalTopbar role="Owner" name="Redwood Community Partners" />

      <div className="portal-dashboard-grid">
        <aside className="portal-sidebar">
          <p className="portal-kicker">Managed Portfolio</p>
          <h1>
            Owner
            <span className="dashboard-word">Dashboard</span>
          </h1>
          <p>Track occupancy, collections, projects, approvals, reports, and third-party financial handoffs.</p>
          <div className="portal-side-list">
            <span>3 communities</span>
            <span>247 occupied sites</span>
            <span>April packet ready</span>
          </div>
          <Link className="portal-secondary-action" to="/portals/owner/login">
            Switch owner
          </Link>
        </aside>

        <div className="portal-main">
          <div className="portal-tabbar" aria-label="Owner portal sections">
            {tabs.map((tab) => (
              <button className={activeTab === tab ? "is-active" : ""} key={tab} onClick={() => setActiveTab(tab)} type="button">
                {tab}
              </button>
            ))}
          </div>

          <div className="portal-stat-grid">
            <PortalStat icon={UsersRound} label="Portfolio occupancy" value="96%" tone="green" />
            <PortalStat icon={Banknote} label="Month collected" value="$184K" tone="gold" />
            <PortalStat icon={Hammer} label="Capital projects" value="6" tone="purple" />
          </div>

          {activeTab === "Overview" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={BarChart3} title="Operating Snapshot" />
                <div className="portal-metric-stack">
                  <Metric label="Net operating income" value="$96,420" />
                  <Metric label="Delinquency" value="2.8%" />
                  <Metric label="Work order SLA" value="91%" />
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={ShieldCheck} title="Partner Handoffs" />
                <div className="portal-chip-list">
                  {integrations.map((integration) => (
                    <span key={integration}>{integration}</span>
                  ))}
                </div>
              </section>
              <section className="portal-panel wide">
                <PanelTitle icon={BriefcaseBusiness} title="Portfolio Snapshot" />
                <PortfolioTable />
              </section>
            </div>
          )}

          {activeTab === "Portfolio" && (
            <div className="portal-panel-grid">
              <section className="portal-panel wide">
                <PanelTitle icon={Building2} title="Properties" />
                <PortfolioTable />
              </section>
              <section className="portal-panel">
                <PanelTitle icon={Banknote} title="Distributions" />
                <div className="portal-metric-stack">
                  <Metric label="Next ACH" value="May 10" />
                  <Metric label="Projected amount" value="$71,500" />
                  <Metric label="Reserve balance" value="$48,000" />
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={MessageSquareText} title="Owner Notes" />
                <div className="portal-notice">Management recommends approving the roadway patching bid before the next rainy period.</div>
                <div className="portal-notice">Two lease renewals are pending resident signature.</div>
              </section>
            </div>
          )}

          {activeTab === "Rent Roll" && (
            <section className="portal-panel">
              <PanelTitle icon={UsersRound} title="Rent Roll and Receivables" />
              <div className="owner-table rent-roll-table">
                <div className="owner-table-row header">
                  <span>Resident</span>
                  <span>Home/site</span>
                  <span>Balance</span>
                  <span>Lease</span>
                </div>
                {rentRoll.map((item) => (
                  <div className="owner-table-row" key={item.resident}>
                    <strong>{item.resident}</strong>
                    <span>{item.property}</span>
                    <span>{item.balance}</span>
                    <span>{item.lease}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Maintenance" && (
            <div className="portal-panel-grid">
              <section className="portal-panel wide">
                <PanelTitle icon={Hammer} title="Work Orders and Capital Projects" />
                <div className="portal-list">
                  {workOrders.map((order) => (
                    <article key={order.title}>
                      <div>
                        <strong>{order.title}</strong>
                        <span>
                          {order.property} / {order.cost}
                        </span>
                      </div>
                      <em>{order.status}</em>
                    </article>
                  ))}
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={ClipboardCheck} title="Vendor Controls" />
                <div className="portal-notice">Vendors can be tracked here, while dispatch, certificates, and payment details can be handled by specialized partners.</div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={CheckCircle2} title="Service Levels" />
                <div className="portal-metric-stack">
                  <Metric label="Average close time" value="2.4 days" />
                  <Metric label="Emergency response" value="100%" />
                  <Metric label="Open over 7 days" value="4" />
                </div>
              </section>
            </div>
          )}

          {activeTab === "Reports" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={FileSpreadsheet} title="Reports" />
                <div className="portal-list">
                  {reports.map((report) => (
                    <article key={report.name}>
                      <div>
                        <strong>{report.name}</strong>
                        <span>{report.detail}</span>
                      </div>
                      <em>{report.status}</em>
                    </article>
                  ))}
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={BarChart3} title="Export Center" />
                <div className="portal-action-grid single">
                  <button type="button">Download statement</button>
                  <button type="button">Export rent roll</button>
                  <button type="button">Export maintenance ledger</button>
                  <button type="button">Sync accounting file</button>
                </div>
              </section>
            </div>
          )}

          {activeTab === "Approvals" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={ClipboardCheck} title="Approval Queue" />
                <div className="portal-action-grid single">
                  <button type="button">Approve paving scope</button>
                  <button type="button">Review vendor bid</button>
                  <button type="button">Release distribution</button>
                  <button type="button">Approve reserve transfer</button>
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={MessageSquareText} title="Decision Log" />
                <div className="portal-notice">Approvals are recorded with user, timestamp, estimated cost, and supporting documents for audit history.</div>
              </section>
            </div>
          )}
        </div>
      </div>
    </section>
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

function PortfolioTable() {
  return (
    <div className="owner-table">
      <div className="owner-table-row header">
        <span>Property</span>
        <span>Occupancy</span>
        <span>Collected</span>
        <span>Projects</span>
      </div>
      {portfolio.map((item) => (
        <div className="owner-table-row" key={item.property}>
          <strong>{item.property}</strong>
          <span>{item.occupancy}</span>
          <span>{item.collected}</span>
          <span>{item.projects}</span>
        </div>
      ))}
    </div>
  );
}
