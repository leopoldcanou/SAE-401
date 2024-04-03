import Trailer from "../components/Trailer";
import { defer, useLoaderData } from "react-router-dom";
import { fetchMovieTitle } from "../lib/loaders";
import { unformatFileNameFromUrl } from "../lib/utils";

export async function movietrailerLoader({ params }) {
  const formattedName = params.name;
  let data = {
    movie: await fetchMovieTitle(unformatFileNameFromUrl(formattedName)), // Utilisez le nom non formaté pour fetch le titre
  };
  return defer(data);
}

export default function MovieTrailer() {
  let data = useLoaderData();
  return (
    <>
      <Trailer data={data} />
    </>
  );
}
