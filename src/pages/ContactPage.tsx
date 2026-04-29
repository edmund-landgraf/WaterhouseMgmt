import { StandardPageContent } from "@/components/standard-page";
import { pageBySlug } from "@/lib/page-registry";

export function ContactPage() {
  return <StandardPageContent page={pageBySlug("contact")} />;
}
