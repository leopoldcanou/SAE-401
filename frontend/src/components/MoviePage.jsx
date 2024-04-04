import { addWatchlist } from "../lib/loaders";
import Button from "./Button";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

export default function Movie({ data }) {
  return (
    <>
      <div className="text-white bg-primary-background">
        <div className="relative h-[30rem] overflow-hidden pt-10">
          <div className="relative inset-0">
            <img
              className="object-cover w-full h-96"
              src={data.movie.wideimg}
              alt="Movie Wide Image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-background via-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
          <Link onClick={() => addWatchlist(data.movie.id)} to={`/movie/trailer/${data.movie.name.replace(/\s+/g, "-").toLowerCase()}`}>
          <button className="flex items-center justify-center w-20 h-20 bg-opacity-75 rounded-full backdrop-blur-lg">
              <svg
                className="w-12 h-12 text-white fill-primary-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6.5 20.7-1.5-.8v-15.8l1.5-.9 13 7.9v1.7zm0.5-14.8v12.2l10.1-6.1z"></path>
              </svg>
            </button>
            </Link>
          </div>
        </div>
        <div className="px-0 lg:px-64">
          <div className="relative flex flex-col items-center justify-between px-4 mt-4 bottom-48">
            <div className="flex flex-col items-start w-full gap-3 md:flex-row">
              <div className="flex flex-col gap-3 md:flex-row md:items-end">
                <div className="flex flex-row items-end gap-3">
                  <img
                    className="w-[10rem] rounded-md"
                    src={data.movie.img}
                    alt=""
                  />
                  <h2 className="text-xl font-bold md:hidden">
                    {data.movie.name}
                  </h2>
                </div>
                <div className="flex flex-row items-end gap-3 md:flex-col md:items-start">
                  <h2 className="hidden text-3xl font-bold md:block">
                    {data.movie.name}
                  </h2>
                  <div className="flex flex-col">
                    <div className="flex flex-row align-middle">
                      <p className="text-[13px] font-bold text-primary-white">
                        {data.movie.year}{" "}
                        <span className="text-primary-gray">•</span>{" "}
                        {data.movie.duration}{" "}
                        <span className="text-primary-gray">•</span>{" "}
                        {data.movie.category.map((c) => c.name).join(", ")}
                      </p>
                      <span className="ml-2 inline-flex h-6 items-center justify-center rounded-md bg-[#E6B91E] px-2 text-xs text-primary-background">
                        {data.movie.rating}
                      </span>
                      <span className="inline-flex items-center justify-center h-6 px-2 ml-2 text-xs text-white border border-white rounded-md">
                        {data.movie.age}
                      </span>
                    </div>
                    <Link onClick={() => addWatchlist(data.movie.id)} to={`/movie/trailer/${data.movie.name.replace(/\s+/g, "-").toLowerCase()}`}>
                    <Button
                      rounded="full"
                      size="small"
                      className="hidden h-[2.75rem] w-full md:block md:w-32"
                    >
                      Watch
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link onClick={() => addWatchlist(data.movie.id)} className="w-full" to={`/movie/trailer/${data.movie.name.replace(/\s+/g, "-").toLowerCase()}`}>
            <Button
              rounded="full"
              size="medium"
              className="h-[2.75rem] w-full md:hidden"
            >
              Watch
            </Button>
            </Link>
          </div>
          <p className="relative px-4 text-primary-gray bottom-40">
            {data.movie.description.replace(/^<div>|<\/div>$/g, "")}
          </p>

          {data.movie.category.map((category) => (
            <div className="relative bottom-32" key={category.name}>
              <Carousel
                name={`In the same genre ${category.name}`}
                category={category.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
