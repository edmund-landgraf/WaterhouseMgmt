import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function OurHistoryPage() {
  return <StandardPageContent page={pageBySlug("ourhistory")} />;
}
