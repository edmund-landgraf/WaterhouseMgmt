import { ArrowRight, BriefcaseBusiness, KeyRound, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function OwnerLogin() {
  return (
    <section className="portal-login owner-portal">
      <div className="portal-login-card">
        <div>
          <p className="portal-kicker">Owner Portal</p>
          <h1>Portfolio access.</h1>
          <p>Review property performance, occupancy, maintenance activity, statements, and project updates.</p>
        </div>

        <form className="portal-form">
          <label>
            Email
            <span>
              <Mail className="h-4 w-4" />
              <input placeholder="owner@example.com" type="email" />
            </span>
          </label>
          <label>
            Password
            <span>
              <KeyRound className="h-4 w-4" />
              <input placeholder="Password" type="password" />
            </span>
          </label>
          <Link className="portal-primary-action" to="/portals/owner">
            Login as test user
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <div className="portal-login-note">
          <BriefcaseBusiness className="h-5 w-5" />
          <span>Test owner: Redwood Community Partners.</span>
        </div>
      </div>
    </section>
  );
}

