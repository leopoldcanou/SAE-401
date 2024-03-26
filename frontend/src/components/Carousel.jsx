import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import SlideButton from "./SlideButton";

export default function Carousel({ name, category }) {
  const containerRef = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/category/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleScrollLeft = () => {
    const container = containerRef.current.container.current;
    container.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    const container = containerRef.current.container.current;
    container.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between px-4 pt-6 pb-2">
        <h3 className="text-xl font-bold font-roboto text-primary-white">
          {name}
        </h3>
        <div className="flex flex-row items-center">
          <a className="flex flex-row" href={category}>
            <p className="text-sm font-roboto text-primary-white">Show all</p>
            <svg
              className="w-6 h-6 fill-primary-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m10 6-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="relative bg-primary-background">
        <ScrollContainer
          className="flex gap-2 px-4 overflow-x-auto scroll-container cursor-grab active:cursor-grabbing flex-nowrap md:gap-6"
          ref={containerRef}
        >
          {movies.map((movie, index) => (
            <Card
              key={index}
              img={movie.img}
              name={movie.name}
              // href equal movie name without spaces
                href={`/movie/${movie.name.replace(/\s+/g, "-").toLowerCase()}`}
                />
                ))}
              </ScrollContainer>
              <SlideButton direction="left" onClick={handleScrollLeft} />
              <SlideButton direction="right" onClick={handleScrollRight} />
            </div>
          </>
        );
      }
