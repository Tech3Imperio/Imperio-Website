import React, { useState } from "react";
import { BlogCardProps } from "../../types";

export const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  className,
  onClick,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={
        `relative max-w-[350px] ${
          hover ? "h-[350px]" : "h-[380px]"
        } max-h-[380px] rounded-4xl shadow-lg flex flex-col overflow-hidden transition-all duration-500 ease-in-out ` +
        className
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div
        className={`${
          hover ? "h-[210px]" : "h-[280px]"
        } max-h-[280px] rounded-4xl overflow-hidden transition-all duration-1000 ease-in-out`}
      >
        <img
          className="relative -top-[15%] left-0 object-contain object-center"
          src={blog.imgSrc}
          alt={blog.alt}
        />
      </div>
      <div className="">
        <div className="px-6 py-4 pb-2">
          <div className="font-normal text-[--third] text-xl mb-2">
            {blog.header}
          </div>

          <p
            className={`text-gray-500 text-base w-3/5 transition-all duration-700 ease-in-out ${
              hover ? "opacity-100 h-max" : "opacity-0 h-0"
            }`}
          >
            {blog.description}
          </p>
        </div>
        <div className="px-6 pb-2 flex justify-between h-max">
          <div>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full px-3 py-1 text-xs font-normal text-gray-500 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div>
            <span className="inline-block bg-gray-500 italic rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
              {blog.socialMedia}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
