import { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../content";
import { SectionHeader } from "./section-header";

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id);
  const selectedService = services.find((service) => service.id === activeService) ?? services[0];
  const Icon = selectedService.icon;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="Services" title="Services for community and property needs" description="Choose a service to see how Waterhouse can help residents, property owners, communities, buyers, and sellers." />

      <div className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
        <div className="grid gap-3">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            const isActive = activeService === service.id;
            return (
              <button className={`service-selector ${isActive ? "is-active" : ""}`} type="button" key={service.id} onClick={() => setActiveService(service.id)}>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-[#2c2468] shadow-sm">
                  <ServiceIcon className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <span className="block font-extrabold">{service.title}</span>
                  <span className="mt-1 block text-sm opacity-75">{service.short}</span>
                </span>
              </button>
            );
          })}
        </div>

        <article className="service-feature overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="grid min-h-[520px] lg:grid-cols-[0.98fr_1.02fr]">
            <div className="relative min-h-80">
              <img className="absolute inset-0 h-full w-full object-cover" src={selectedService.image} alt="" onError={(event) => event.currentTarget.remove()} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111132]/70 to-transparent" />
              <span className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-xl bg-[#c4b61d] text-[#111132]">
                <Icon className="h-7 w-7" />
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-9">
              <p className="text-xs font-extrabold uppercase tracking-wide text-[#c4b61d]">Waterhouse service</p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#111132]">{selectedService.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{selectedService.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {selectedService.details.map((detail) => (
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm font-bold text-slate-700" key={detail}>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2c2468]" />
                    {detail}
                  </div>
                ))}
              </div>
              <Link className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-[#2c2468] px-5 py-3 text-sm font-extrabold text-white" to="/contact">
                Ask about {selectedService.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

