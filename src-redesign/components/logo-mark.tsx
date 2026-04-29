export function LogoMark() {
  return (
    <div className="flex items-center gap-4">
      <svg className="h-16 w-40 shrink-0" viewBox="0 0 248 98" role="img" aria-label="Waterhouse logo mark">
        <path className="logo-gold" d="M21 74C2 45 21 13 54 11c22-1 35 13 40 35 8-21 23-35 45-36 20-1 30 10 29 22-2 20-29 32-63 33" fill="none" strokeWidth="7" strokeLinecap="round" />
        <path className="logo-gold" d="M54 29l15 47 35-45-6 45 45-52" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="hidden min-w-0 sm:block">
        <div className="text-xl font-semibold uppercase leading-none tracking-normal text-[#2c2468] md:text-2xl">Waterhouse Management Corporation</div>
        <div className="mt-1 border-t border-[#2c2468]/45 pt-1 text-sm font-semibold tracking-wide text-[#2c2468]">Manufactured Home Community Management &amp; Investments</div>
      </div>
    </div>
  );
}

