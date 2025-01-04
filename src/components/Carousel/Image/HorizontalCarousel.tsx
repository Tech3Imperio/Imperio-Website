import React from "react";
import Slider from "react-slick";
import { CarouselProps } from "../../../types";

const HorizontalCarousel: React.FC<CarouselProps> = ({
  children,
  className = "",
  direction = false,
}) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    rtl: direction,
    vertical: false,
  };

  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};
export default HorizontalCarousel;
