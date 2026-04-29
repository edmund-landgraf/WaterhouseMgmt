import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function PropertyManagementPage() {
  return <StandardPageContent page={pageBySlug("property-management")} />;
}
