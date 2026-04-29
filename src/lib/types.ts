export type ComponentMatch = {
  name: string;
  priority: "Core" | "Operational" | "Partner" | "Research" | "Marketing";
  providers: string[];
};

export type BusinessLine = {
  id: string;
  name: string;
  shortName: string;
  summary: string;
  sourceUrl: string;
  functions: string[];
  components: ComponentMatch[];
};

export type Community = {
  name: string;
  city: string;
  phone: string;
  url: string;
  attributes: string[];
};

export type SitePage = {
  title: string;
  url: string;
  type: string;
};

export type WaterhouseModel = {
  company: {
    name: string;
    position: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
  };
  pages: SitePage[];
  communities: Community[];
  businessLines: BusinessLine[];
};
