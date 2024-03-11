import Card from "./Card";
import data from "../assets/film-data.json";

export default function Carousel() {
    return (
        <div className="flex gap-4 overflow-x-auto flex-nowrap">
            {data.movies.map((movie, index) => (
                <Card key={index} img={movie.img} name={movie.title} />
            ))}
        </div>
    );
}
