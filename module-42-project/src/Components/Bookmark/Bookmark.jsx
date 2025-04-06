import React from "react";

function Bookmark({ blog }) {
  const { author_img, author, title } = blog;
  return (
    <div className="py-3 my-4 bg-sky-100 rounded-md">
      <p className=" font-medium mb-3">{title}</p>
      <div className="flex items-center gap-2">
        <img className="w-10 rounded-full" src={author_img} alt="" />
        <h5 className="font-semibold">{author}</h5>
      </div>
    </div>
  );
}

export default Bookmark;
