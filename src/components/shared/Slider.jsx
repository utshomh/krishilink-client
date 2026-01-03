import SlickSlider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <HiChevronLeft className="text-2xl lg:text-4xl" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <HiChevronRight className="text-2xl lg:text-4xl" />
  </button>
);

const Slider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // Custom Dot Styling
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full">
        <ul className="flex justify-center gap-2 m-0"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/40 rounded-full hover:bg-white transition-all active-dot:bg-primary"></div>
    ),
  };

  return (
    <div className="slider-container relative group overflow-hidden rounded-3xl">
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  );
};

export default Slider;
