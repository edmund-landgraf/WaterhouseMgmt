import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { services } from "../content";
import { SectionHeader } from "./section-header";

export function Contact() {
  const [inquiryType, setInquiryType] = useState(services[0].title);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-band px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_460px]">
        <div>
          <SectionHeader eyebrow="Contact" title="Contact Waterhouse" description="Reach the Waterhouse office for management questions, resident support, home sales, paving, brokerage, or property services." />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <ContactMethod icon={Phone} label="(916) 772-4918" href="tel:+19167724918" />
            <ContactMethod icon={Mail} label="info@waterhousemgmt.com" href="mailto:info@waterhousemgmt.com" />
            <ContactMethod icon={MapPin} label="Roseville, CA" />
          </div>
        </div>

        <form className="rounded-2xl border border-black/10 bg-white p-5 shadow-2xl" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-extrabold text-[#111132]">
            What can we help with?
            <select className="h-12 rounded-md border border-black/10 bg-slate-50 px-3 text-sm font-semibold text-slate-700" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>
              {services.map((service) => (
                <option key={service.id}>{service.title}</option>
              ))}
              <option>Resident or community support</option>
              <option>General inquiry</option>
            </select>
          </label>

          <label className="mt-4 grid gap-2 text-sm font-extrabold text-[#111132]">
            Email
            <input className="h-12 rounded-md border border-black/10 bg-slate-50 px-3 text-sm" placeholder="you@example.com" type="email" />
          </label>

          <label className="mt-4 grid gap-2 text-sm font-extrabold text-[#111132]">
            Message
            <textarea className="min-h-32 rounded-md border border-black/10 bg-slate-50 p-3 text-sm" placeholder="How can Waterhouse help?" />
          </label>

          <button className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#2c2468] text-sm font-extrabold text-white" type="submit">
            Prepare inquiry
            <ArrowRight className="h-4 w-4" />
          </button>

          {sent && <p className="mt-4 rounded-md bg-[#f4f1bd] p-3 text-sm font-bold text-[#2c2468]">For {inquiryType} inquiries, contact the Waterhouse office at (916) 772-4918 or info@waterhousemgmt.com.</p>}
        </form>
      </div>
    </section>
  );
}

function ContactMethod({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href?: string }) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f4f1bd] text-[#2c2468]">
        <Icon className="h-5 w-5" />
      </span>
      <span className="break-words text-sm font-extrabold text-[#111132]">{label}</span>
    </>
  );

  if (href) {
    return (
      <a className="contact-method" href={href}>
        {content}
      </a>
    );
  }

  return <div className="contact-method">{content}</div>;
}

