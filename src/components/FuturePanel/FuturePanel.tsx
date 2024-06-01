import React from "react";
import { Description } from "../Description/Description";
import { FuturePanelProps } from "../../types";

export const FuturePanel: React.FC<FuturePanelProps> = ({
  scroller,
  mainHeader = "",
  yellowHeader = "",
  text = "",
}) => {
  return (
    <section
      className="max-h-[100vh] bg-[--black] overflow-y-scroll"
      onScroll={() => console.log("hello")}
    >
      <Description
        yellowText={yellowHeader}
        mainHeader={mainHeader}
        text={text}
        black
      />
      {scroller.map((value, index) => (
        <div className="h-96 w-auto flex flex-col mt-32" key={index}>
          <div className="flex justify-evenly">
            <img
              src={value.img}
              alt={value.alt}
              className="h-96 object-cover"
            />
            <header
              className="flex text-white items-center gap-4 max-w-[45rem]"
              key={value.alt}
            >
              <div className="text-[100px]">{index + 1}.</div>
              <div className="flex flex-col gap-4">
                <div className=" text-5xl">{value.header}</div>
                <p className=" text-2xl text-[--grey]">{value.subheader}</p>
              </div>
            </header>
          </div>
        </div>
      ))}
    </section>
  );
};
