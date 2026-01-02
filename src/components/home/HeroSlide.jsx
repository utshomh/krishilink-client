const HeroSlide = ({ slide }) => {
  return (
    <div className="relative aspect-square md:aspect-2/1 w-full rounded-xl overflow-hidden group">
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 h-full max-w-2xl mx-auto text-center">
        <div className="space-y-2">
          <p className="text-sm md:text-base text-white/90 font-semibold tracking-wide">
            {slide.subtitle}
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white drop-shadow">
            {slide.title}
          </h1>

          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            {slide.description}
          </p>
        </div>

        <button className="btn btn-xl btn-wide btn-primary shadow-lg">
          {slide.ctaText}
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
