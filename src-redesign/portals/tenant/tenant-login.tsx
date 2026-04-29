import { ArrowRight, Building2, KeyRound, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function TenantLogin() {
  return (
    <section className="portal-login tenant-portal">
      <div className="portal-login-card">
        <div>
          <p className="portal-kicker">Tenant Portal</p>
          <h1>Welcome back.</h1>
          <p>Pay rent, submit maintenance requests, review notices, and contact your community management team.</p>
        </div>

        <form className="portal-form">
          <label>
            Email
            <span>
              <Mail className="h-4 w-4" />
              <input placeholder="tenant@example.com" type="email" />
            </span>
          </label>
          <label>
            Password
            <span>
              <KeyRound className="h-4 w-4" />
              <input placeholder="Password" type="password" />
            </span>
          </label>
          <Link className="portal-primary-action" to="/portals/tenant">
            Login as test user
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <div className="portal-login-note">
          <Building2 className="h-5 w-5" />
          <span>Test tenant: Maria Lopez at Almond Blossom Community.</span>
        </div>
      </div>
    </section>
  );
}

