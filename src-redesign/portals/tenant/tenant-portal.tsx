import type { LucideIcon } from "lucide-react";
import { CalendarDays, CreditCard, FileText, MessageSquareText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const requests = [
  { title: "Kitchen sink leak", status: "Scheduled", detail: "Vendor visit set for Thursday morning." },
  { title: "Porch light replacement", status: "Received", detail: "Management is reviewing the request." },
];

export function TenantPortal() {
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
          <p>Manage rent, maintenance, community notices, and messages from one place.</p>
          <Link className="portal-secondary-action" to="/portals/tenant/login">
            Switch tenant
          </Link>
        </aside>

        <div className="portal-main">
          <div className="portal-stat-grid">
            <PortalStat icon={CreditCard} label="Current balance" value="$0.00" tone="green" />
            <PortalStat icon={CalendarDays} label="Next rent due" value="May 1" tone="gold" />
            <PortalStat icon={Wrench} label="Open requests" value="2" tone="purple" />
          </div>

          <div className="portal-panel-grid">
            <section className="portal-panel">
              <div className="portal-panel-title">
                <Wrench className="h-5 w-5" />
                Maintenance Requests
              </div>
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
              <div className="portal-panel-title">
                <FileText className="h-5 w-5" />
                Notices
              </div>
              <div className="portal-notice">Community landscaping work is planned for the north entrance next week.</div>
              <div className="portal-notice">Pool gate code changed on April 15. Contact the office if you need access help.</div>
            </section>

            <section className="portal-panel wide">
              <div className="portal-panel-title">
                <MessageSquareText className="h-5 w-5" />
                Quick Actions
              </div>
              <div className="portal-action-grid">
                <button type="button">Pay rent</button>
                <button type="button">New maintenance request</button>
                <button type="button">Message manager</button>
                <button type="button">Update contact info</button>
              </div>
            </section>
          </div>
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
        <span>{role}: {name}</span>
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
