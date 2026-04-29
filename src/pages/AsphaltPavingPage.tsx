import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function AsphaltPavingPage() {
  return <StandardPageContent page={pageBySlug("asphalt-paving")} />;
}
