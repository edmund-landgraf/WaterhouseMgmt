import { SectionHeader } from "./section-header";

export function History() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <SectionHeader eyebrow="Our History" title="Established community experience" description="Waterhouse Management Corporation has focused on manufactured home community management and related property services since 1997." />
      </div>

      <div className="history-panel">
        <div className="history-line" />
        <HistoryPoint year="1997" title="Waterhouse begins serving manufactured home communities" />
        <HistoryPoint year="Today" title="Integrated management, home sales, paving, and brokerage support" />
        <HistoryPoint year="Next" title="Clearer digital access for residents, owners, buyers, and clients" />
      </div>
    </section>
  );
}

function HistoryPoint({ year, title }: { year: string; title: string }) {
  return (
    <div className="relative z-10 grid gap-2 rounded-xl border border-black/10 bg-white p-5 shadow-sm">
      <span className="text-sm font-extrabold uppercase tracking-wide text-[#c4b61d]">{year}</span>
      <span className="text-lg font-extrabold text-[#111132]">{title}</span>
    </div>
  );
}

