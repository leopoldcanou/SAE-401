import Footer from '../components/Footer';
import MoviesCategoryPage from '../components/MoviesCategoryPage';
import { defer, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const category = params.category;
    let data = {
        category: category,
    };
    return defer(data);
    }


export default function MoviesCategory() {
    let data = useLoaderData();
    return (
        <>
        <MoviesCategoryPage category={data}/>
        <Footer/>
        </>
    );
    }