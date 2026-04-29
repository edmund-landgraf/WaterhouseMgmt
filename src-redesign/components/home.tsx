import { ArrowRight, BriefcaseBusiness, KeyRound, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { heroImage, services } from "../content";

export function Home() {
  return (
    <>
      <section className="hero relative min-h-[690px] overflow-hidden" aria-label="Waterhouse Management Corporation home">
        <img className="hero-image" src={heroImage} alt="" onError={(event) => event.currentTarget.remove()} />
        <div className="hero-overlay" />

        <div className="hero-inner relative z-10 mx-auto min-h-[690px] max-w-7xl px-5 py-16 lg:px-8">
          <div className="hero-copy">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#2c2468] shadow-lg">
              <ShieldCheck className="h-4 w-4 text-[#c4b61d]" />
              Enhancing lifestyles since 1997
            </span>
            <h1 className="hero-title mt-7 font-extrabold leading-[1.02] tracking-normal text-white">Community management that follows through.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Waterhouse Management Corporation serves manufactured home communities, property owners, residents, home buyers, and real estate clients across California.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="inline-flex h-12 items-center gap-2 rounded-md bg-[#c4b61d] px-5 text-sm font-extrabold text-[#111132] shadow-xl" to="/contact">
                Request management help
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="inline-flex h-12 items-center rounded-md bg-white/92 px-5 text-sm font-extrabold text-[#2c2468] shadow-xl" to="/services">
                Explore services
              </Link>
            </div>
          </div>

          <aside className="hero-proof">
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#c4b61d]">Waterhouse at a glance</p>
            <div className="mt-5 grid gap-4">
              <HeroFact value="1997" label="Serving communities since" />
              <HeroFact value={String(services.length)} label="Lines of business" />
              <HeroFact value="CA" label="Manufactured housing focus" />
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="portal-entry-band mb-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#c4b61d]">Portal access</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#111132]">Find the right Waterhouse portal</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Tenants can manage rent and maintenance. Owners can review portfolio reporting, documents, and project updates.</p>
          </div>
          <div className="portal-entry-actions">
            <Link className="portal-entry-card tenant" to="/portals/tenant/login">
              <KeyRound className="h-5 w-5" />
              <span>
                <strong>For Tenants</strong>
                <em>Rent, requests, notices</em>
              </span>
            </Link>
            <Link className="portal-entry-card owner" to="/portals/owner/login">
              <BriefcaseBusiness className="h-5 w-5" />
              <span>
                <strong>For Owners</strong>
                <em>Reports, projects, documents</em>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" to="/services" key={service.id}>
                <Icon className="h-6 w-6 text-[#2c2468]" />
                <h2 className="mt-4 text-lg font-extrabold text-[#111132]">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.short}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

function HeroFact({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/16 bg-white/10 p-4 backdrop-blur-md">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm font-bold text-white/72">{label}</div>
    </div>
  );
}
