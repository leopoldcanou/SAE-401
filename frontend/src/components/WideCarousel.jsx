import { useRef } from "react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import SlideButton from "./SlideButton";
import { useEffect, useState } from "react";

export default function WideCarousel() {
  const containerRef = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/featured");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Assuming the data.movies directly contains the array you provided
        setMovies(data); // Adjust this line based on the actual response structure
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
    <div className="relative pb-6 bg-primary-background">
      <div className="flex flex-col px-5 pb-6">
        <h3 className="text-xl font-bold text-center font-roboto text-primary-foreground md:text-3xl lg:text-4xl">
          Choose From popular titles
        </h3>
        <p className="text-xs text-center font-roboto text-primary-foreground md:text-lg lg:text-xl">
          Movies or series? Don&apos;t worry, we have something for everyone!
        </p>
      </div>
      <div className="relative">
        <div className="relative">
          <ScrollContainer
            className="flex flex-row gap-2 px-4 overflow-x-auto scroll-container cursor-grab flex-nowrap active:cursor-grabbing md:gap-6"
            ref={containerRef}
          >
            {movies.map(({movie}, index) => ( // Adjusted to destructure the movie object
              <Card
                size={"large"}
                key={index}
                img={movie.wideimg}
                name={movie.name}
                href={`/movie/${movie.name.replace(/\s+/g, "-").toLowerCase()}`}
                />
                ))}
          </ScrollContainer>
        </div>
        <SlideButton direction="left" onClick={handleScrollLeft} />
        <SlideButton direction="right" onClick={handleScrollRight} />
      </div>
    </div>
  );
}
