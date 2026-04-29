import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  ExternalLink,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/standard-page";
import { standardPages } from "@/lib/page-content";
import { cn } from "@/lib/utils";
import { AsphaltPavingPage } from "@/pages/AsphaltPavingPage";
import { BrokerageServicesPage } from "@/pages/BrokerageServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { FullServiceDealershipPage } from "@/pages/FullServiceDealershipPage";
import { OurCommunitiesPage } from "@/pages/OurCommunitiesPage";
import { OurHistoryPage } from "@/pages/OurHistoryPage";
import { PropertyManagementPage } from "@/pages/PropertyManagementPage";

const navItems = [
  { label: "Dashboard", path: "/" },
  ...standardPages.map((page) => ({ label: page.title.replace("Full Service ", ""), path: page.path })),
];

const pageRoutes = [
  { path: "property-management", element: <PropertyManagementPage /> },
  { path: "full-service-dealership", element: <FullServiceDealershipPage /> },
  { path: "asphalt-paving", element: <AsphaltPavingPage /> },
  { path: "our-communities", element: <OurCommunitiesPage /> },
  { path: "brokerage-services", element: <BrokerageServicesPage /> },
  { path: "ourhistory", element: <OurHistoryPage /> },
  { path: "contact", element: <ContactPage /> },
];

export function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Routes>
        <Route index element={<DashboardContent />} />
        {pageRoutes.map((route) => (
          <Route element={route.element} key={route.path} path={route.path} />
        ))}
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </main>
  );
}

function SiteHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/92 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-3" to="/">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold leading-4">Waterhouse</span>
            <span className="block text-xs text-muted-foreground">Operations Platform</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                location.pathname === item.path && "bg-muted text-foreground",
              )}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden sm:inline-flex" variant="outline">
          <a href="https://www.waterhousemgmt.com/" rel="noreferrer" target="_blank">
            Live Site
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        <Button className="lg:hidden" size="icon" variant="ghost">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

function DashboardContent() {
  const componentCount = standardPages.reduce((sum, page) => sum + page.appModules.length, 0);
  const providerCount = new Set(standardPages.flatMap((page) => page.appModules.flatMap((module) => module.providers))).size;

  return (
    <>
      <PageHero
        eyebrow="Rebuild system"
        icon={LayoutDashboard}
        sourceUrl="https://www.waterhousemgmt.com/"
        summary="Each public Waterhouse page now uses the same page system: positioning, operating functions, SaaS modules, source link, and contact CTA."
        title="Standardized Waterhouse page rebuild"
      />
      <section className="container grid gap-6 py-8 lg:grid-cols-3">
        <Metric label="Rebuilt page templates" value={standardPages.length} />
        <Metric label="Mapped app modules" value={componentCount} />
        <Metric label="Provider examples" value={providerCount} />
      </section>
      <section className="container pb-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {standardPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link className="group rounded-lg border border-border bg-card p-5 shadow-soft transition-colors hover:bg-muted" key={page.path} to={page.path}>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{page.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{page.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {page.primaryActions.slice(0, 3).map((action) => (
                    <Badge className="bg-background" key={action}>
                      {action}
                    </Badge>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
