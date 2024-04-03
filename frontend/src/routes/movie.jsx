import { defer, useLoaderData } from "react-router-dom";

import { fetchMovieTitle } from "../lib/loaders";
import { unformatFileNameFromUrl } from "../lib/utils";
import MoviePage from "../components/MoviePage";
import Footer from "../components/Footer";

export async function loader({ params }) {
  const formattedName = params.name;
  let data = {
    movie: await fetchMovieTitle(unformatFileNameFromUrl(formattedName)), // Utilisez le nom non formaté pour fetch le titre
  };
  return defer(data);
}

export default function Movie() {
  let data = useLoaderData();

  return (
    <>
      <MoviePage data={data} />
      <Footer />
    </>
  );
}
