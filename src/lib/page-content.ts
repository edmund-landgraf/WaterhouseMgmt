import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building,
  Building2,
  Construction,
  Factory,
  Home,
  Mail,
  MapPinned,
  Users,
} from "lucide-react";

export type StandardPage = {
  slug: string;
  path: string;
  sourceUrl: string;
  eyebrow: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  primaryActions: string[];
  sections: Array<{
    title: string;
    body: string;
    items: string[];
  }>;
  appModules: Array<{
    name: string;
    purpose: string;
    providers: string[];
  }>;
};

export const standardPages: StandardPage[] = [
  {
    slug: "property-management",
    path: "/property-management",
    sourceUrl: "https://www.waterhousemgmt.com/property-management",
    eyebrow: "Business line",
    title: "Full Service Property Management",
    summary:
      "A standardized operating page for managing mobile home communities and apartment complexes across leasing, maintenance, compliance, accounting, and owner reporting.",
    icon: Building2,
    primaryActions: ["Screen applicants", "Collect rent", "Dispatch maintenance", "Report to owners"],
    sections: [
      {
        title: "Resident Lifecycle",
        body: "Waterhouse describes tenant acquisition, screening, vacancy reduction, prompt response, and lease renewals as part of its management work.",
        items: ["tenant acquisition", "tenant applications", "screening", "renewals", "resident concerns"],
      },
      {
        title: "Property Operations",
        body: "The operation includes onsite managers, regional oversight, maintenance staff, contractor networks, repairs, and inspections across California.",
        items: ["maintenance requests", "contractor coordination", "inspections", "onsite management", "regional oversight"],
      },
      {
        title: "Financial and Compliance",
        body: "The page calls out rent collection, budgeting, accounting, detailed financial reports, lease agreements, disputes, and risk management.",
        items: ["rent collection", "budgeting", "accounting", "owner reports", "legal compliance", "risk management"],
      },
    ],
    appModules: [
      { name: "Property Management System", purpose: "Units, residents, leases, payments, accounting, and owner reports.", providers: ["AppFolio", "Yardi Breeze", "Rent Manager", "Buildium"] },
      { name: "Resident Portal", purpose: "Applications, rent payments, service requests, notices, and resident communication.", providers: ["Zego", "PayNearMe", "Stripe", "Plaid"] },
      { name: "Maintenance Desk", purpose: "Ticket intake, vendor assignment, work order status, photos, and closeout.", providers: ["Property Meld", "HappyCo", "CompanyCam"] },
      { name: "Compliance Workspace", purpose: "Lease documents, notices, disputes, rules, and recurring compliance tasks.", providers: ["DocuSign", "SharePoint", "Google Workspace"] },
    ],
  },
  {
    slug: "full-service-dealership",
    path: "/full-service-dealership",
    sourceUrl: "https://www.waterhousemgmt.com/full-service-dealership",
    eyebrow: "Business line",
    title: "Full Service Lot Prep and Manufactured Home Dealership",
    summary:
      "A consistent operating page for removing obsolete homes, preparing lots, coordinating manufacturers, delivering and setting homes, and selling homes to raise occupancy.",
    icon: Home,
    primaryActions: ["Remove old homes", "Prepare lots", "Coordinate delivery", "Sell homes"],
    sections: [
      {
        title: "Removal and Lot Prep",
        body: "The site describes safe demolition, removal, disposal, recycling, and preparation of lots for new manufactured homes.",
        items: ["demolition", "removal", "recycling", "lot prep", "utility-aware planning"],
      },
      {
        title: "Home Selection and Delivery",
        body: "Waterhouse coordinates with manufacturers, chooses homes sized for the lot, avoids utility conflicts, and plans delivery.",
        items: ["manufacturer relationships", "floorplan selection", "option selection", "transport regulations", "delivery planning"],
      },
      {
        title: "Setup and Sales",
        body: "The dealership workflow continues through setup, finishing, presentation, and sales so park owners can generate rental income quickly.",
        items: ["home setup", "finishing", "presentation", "buyer pipeline", "occupancy improvement"],
      },
    ],
    appModules: [
      { name: "Dealership CRM", purpose: "Buyer leads, park-owner requests, sales follow-up, and deal status.", providers: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive"] },
      { name: "Infill Project Tracker", purpose: "Removal, lot prep, delivery, setup, punch list, and handoff milestones.", providers: ["JobTread", "Buildertrend", "Procore"] },
      { name: "Inventory and Listings", purpose: "Homes, models, floorplans, community availability, and sales channels.", providers: ["MHVillage", "MHBay", "Zillow"] },
      { name: "Financing Workflow", purpose: "Track financing partners, applications, conditions, and buyer progress.", providers: ["Triad Financial Services", "21st Mortgage", "Vanderbilt Mortgage"] },
    ],
  },
  {
    slug: "asphalt-paving",
    path: "/asphalt-paving",
    sourceUrl: "https://www.waterhousemgmt.com/asphalt-paving",
    eyebrow: "Business line",
    title: "Full Service Asphalt Paving",
    summary:
      "A standardized page for quoting and executing roads, parking lots, repairs, grind-downs, removals, land preparation, paving, and job closeout.",
    icon: Construction,
    primaryActions: ["Quote work", "Assess pavement", "Schedule crews", "Close out jobs"],
    sections: [
      {
        title: "Assessment and Scope",
        body: "Waterhouse lists crack fill, slurry coat, grind-downs, partial removal, and full removal as available paths based on pavement condition.",
        items: ["quote intake", "condition assessment", "repair options", "replacement options", "cost-effective recommendations"],
      },
      {
        title: "Removal and Preparation",
        body: "The paving page emphasizes responsible disposal, recycling, grading, correct road base, and compaction before paving.",
        items: ["removal", "disposal", "recycling", "grading", "road base", "compaction"],
      },
      {
        title: "Paving and Closeout",
        body: "The final workflow is hot mix placement, machine spreading, compaction, curing, traffic reopening, and final documentation.",
        items: ["hot asphalt mix", "crew execution", "equipment tracking", "curing", "closeout photos"],
      },
    ],
    appModules: [
      { name: "Estimating", purpose: "Measurements, scope options, repair recommendations, pricing, and proposal generation.", providers: ["HCSS", "B2W", "HeavyBid"] },
      { name: "Crew Dispatch", purpose: "Schedule crews, assign equipment, manage job dates, and track field status.", providers: ["ServiceTitan", "Jobber", "Housecall Pro"] },
      { name: "Fleet and Equipment", purpose: "Track equipment, maintenance, utilization, and GPS status.", providers: ["Fleetio", "Samsara", "Verizon Connect"] },
      { name: "Field Documentation", purpose: "Capture assessment photos, progress photos, daily logs, and closeout reports.", providers: ["CompanyCam", "Raken", "Procore"] },
    ],
  },
  {
    slug: "our-communities",
    path: "/our-communities",
    sourceUrl: "https://www.waterhousemgmt.com/our-communities",
    eyebrow: "Portfolio",
    title: "Our Featured Communities",
    summary:
      "A common page structure for the managed community portfolio, listing California properties and connecting each community to operations, marketing, and resident workflows.",
    icon: Building,
    primaryActions: ["List communities", "Route inquiries", "Show amenities", "Track portfolio"],
    sections: [
      {
        title: "Northern California",
        body: "Featured communities include Coddingtown Mobile Estates, Napa Olympia Mobilodge, Grass Valley Mobile Home Village, Yacht Harbor Manor, and Oak Lane Mobile Village.",
        items: ["Santa Rosa", "American Canyon", "Grass Valley", "Santa Cruz", "Shingle Springs"],
      },
      {
        title: "Southern California",
        body: "Featured communities include Sherman Grove, Lido Estates, and Imperial Ventura Mobile Estates.",
        items: ["Sunland", "Lancaster", "Ventura"],
      },
      {
        title: "Community Experience",
        body: "The community pages emphasize pools, clubhouses, gathering halls, kitchens, recreation, nearby amenities, and local contact numbers.",
        items: ["amenities", "phone routing", "addresses", "tour interest", "resident experience"],
      },
    ],
    appModules: [
      { name: "Community CMS", purpose: "Manage community descriptions, amenities, addresses, photos, and phone numbers.", providers: ["Sanity", "Contentful", "Strapi"] },
      { name: "Availability and Listings", purpose: "Connect communities to available homes, vacant lots, and sales inventory.", providers: ["MHVillage", "AppFolio", "Rent Manager"] },
      { name: "Resident Communication", purpose: "Send community notices, event updates, reminders, and local alerts.", providers: ["Podium", "Birdeye", "Mailchimp"] },
      { name: "Tour Scheduling", purpose: "Route prospects to onsite teams and capture appointment requests.", providers: ["Calendly", "Acuity", "HubSpot"] },
    ],
  },
  {
    slug: "brokerage-services",
    path: "/brokerage-services",
    sourceUrl: "https://www.waterhousemgmt.com/brokerage-services",
    eyebrow: "Business line",
    title: "Brokerage Services",
    summary:
      "A standard page for buying and selling single family homes, manufactured homes, mobile home parks, apartment complexes, raw land, and investment properties.",
    icon: BriefcaseBusiness,
    primaryActions: ["Capture leads", "Source deals", "Manage diligence", "Close transactions"],
    sections: [
      {
        title: "Property Types",
        body: "The public page names single family homes, manufactured homes, mobile home parks, apartment complexes, raw land, and commercial properties.",
        items: ["single family homes", "manufactured homes", "mobile home parks", "apartment complexes", "raw land"],
      },
      {
        title: "Buyer and Seller Support",
        body: "Waterhouse positions the team for seasoned investors, first-time home buyers, sellers, and portfolio expansion.",
        items: ["buyer pipeline", "seller pipeline", "investor support", "homebuyer support", "valuation support"],
      },
      {
        title: "Transaction Execution",
        body: "The brokerage workflow needs structured tracking from lead to listing, diligence, negotiation, document execution, and close.",
        items: ["listings", "offers", "due diligence", "documents", "closing milestones"],
      },
    ],
    appModules: [
      { name: "Real Estate CRM", purpose: "Manage buyers, sellers, investors, lead sources, and follow-up.", providers: ["Follow Up Boss", "kvCORE", "Real Geeks", "HubSpot"] },
      { name: "Transaction Management", purpose: "Track milestones, documents, deadlines, signatures, and closing status.", providers: ["Lone Wolf", "SkySlope", "Dotloop"] },
      { name: "Deal Sourcing", purpose: "Research mobile home parks, apartments, land, and commercial listings.", providers: ["Crexi", "LoopNet", "CoStar"] },
      { name: "Data Room", purpose: "Organize diligence files, contracts, reports, and buyer/seller documents.", providers: ["Dealpath", "SharePoint", "Google Drive"] },
    ],
  },
  {
    slug: "ourhistory",
    path: "/ourhistory",
    sourceUrl: "https://www.waterhousemgmt.com/ourhistory",
    eyebrow: "Company",
    title: "Established Expertise",
    summary:
      "A standard company page for Waterhouse's history creating and nurturing mobile home communities since 1997.",
    icon: Users,
    primaryActions: ["Tell history", "Build trust", "Show expertise", "Support recruiting"],
    sections: [
      {
        title: "Origins",
        body: "The site states Waterhouse's experience dates back to 1997, focused on mobile home communities.",
        items: ["founded expertise", "mobile home communities", "resident service", "long-term stewardship"],
      },
      {
        title: "Operating Philosophy",
        body: "The history page emphasizes care, comfort, mutual respect, trust, and community building.",
        items: ["resident care", "comfort", "respect", "trust", "community"],
      },
      {
        title: "Platform Role",
        body: "In the application, this page can become a central credibility page that connects history to every service line.",
        items: ["brand story", "service proof", "portfolio credibility", "team positioning"],
      },
    ],
    appModules: [
      { name: "Content Management", purpose: "Edit company history, leadership, values, and proof points.", providers: ["Sanity", "Contentful", "Strapi"] },
      { name: "Media Library", purpose: "Manage historical photos, community assets, and brand content.", providers: ["Cloudinary", "Uploadcare", "S3"] },
      { name: "Recruiting Linkage", purpose: "Connect company story to team roles and hiring workflows.", providers: ["Workable", "Greenhouse", "BambooHR"] },
      { name: "Reputation Layer", purpose: "Surface testimonials, reviews, and community proof.", providers: ["Birdeye", "Podium", "NiceJob"] },
    ],
  },
  {
    slug: "contact",
    path: "/contact",
    sourceUrl: "https://www.waterhousemgmt.com/contact",
    eyebrow: "Support",
    title: "Connect with Our Team",
    summary:
      "A standard contact page for routing general inquiries, business-line requests, community calls, and support messages to the right team.",
    icon: Mail,
    primaryActions: ["Route messages", "Capture leads", "Assign follow-up", "Track response"],
    sections: [
      {
        title: "Contact Details",
        body: "The public contact page lists Waterhouse's support email, phone number, and Roseville office address.",
        items: ["info@waterhousemgmt.com", "(916) 772-4918", "500 Giuseppe Ct Suite 2", "Roseville CA 95678"],
      },
      {
        title: "Inquiry Routing",
        body: "A rebuilt contact page should classify incoming messages by service line so property, paving, dealership, brokerage, and resident inquiries do not land in one undifferentiated inbox.",
        items: ["property management", "home dealership", "asphalt quote", "brokerage", "resident/community"],
      },
      {
        title: "Follow-up Operations",
        body: "Contact submissions should create CRM records, tasks, notifications, and source attribution.",
        items: ["CRM record", "assigned owner", "status", "SLA", "source tracking"],
      },
    ],
    appModules: [
      { name: "Smart Intake Form", purpose: "Classify request type, collect structured details, and route to the right team.", providers: ["HubSpot", "Typeform", "Jotform"] },
      { name: "CRM Assignment", purpose: "Create contacts, companies, deals, tickets, and follow-up tasks.", providers: ["HubSpot", "Salesforce", "Zoho CRM"] },
      { name: "Messaging Inbox", purpose: "Centralize email, SMS, and web form replies.", providers: ["Podium", "Front", "Intercom"] },
      { name: "Notifications", purpose: "Alert staff when urgent requests or quote leads arrive.", providers: ["Slack", "Microsoft Teams", "Twilio"] },
    ],
  },
];

export function getStandardPage(pathname: string) {
  return standardPages.find((page) => page.path === pathname);
}
