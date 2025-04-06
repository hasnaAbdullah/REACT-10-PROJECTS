import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
function Blogs({ bookmarkHandler, readHandler }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="grid grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <Blog
          readHandler={readHandler}
          bookmarkHandler={bookmarkHandler}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
}

export default Blogs;
