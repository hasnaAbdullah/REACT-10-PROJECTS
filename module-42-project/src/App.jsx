import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navigation/Navbar";
import Bookmark from "./Components/Bookmark/Bookmark";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const bookmarkHandler = (blog) => {
    let isBooked = false;
    bookmarked.forEach((oldBlog) => {
      if (oldBlog.id !== blog.id) {
        isBooked = true;
      }
    });
    console.log(isBooked);
    if (isBooked) {
      setBookmarked([...bookmarked, blog]);
    }
  };

  const readHandler = (id) => {
    const newBookmarked = bookmarked.filter((blog) => id !== blog.id);
    setBookmarked(newBookmarked);
  };
  return (
    <>
      <Navbar />
      <div className="main-container flex justify-between max-w-[1280px] mx-auto">
        <div className="left-content-blog w-[70%]">
          <Blogs readHandler={readHandler} bookmarkHandler={bookmarkHandler} />
        </div>
        <div className="right-content w-[30%] border p-6">
          <h2 className=" font-semibold text-lg">Reading Time: </h2>
          <h2 className=" font-semibold text-lg">
            Bookmarked Count: {bookmarked.length}{" "}
          </h2>
          <div className="pt-8">
            {bookmarked.map((blog) => (
              <Bookmark key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
