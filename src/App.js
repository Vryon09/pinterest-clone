import { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import Create from "./Create";

export const posts = [
  {
    id: 1,
    image: "image-1.jpg",
  },
  {
    id: 2,
    image: "image-2.jpg",
  },
  {
    id: 3,
    image: "image-3.jpg",
  },
  {
    id: 4,
    image: "image-4.jpg",
  },
  {
    id: 5,
    image: "image-5.jpg",
  },
  {
    id: 6,
    image: "image-6.jpg",
  },
  {
    id: 7,
    image: "image-7.jpg",
  },
  {
    id: 8,
    image: "image-8.jpg",
  },
  {
    id: 9,
    image: "image-9.jpg",
  },
  {
    id: 10,
    image: "image-10.jpg",
  },
  {
    id: 11,
    image: "image-11.jpg",
  },
  {
    id: 12,
    image: "image-12.jpg",
  },
  {
    id: 13,
    image: "image-13.jpg",
  },
  {
    id: 14,
    image: "image-14.jpg",
  },
  {
    id: 15,
    image: "image-15.jpg",
  },
  {
    id: 16,
    image: "image-16.jpg",
  },
  {
    id: 17,
    image: "image-17.jpg",
  },
  {
    id: 18,
    image: "image-18.jpg",
  },
  {
    id: 19,
    image: "image-19.jpg",
  },
  {
    id: 20,
    image: "image-20.jpg",
  },
  {
    id: 21,
    image: "image-21.jpg",
  },
  {
    id: 22,
    image: "image-22.jpg",
  },
  {
    id: 23,
    image: "image-23.jpg",
  },
  {
    id: 24,
    image: "image-24.jpg",
  },
  {
    id: 25,
    image: "image-25.jpg",
  },
  {
    id: 26,
    image: "image-26.jpg",
  },
  {
    id: 27,
    image: "image-27.jpg",
  },
  {
    id: 28,
    image: "image-28.jpg",
  },
  {
    id: 29,
    image: "image-29.jpg",
  },
  {
    id: 30,
    image: "image-30.jpg",
  },
];

function App() {
  const [isActive, setIsActive] = useState("home");

  return (
    <>
      <Nav isActive={isActive} setIsActive={setIsActive} />
      <Content isActive={isActive} />
      <Create isActive={isActive} />
    </>
  );
}

export default App;
