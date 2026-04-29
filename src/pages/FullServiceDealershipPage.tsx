import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function FullServiceDealershipPage() {
  return <StandardPageContent page={pageBySlug("full-service-dealership")} />;
}
