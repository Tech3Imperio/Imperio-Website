import React, { useEffect, useState } from "react";
import { TestimonialsProps } from "../../../types";
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
    stars.push(<FullStar className="text-[--secound]" key={`full-${i}`} />);
  }
  for (let i = 0; i < half; i++) {
    stars.push(<HalfStar className="text-[--secound]" key={`half-${i}`} />);
  }
  while (stars.length < 5) {
    stars.push(
      <EmptyStar className="text-white" key={`empty-${stars.length}`} />
    );
  }
  return stars;
};

const calculateStars = (rating: number) => {
  if (Number.isInteger(rating)) {
    return countStars(rating);
  }
  return countStars(Math.floor(rating), 1);
};

const calculateDistance = () => {
  if (window.innerWidth < 400) return [0, 0];
  if (window.innerWidth < 600) return [90, 30];
  if (window.innerWidth < 800) return [120, 60];
  if (window.innerWidth < 1000) return [150, 90];
  return [180, 120];
};

export const Testimonials: React.FC<TestimonialsProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="mx-4 tablet:mx-12 laptop:mx-24 my-10 phone:my-36 px-3 phone:px-8 tablet:px-14 laptop:px-20 pt-9 phone:pt-14 tablet:pt-16 laptop:pt-24 pb-[25rem] h-80 phone:h-[28rem] tablet:h-[34rem] laptop:h-[40rem] flex flex-col justify-between rounded-4xl bg-[--black] 2xl:overflow-hidden">
      <h1 className="Raleway text-[1.75rem] phone:text-3xl tablet:text-4xl laptop:text-5xl text-white">
        Client testimonials
      </h1>
      <div className="relative flex justify-center w-full">
        {cards.map((card, index) => {
          const isCurrent = index === currentCard;
          const isPrev =
            index === (currentCard - 1 + cards.length) % cards.length;
          const isNext = index === (currentCard + 1) % cards.length;
          const stars = calculateStars(card.stars);
          const distance = calculateDistance();

          return (
            <div
              key={card.id}
              className={classNames(
                "text-white p-9 w-[19rem] h-[9.5rem] phone:w-[26rem] phone:h-[13rem] tablet:w-[33rem] tablet:h-[16.5rem] laptop:w-[40rem] laptop:h-80 flex justify-center items-center gap-4 phone:gap-5 tablet:gap-7 laptop:gap-9 rounded-4xl transition-all duration-500 ease-in-out",
                {
                  "absolute bg-[--black] z-20 transform scale-110 opacity-100 -translate-x-1/2 translate-y-16 phone:translate-y-28 tablet:translate-y-16 laptop:translate-y-0":
                    isCurrent,
                  "absolute bg-[--grey] z-10 opacity-70 transform scale-95 translate-y-36 phone:translate-y-52 tablet:translate-y-44 laptop:translate-y-32 -translate-x-[98%]":
                    isPrev,
                  "absolute bg-[--grey] z-10 opacity-70 transform scale-95 translate-y-36 phone:translate-y-52 tablet:translate-y-44 laptop:translate-y-32 translate-x-[8%]":
                    isNext,
                  hidden: !isCurrent && !isPrev && !isNext,
                }
              )}
              style={{
                left: isPrev
                  ? `calc(50% - ${distance[0]}px)`
                  : isNext
                  ? `calc(50% + ${distance[1]}px)`
                  : "50%",
              }}
            >
              <img
                src={card.img}
                alt={card.alt}
                title={card.alt}
                className="rounded-full overflow-hidden w-12 h-12 phone:w-16 phone:h-16 tablet:w-20 tablet:h-20 laptop:w-28 laptop:h-28"
              />
              <div className="flex flex-col gap-[0.2rem] phone:gap-1 tablet:gap-3 laptop:gap-5 max-w-[75%]">
                <div className="flex flex-col gap-2">
                  <h1 className="Raleway text-sm phone:text-base tablet:text-xl laptop:text-3xl">
                    {card.name}
                  </h1>
                  <div className="text-[0.5rem] phone:text-sm tablet:text-base laptop:text-lg">
                    {card.add}
                  </div>
                  <div className="flex gap-6 text-sm tablet:text-lg laptop:text-2xl">
                    {stars}
                  </div>
                </div>
                <div className="flex justify-between text-[0.5rem] phone:text-xs tablet:text-sm laptop:text-base">
                  <div className="flex items-start">
                    <FaQuoteLeft />
                  </div>
                  <div className="w-5/6 items-center">{card.quote}</div>
                  <div className="flex items-end mt-auto">
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
