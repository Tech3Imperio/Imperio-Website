import React, { useEffect, useState } from "react";
import { TestimonialsProps } from "../../types";
import classNames from "classnames";
import {
  IoIosStar as FullStar,
  IoIosStarHalf as HalfStar,
  IoIosStarOutline as EmptyStar,
} from "react-icons/io";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const countStars = (full: number, half: number = 0) => {
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(<FullStar className="text-[--secound]" key={stars.length} />);
  }
  for (let i = 0; i < half; i++) {
    stars.push(<HalfStar className="text-[--secound]" key={stars.length} />);
  }
  while (stars.length < 5) {
    stars.push(<EmptyStar className="text-white" key={stars.length} />);
  }
  return stars;
};

const calculateStars = (rating: number) => {
  if (Number.isInteger(rating)) {
    return countStars(rating);
  }
  return countStars(Math.floor(rating), 1);
};

export const Testimonials: React.FC<TestimonialsProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="p-24 pb-[30rem] h-screen flex flex-col justify-between bg-[--black] overflow-hidden">
      <header className="Raleway text-5xl text-white mb-12">
        Client testimonials
      </header>
      <div className="relative flex justify-center w-full">
        {cards.map((card, index) => {
          const isCurrent = index === currentCard;
          const isPrev =
            index === (currentCard - 1 + cards.length) % cards.length;
          const isNext = index === (currentCard + 1) % cards.length;
          const stars = calculateStars(card.stars);

          return (
            <div
              key={card.id}
              className={classNames(
                "absolute text-white p-9 w-[40rem] h-80 flex items-center gap-9 rounded-4xl transition-all duration-500 ease-in-out",
                {
                  "bg-[--black] z-20 transform scale-110 opacity-100 -translate-x-1/2":
                    isCurrent,
                  "bg-[--grey] z-10 opacity-70 transform scale-95 translate-y-16 -translate-x-1/2":
                    isPrev || isNext,
                  "opacity-0": !isCurrent && !isPrev && !isNext,
                }
              )}
              style={{
                left: isPrev
                  ? "calc(50% - 180px)"
                  : isNext
                  ? "calc(50% + 120px)"
                  : "50%",
              }}
            >
              <img
                src={card.img}
                alt={card.alt}
                className="rounded-4xl overflow-hidden w-28 h-28"
              />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <header className="Raleway text-3xl">{card.name}</header>
                  <div className="text-lg">{card.add}</div>
                  <div className="flex gap-6">{stars}</div>
                </div>
                <div className="flex w-[70%]">
                  <FaQuoteLeft />
                  {card.quote}
                  <FaQuoteRight />
                </div>
                {/* <div className="text-base">{card.content}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
