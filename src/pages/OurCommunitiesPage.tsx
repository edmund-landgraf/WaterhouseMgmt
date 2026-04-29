import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function OurCommunitiesPage() {
  return <StandardPageContent page={pageBySlug("our-communities")} />;
}
