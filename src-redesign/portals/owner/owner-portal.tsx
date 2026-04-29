import type { LucideIcon } from "lucide-react";
import { Banknote, BarChart3, BriefcaseBusiness, ClipboardCheck, FileSpreadsheet, Hammer, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const portfolio = [
  { property: "Almond Blossom", occupancy: "97%", balance: "Current", projects: "2 active" },
  { property: "American Canyon", occupancy: "94%", balance: "Current", projects: "1 active" },
  { property: "Grass Valley", occupancy: "96%", balance: "Review", projects: "3 active" },
];

export function OwnerPortal() {
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
          <p>Track occupancy, financial summaries, capital projects, maintenance volume, and owner reporting.</p>
          <Link className="portal-secondary-action" to="/portals/owner/login">
            Switch owner
          </Link>
        </aside>

        <div className="portal-main">
          <div className="portal-stat-grid">
            <PortalStat icon={UsersRound} label="Portfolio occupancy" value="96%" tone="green" />
            <PortalStat icon={Banknote} label="Month-to-date collected" value="$184K" tone="gold" />
            <PortalStat icon={Hammer} label="Capital projects" value="6" tone="purple" />
          </div>

          <div className="portal-panel-grid">
            <section className="portal-panel wide">
              <div className="portal-panel-title">
                <BriefcaseBusiness className="h-5 w-5" />
                Portfolio Snapshot
              </div>
              <div className="owner-table">
                <div className="owner-table-row header">
                  <span>Property</span>
                  <span>Occupancy</span>
                  <span>Receivables</span>
                  <span>Projects</span>
                </div>
                {portfolio.map((item) => (
                  <div className="owner-table-row" key={item.property}>
                    <strong>{item.property}</strong>
                    <span>{item.occupancy}</span>
                    <span>{item.balance}</span>
                    <span>{item.projects}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="portal-panel">
              <div className="portal-panel-title">
                <BarChart3 className="h-5 w-5" />
                Reporting
              </div>
              <div className="portal-notice">April owner packet is ready for review.</div>
              <div className="portal-notice">Budget variance report updated today.</div>
            </section>

            <section className="portal-panel">
              <div className="portal-panel-title">
                <ClipboardCheck className="h-5 w-5" />
                Approvals
              </div>
              <div className="portal-action-grid single">
                <button type="button">Approve paving scope</button>
                <button type="button">Review vendor bid</button>
                <button type="button">Download statement</button>
              </div>
            </section>

            <section className="portal-panel wide">
              <div className="portal-panel-title">
                <FileSpreadsheet className="h-5 w-5" />
                Documents
              </div>
              <div className="portal-action-grid">
                <button type="button">Owner statement</button>
                <button type="button">Rent roll</button>
                <button type="button">Maintenance ledger</button>
                <button type="button">Capital plan</button>
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
