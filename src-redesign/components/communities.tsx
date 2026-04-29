import { useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { communities, regionFilters } from "../content";
import { SectionHeader } from "./section-header";

export function Communities() {
  const [region, setRegion] = useState(regionFilters[0]);
  const filteredCommunities = useMemo(
    () => communities.filter((community) => region === "All" || community.region === region),
    [region],
  );

  return (
    <section className="community-section px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Communities" title="A California community focus" description="Waterhouse is built around local community operations, resident support, and long-term property stewardship." />

        <div className="mt-8 flex flex-wrap gap-2">
          {regionFilters.map((filter) => (
            <button className={`filter-chip ${filter === region ? "is-active" : ""}`} type="button" key={filter} onClick={() => setRegion(filter)}>
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="community-grid">
            {filteredCommunities.map((community) => (
              <div className="community-card" key={community.name}>
                <div className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-lg font-extrabold text-[#111132]">{community.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-500">{community.type}</span>
                  </span>
                  <MapPin className="h-5 w-5 shrink-0 text-[#c4b61d]" />
                </div>
                <p className="mt-5 text-sm font-bold text-[#2c2468]">{community.region}</p>
              </div>
            ))}
          </div>

          <aside className="rounded-2xl bg-[#2c2468] p-6 text-white shadow-2xl">
            <p className="text-xs font-extrabold uppercase tracking-wide text-[#c4b61d]">Resident support</p>
            <h3 className="mt-3 text-2xl font-extrabold">Need help with a Waterhouse community?</h3>
            <p className="mt-4 text-sm leading-6 text-white/78">Contact the office for community questions, maintenance routing, home availability, leasing, or property management support.</p>
            <Link className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-extrabold text-[#2c2468]" to="/contact">
              Contact the office
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

