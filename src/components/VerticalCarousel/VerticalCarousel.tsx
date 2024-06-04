import React from "react";
import Slider from "react-slick";

interface VerticalCarouselProps {
  items: React.ReactNode[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="h-[300px]">
      {items.map((item, index) => (
        <div key={index} className="h-full flex items-center justify-center">
          {item}
        </div>
      ))}
    </Slider>
  );
};

export default VerticalCarousel;
