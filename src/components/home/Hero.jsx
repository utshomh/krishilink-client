import Slider from "../shared/Slider";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    title: "Trade Smarter, Not Harder",
    subtitle: "A modern marketplace for agriculture.",
    description:
      "Manage prices, negotiate deals, and track transactions in one simple platform built for agro-trade efficiency.",
    ctaText: "Explore Crops",
    ctaAction: "/crops",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "From Farm to Market, Seamlessly",
    subtitle: "Connecting fields with opportunities.",
    description:
      "KrishiLink bridges farmers and buyers with transparency, trust, and technology—growing profits for everyone.",
    ctaText: "Get Started",
    ctaAction: "/register",
    image:
      "https://images.unsplash.com/photo-1677125062085-6a831b38efc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  return (
    <Slider>
      {slides.map((slide) => (
        <HeroSlide key={slide.id} slide={slide} />
      ))}
    </Slider>
  );
};

export default Hero;
