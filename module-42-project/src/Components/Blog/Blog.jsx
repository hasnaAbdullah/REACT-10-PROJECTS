import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { IoReader } from "react-icons/io5";

function Blog({ blog, bookmarkHandler, readHandler }) {
  const { author, author_img, cover, title, hashtags } = blog;
  //   console.log(blog);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={cover} />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title font-bold ">{title}</h2>

        <div className="badge bg-stone-200 rounded-sm px-0 pr-2  space-x-1">
          {hashtags.map((hash) => (
            <span key={Math.random()}>#{hash}</span>
          ))}
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img className="w-10" src={author_img} alt="" />
            <h5 className="font-semibold">{author}</h5>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => readHandler(blog.id)} title="mark as read">
              <IoReader size={23} className="cursor-pointer" />
            </button>
            <button title="bookmark" onClick={() => bookmarkHandler(blog)}>
              <FaBookmark size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
