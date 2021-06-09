import React from "react";
import BlogCard from "./BlogCard";
import ServiceImg from "../../image/blog/Dom.png";
import FoodShop from "../../image/blog/Bind.png";
import RaideSharing from "../../image/blog/Call.png";
import falsy from "../../image/blog/falsy.png";
// import Fade from "react-reveal/Fade";

const Blog = () => {
  const myProject = [
    {
      name: "Today I Will talk about javascript basic",
      image: ServiceImg,
      details:
        "If method or function is called, then that method or function will represent the object to the right of the place where the call will be made.",
      liveLink:
        "https://shomanmiah28.medium.com/today-i-will-talk-about-javascript-basic-b19018db8500",
    },
    {
      name: "Today I will now talk about React",
      image: FoodShop,
      details:
        "React is a JavaScript library. It lets you compose complex UIs from small and isolated. It is used simple developing part. It is to more work Front-End in less time.",
      liveLink: "https://shomanmiah28.medium.com/react-js-8c32ff4dd8f7",
    },
    {
      name: "JavaScript Basic Concept",
      image: RaideSharing,
      details:
        "JavaScript is a programming language. But it is not anyone another language. It is a scripting language. None of this legal input and output. Designed as a scripting language to run in a browser.",
      liveLink:
        "https://shomanmiah28.medium.com/javascript-basic-concept-3a9d96e0a509",
    },
    {
      name: "Javascript ES6",
      image: falsy,
      details:
        "ES6 or ECMAScript is a Scripting language. ECMAScript is used client scripting language and runs the server site uses node.js.",
      liveLink: "https://shomanmiah28.medium.com/javascript-es6-93087e44c0df",
    },
  ];
  return (
    <div className="homePage pt-5 pb-5">
      {/* <Fade left> */}
        <h1 className="mb-5 pl-5 pt-5">My Blog</h1>
      {/* </Fade> */}

      <div className="container">
        <div className="mt-5 pt-5 mb-5">
          <div className="w-74 row">
            {myProject.map((p) => (
              <BlogCard projcet={p}></BlogCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
