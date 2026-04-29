import { standardPages } from "@/lib/page-content";

export function pageBySlug(slug: string) {
  const page = standardPages.find((item) => item.slug === slug);

  if (!page) {
    throw new Error(`Missing page content for ${slug}`);
  }

  return page;
}
