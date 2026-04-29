import { Navigate, Route, Routes } from "react-router-dom";
import { SiteHeader } from "./components/site-header";
import { CommunitiesPage } from "./pages/communities";
import { ContactPage } from "./pages/contact";
import { HistoryPage } from "./pages/history";
import { HomePage } from "./pages/home";
import { ServicesPage } from "./pages/services";
import { OwnerLogin } from "./portals/owner/owner-login";
import { OwnerPortal } from "./portals/owner/owner-portal";
import { TenantLogin } from "./portals/tenant/tenant-login";
import { TenantPortal } from "./portals/tenant/tenant-portal";

export function RedesignApp() {
  return (
    <main className="site-shell min-h-screen text-[#111132]">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portals/tenant/login" element={<TenantLogin />} />
        <Route path="/portals/tenant" element={<TenantPortal />} />
        <Route path="/portals/owner/login" element={<OwnerLogin />} />
        <Route path="/portals/owner" element={<OwnerPortal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
