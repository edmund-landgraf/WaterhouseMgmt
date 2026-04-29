import { Building2, Construction, Home, Landmark } from "lucide-react";

export const heroImage =
  "https://images.squarespace-cdn.com/content/v1/66034ab95601eb326fa368fe/b4a2d354-caf5-4f82-8041-720fe7f54778/Almond-Blossom-Aerial.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Communities", href: "/communities" },
  { label: "Our History", href: "/history" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "management",
    title: "Property Management",
    short: "Manufactured home community and apartment management.",
    description:
      "Waterhouse provides hands-on property management for manufactured home communities and apartments, supporting leasing, residents, maintenance, compliance, accounting coordination, and owner communication.",
    icon: Building2,
    image:
      "https://images.squarespace-cdn.com/content/v1/66034ab95601eb326fa368fe/eb1f44aa-2060-46dc-89ff-047acdd122f6/Property-Management-Pic-Banner.jpg",
    details: ["Resident relations", "Maintenance coordination", "Leasing support", "Owner reporting"],
  },
  {
    id: "homes",
    title: "Manufactured Home Sales",
    short: "Home sales, lot preparation, delivery, and setup.",
    description:
      "The Waterhouse team helps buyers and communities move from home selection to lot readiness, delivery coordination, installation support, and occupancy.",
    icon: Home,
    image:
      "https://images.squarespace-cdn.com/content/v1/66034ab95601eb326fa368fe/5f946c1b-2788-47c0-b3fa-2ee08ba9a791/Park-Street-with-Homes-Smallest.jpg",
    details: ["Home selection", "Lot preparation", "Delivery planning", "Move-in readiness"],
  },
  {
    id: "paving",
    title: "Asphalt Paving",
    short: "Roads, parking areas, repairs, and resurfacing.",
    description:
      "Waterhouse supports paving work from estimate through closeout, including roads, parking lots, repairs, removals, grading, compaction, and resurfacing.",
    icon: Construction,
    image:
      "https://images.squarespace-cdn.com/content/v1/66034ab95601eb326fa368fe/74710747-96f3-4886-9cdc-97a9de0dc4f0/Firefly-fresh-asphalt-in-commercial-building-parking-lot-9148.jpg",
    details: ["Paving estimates", "Repair scopes", "Crew scheduling", "Project closeout"],
  },
  {
    id: "brokerage",
    title: "Brokerage Services",
    short: "Representation for homes, land, parks, apartments, and investments.",
    description:
      "Waterhouse brokerage services support buyers and sellers across residential homes, manufactured homes, mobile home parks, apartment properties, raw land, and investment opportunities.",
    icon: Landmark,
    image: heroImage,
    details: ["Listings", "Buyer representation", "Transaction guidance", "Investment properties"],
  },
];

export const communities = [
  { name: "Almond Blossom", region: "Northern California", type: "Manufactured home community" },
  { name: "American Canyon", region: "Northern California", type: "Manufactured home community" },
  { name: "Grass Valley", region: "Northern California", type: "Community management" },
  { name: "Santa Rosa", region: "Northern California", type: "Community management" },
  { name: "Shingle Springs", region: "Northern California", type: "Community management" },
  { name: "Lancaster", region: "Southern California", type: "Community management" },
  { name: "Sunland", region: "Southern California", type: "Community management" },
  { name: "Ventura", region: "Southern California", type: "Community management" },
];

export const regionFilters = ["All", "Northern California", "Southern California"];

