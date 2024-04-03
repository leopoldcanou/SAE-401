import Card from "./Card";

export default function SearchMovie({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center pt-6 mb-96">
        <p className="text-lg font-bold font-roboto text-primary-white">
          Aucun film trouvé.
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
            className="flex flex-row gap-4 rounded-md bg-[#1D1D1D]"
          >
            <Card
              className="w-32"
              img={movie.img}
              name={movie.name}
              href={`/movie/${movie.name.replace(/\s+/g, "-").toLowerCase()}`}
            />
            <div className="flex flex-col mt-4">
              <h3 className="text-lg font-bold text-[#E5E5E5] font-roboto">{movie.name}</h3>
              <div className="flex flex-row"><p className="font-roboto text-[#E5E5E5] text-base">{movie.year}</p><span className="text-base px-1 text-[#E5E5E5]">•</span><p className="text-base font-roboto text-[#E5E5E5]">{movie.duration}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
