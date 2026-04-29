import { ArrowRight, KeyRound, Mail, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

export function ManagerLogin() {
  return (
    <section className="portal-login manager-portal">
      <div className="portal-login-card">
        <div>
          <p className="portal-kicker">Manager Console</p>
          <h1>Operations hub.</h1>
          <p>Run leasing, maintenance, communications, accounting queues, reports, approvals, and partner handoffs.</p>
        </div>

        <form className="portal-form">
          <label>
            Email
            <span>
              <Mail className="h-4 w-4" />
              <input placeholder="manager@example.com" type="email" />
            </span>
          </label>
          <label>
            Password
            <span>
              <KeyRound className="h-4 w-4" />
              <input placeholder="Password" type="password" />
            </span>
          </label>
          <Link className="portal-primary-action" to="/portals/manager">
            Login as test manager
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <div className="portal-login-note">
          <Settings2 className="h-5 w-5" />
          <span>Test manager: Waterhouse operations team.</span>
        </div>
      </div>
    </section>
  );
}
