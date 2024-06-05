import React from "react";
import Slider from "react-slick";
import { VerticalCarouselProps } from "../../types";

export const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  children,
  className = "",
  direction = false,
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: direction,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};
