import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function BrokerageServicesPage() {
  return <StandardPageContent page={pageBySlug("brokerage-services")} />;
}
