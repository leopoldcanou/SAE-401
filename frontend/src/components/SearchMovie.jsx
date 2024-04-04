import Card from "./Card";

export default function SearchMovie({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center pt-6 mb-96">
        <p className="text-lg font-bold font-roboto text-primary-foreground">
          No films found.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center w-full mb-48">
      <div className="flex flex-col gap-4 mx-4 mt-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 rounded-md bg-primary-lightgray"
          >
            <Card
              className="w-32"
              img={movie.img}
              name={movie.name}
              href={`/movie/${movie.name.replace(/\s+/g, "-").toLowerCase()}`}
            />
            <div className="flex flex-col mt-4">
              <h3 className="text-lg font-bold font-roboto text-primary-foreground">
                {movie.name}
              </h3>
              <div className="flex flex-row">
                <p className="text-base font-roboto text-primary-foreground">
                  {movie.year}
                </p>
                <span className="px-1 text-base text-primary-foreground">
                  •
                </span>
                <p className="text-base font-roboto text-primary-foreground">
                  {movie.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
