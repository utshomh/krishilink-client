const logos = [
  "AgroCorp",
  "FarmTech",
  "EcoGrow",
  "RuralBank",
  "GreenDistro",
  "HarvestLink",
];

const Partners = () => {
  return (
    <section className="py-8 space-y-2 rounded-2xl border border-base-300">
      <div className="space-y-2">
        <p className="text-center text-xs md:text-sm font-bold text-primary uppercase tracking-[0.5em] opacity-80">
          Our Strategic Partners
        </p>
        <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* The Marquee Track */}
        <div className="animate-marquee flex items-center py-3">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center">
              <div className="mx-6 px-8 py-4 bg-base-100 rounded-2xl shadow-sm border border-base-300 hover:border-primary/50 hover:shadow-md hover:-rotate-2 transition-all duration-300 cursor-pointer group/card">
                <span className="text-xl md:text-2xl font-black bg-linear-to-r from-base-content/60 to-base-content/40 bg-clip-text text-transparent group-hover/card:from-primary group-hover/card:to-primary/70 transition-all">
                  {logo}
                </span>
              </div>
              {/* Decorative separator */}
              <div className="w-1.5 h-1.5 rounded-full bg-base-300 group-hover:bg-primary/30 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Improved Glass Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-52 bg-linear-to-r from-base-100/40 to-transparent z-10 rounded"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-52 bg-linear-to-l from-base-100/40 to-transparent z-10 rounded"></div>
      </div>
    </section>
  );
};

export default Partners;
