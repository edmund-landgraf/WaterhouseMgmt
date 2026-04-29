import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  Home,
  MessageSquareText,
  ShieldCheck,
  Upload,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ledger = [
  { date: "Apr 1", item: "Rent payment", amount: "-$1,425.00", status: "Processed by Stripe" },
  { date: "Apr 1", item: "Monthly rent", amount: "$1,425.00", status: "Posted" },
  { date: "Mar 12", item: "Utility reimbursement", amount: "$38.24", status: "Posted" },
];

const requests = [
  { title: "Kitchen sink leak", status: "Scheduled", detail: "Vendor visit set for Thursday morning.", priority: "Normal" },
  { title: "Porch light replacement", status: "Received", detail: "Management is reviewing the request.", priority: "Low" },
  { title: "AC inspection", status: "Closed", detail: "Filter changed and condenser checked.", priority: "Completed" },
];

const documents = [
  { name: "Lease agreement", meta: "Signed with DocuSign", action: "View" },
  { name: "Community rules", meta: "Updated April 2026", action: "Open" },
  { name: "Renters insurance", meta: "Verified by partner carrier", action: "Replace" },
];

const messages = [
  { from: "Community Manager", subject: "Pool gate code update", age: "2h" },
  { from: "Maintenance", subject: "Sink repair appointment confirmed", age: "1d" },
  { from: "Office", subject: "May community notice", age: "3d" },
];

const thirdPartyLinks = [
  "Stripe payment processing",
  "DocuSign lease signatures",
  "Insurance verification partner",
  "SmartRent resident access",
];

const tabs = ["Overview", "Payments", "Maintenance", "Documents", "Messages"] as const;

type TenantTab = (typeof tabs)[number];

export function TenantPortal() {
  const [activeTab, setActiveTab] = useState<TenantTab>("Overview");
  const openRequests = useMemo(() => requests.filter((request) => request.status !== "Closed").length, []);

  return (
    <section className="portal-dashboard tenant-dashboard">
      <PortalTopbar role="Tenant" name="Maria Lopez" />

      <div className="portal-dashboard-grid">
        <aside className="portal-sidebar">
          <p className="portal-kicker">Almond Blossom Community</p>
          <h1>
            Tenant
            <span className="dashboard-word">Dashboard</span>
          </h1>
          <p>Manage rent, maintenance, lease documents, messages, and community services from one place.</p>
          <div className="portal-side-list">
            <span>Space 42B</span>
            <span>Lease ends Jan 31, 2027</span>
            <span>Autopay active</span>
          </div>
          <Link className="portal-secondary-action" to="/portals/tenant/login">
            Switch tenant
          </Link>
        </aside>

        <div className="portal-main">
          <div className="portal-tabbar" aria-label="Tenant portal sections">
            {tabs.map((tab) => (
              <button className={activeTab === tab ? "is-active" : ""} key={tab} onClick={() => setActiveTab(tab)} type="button">
                {tab}
              </button>
            ))}
          </div>

          <div className="portal-stat-grid">
            <PortalStat icon={CreditCard} label="Current balance" value="$0.00" tone="green" />
            <PortalStat icon={CalendarDays} label="Next rent due" value="May 1" tone="gold" />
            <PortalStat icon={Wrench} label="Open requests" value={String(openRequests)} tone="purple" />
          </div>

          {activeTab === "Overview" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={Home} title="Resident Summary" />
                <div className="portal-metric-stack">
                  <Metric label="Lease status" value="Active" />
                  <Metric label="Monthly rent" value="$1,425" />
                  <Metric label="Deposit held" value="$1,000" />
                </div>
              </section>

              <section className="portal-panel">
                <PanelTitle icon={ShieldCheck} title="Third-Party Services" />
                <div className="portal-chip-list">
                  {thirdPartyLinks.map((link) => (
                    <span key={link}>{link}</span>
                  ))}
                </div>
              </section>

              <section className="portal-panel wide">
                <PanelTitle icon={MessageSquareText} title="Quick Actions" />
                <div className="portal-action-grid">
                  <button type="button">Pay rent</button>
                  <button type="button">New request</button>
                  <button type="button">Message office</button>
                  <button type="button">Upload document</button>
                </div>
              </section>
            </div>
          )}

          {activeTab === "Payments" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={CreditCard} title="Payment Setup" />
                <div className="portal-notice">Autopay runs through Stripe on the first business day of each month.</div>
                <div className="portal-action-grid single">
                  <button type="button">Manage autopay</button>
                  <button type="button">Make one-time payment</button>
                  <button type="button">Download receipt</button>
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={CalendarDays} title="Charges" />
                <div className="portal-metric-stack">
                  <Metric label="Rent" value="$1,425.00" />
                  <Metric label="Utilities" value="$38.24" />
                  <Metric label="Fees" value="$0.00" />
                </div>
              </section>
              <section className="portal-panel wide">
                <PanelTitle icon={FileText} title="Resident Ledger" />
                <PortalRows rows={ledger} />
              </section>
            </div>
          )}

          {activeTab === "Maintenance" && (
            <div className="portal-panel-grid">
              <section className="portal-panel wide">
                <PanelTitle icon={Wrench} title="Maintenance Requests" />
                <div className="portal-list">
                  {requests.map((request) => (
                    <article key={request.title}>
                      <div>
                        <strong>{request.title}</strong>
                        <span>{request.detail}</span>
                      </div>
                      <em>{request.status}</em>
                    </article>
                  ))}
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={Upload} title="Submit Request" />
                <div className="portal-form compact">
                  <label>
                    Category
                    <select defaultValue="Plumbing">
                      <option>Plumbing</option>
                      <option>Electrical</option>
                      <option>Appliance</option>
                      <option>Grounds</option>
                    </select>
                  </label>
                  <label>
                    Description
                    <textarea placeholder="What needs attention?" />
                  </label>
                  <button type="button">Send to management</button>
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={CheckCircle2} title="Vendor Handoff" />
                <div className="portal-notice">Approved jobs can be dispatched to preferred vendors with status updates coming back into this portal.</div>
              </section>
            </div>
          )}

          {activeTab === "Documents" && (
            <section className="portal-panel">
              <PanelTitle icon={FileText} title="Documents and Compliance" />
              <div className="portal-list">
                {documents.map((document) => (
                  <article key={document.name}>
                    <div>
                      <strong>{document.name}</strong>
                      <span>{document.meta}</span>
                    </div>
                    <em>{document.action}</em>
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Messages" && (
            <div className="portal-panel-grid">
              <section className="portal-panel">
                <PanelTitle icon={MessageSquareText} title="Inbox" />
                <div className="portal-list">
                  {messages.map((message) => (
                    <article key={message.subject}>
                      <div>
                        <strong>{message.subject}</strong>
                        <span>{message.from}</span>
                      </div>
                      <em>{message.age}</em>
                    </article>
                  ))}
                </div>
              </section>
              <section className="portal-panel">
                <PanelTitle icon={MessageSquareText} title="New Message" />
                <div className="portal-form compact">
                  <label>
                    Topic
                    <select defaultValue="General question">
                      <option>General question</option>
                      <option>Billing</option>
                      <option>Maintenance</option>
                      <option>Lease</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea placeholder="Write a short message" />
                  </label>
                  <button type="button">Send message</button>
                </div>
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

function PortalRows({ rows }: { rows: Array<{ date: string; item: string; amount: string; status: string }> }) {
  return (
    <div className="owner-table">
      <div className="owner-table-row header">
        <span>Date</span>
        <span>Item</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      {rows.map((row) => (
        <div className="owner-table-row" key={`${row.date}-${row.item}`}>
          <strong>{row.date}</strong>
          <span>{row.item}</span>
          <span>{row.amount}</span>
          <span>{row.status}</span>
        </div>
      ))}
    </div>
  );
}
