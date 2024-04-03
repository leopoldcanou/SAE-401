import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesCategoryPage({ category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(category);
      try {
        const response = await fetch(`http://localhost:8080/api/category/${category.category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.movies);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]); // <-- Add category here to prevent infinite re-fetching

  return (
    <div className="p-4 mt-16 text-white bg-black">
      <h2 className="mb-4 text-2xl">{category.category} Movies</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie, index) => (
          <div key={index} className="rounded-md ">
            <Link to={`/movie/${movie.name.replace(/\s+/g, "-").toLowerCase()}`}>
            <img
              src={movie.img}
              alt={movie.name}
              className="w-full h-auto rounded-md"
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
