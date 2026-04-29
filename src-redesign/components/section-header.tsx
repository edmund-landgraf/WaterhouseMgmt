export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs font-extrabold uppercase tracking-wide text-[#c4b61d]">{eyebrow}</span>
      <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-normal text-[#111132] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

