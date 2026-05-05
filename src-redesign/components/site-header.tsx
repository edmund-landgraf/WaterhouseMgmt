import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../content";
import { LogoMark } from "./logo-mark";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/94 backdrop-blur-xl">
      <div className="site-header-inner mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link className="logo-lockup" to="/" aria-label="Waterhouse Management Corporation home">
          <LogoMark />
        </Link>

        <nav className="site-nav hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`} to={item.href} key={item.label}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link className="portal-nav-button tenant" to="/portals/tenant/login">
            For Tenants
          </Link>
          <Link className="portal-nav-button owner" to="/portals/owner/login">
            For Owners
          </Link>
          <Link className="portal-nav-button manager" to="/portals/manager/login">
            For Managers
          </Link>
          <Link className="portal-nav-button admin" to="/internal/login">
            Admin
          </Link>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-md border border-black/10 bg-white lg:hidden" type="button" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-5 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link className="rounded-md px-3 py-3 text-sm font-bold text-[#2c2468]" to={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="rounded-md bg-[#f4f1bd] px-3 py-3 text-sm font-bold text-[#2c2468]" to="/portals/tenant/login" onClick={() => setMenuOpen(false)}>
              For Tenants
            </Link>
            <Link className="rounded-md bg-[#2c2468] px-3 py-3 text-sm font-bold text-white" to="/portals/owner/login" onClick={() => setMenuOpen(false)}>
              For Owners
            </Link>
            <Link className="rounded-md bg-[#e8eef8] px-3 py-3 text-sm font-bold text-[#111132]" to="/portals/manager/login" onClick={() => setMenuOpen(false)}>
              For Managers
            </Link>
            <Link className="rounded-md bg-[#111132] px-3 py-3 text-sm font-bold text-white" to="/internal/login" onClick={() => setMenuOpen(false)}>
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
