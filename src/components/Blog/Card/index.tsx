import React, { useState } from "react";
import { BlogCardProps } from "../../../types";

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
        } max-h-[380px] rounded-none shadow-lg flex flex-col overflow-hidden transition-700  ` +
        className
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div
        className={`${
          hover ? "h-[210px]" : "h-[280px]"
        } max-h-[280px] rounded-none overflow-hidden transition-700`}
      >
        <img
          className="relative top-0 left-0 object-contain object-center"
          src={blog.img}
          alt={blog.alt}
          title={blog.alt}
        />
      </div>
      <div>
        <div className="px-6 py-4 pb-2">
          <div className="font-normal text-[--third] text-xl mb-2">
            {blog.header.length > 25
              ? blog.header.slice(0, 25) + "..."
              : blog.header}
          </div>

          <p
            className={`text-gray-500 text-base w-full transition-700 ${
              hover ? "opacity-100 h-max" : "opacity-0 h-0"
            }`}
          >
            {blog.description}
          </p>
        </div>
        <div className="px-6 pb-2 flex justify-between h-max ">
          <div>
            {Array.isArray(blog.tags)
              ? blog.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-none px-3 py-1 text-xs font-normal text-gray-500 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))
              : typeof blog.tags === "string"
              ? blog.tags
                  .split(",")
                  .slice(0, 2)
                  .map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-none px-3 py-1 text-xs font-normal text-gray-500 mr-2 mb-2"
                    >
                      #{tag.trim()}
                    </span>
                  ))
              : null}
          </div>

          <div>
            <span className="inline-block bg-gray-500 italic rounded-none px-3 py-1 text-sm font-semibold text-white mb-2">
              {blog.socialMedia}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
