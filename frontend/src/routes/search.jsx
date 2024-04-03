import { useState } from 'react';
import SearchBar from "../components/SearchBar"; // Assurez-vous que le chemin est correct
import {  searchMovieByName } from '../lib/loaders'; // Assurez-vous que le chemin est correct
import SearchMovie from '../components/SearchMovie'; // Assurez-vous que le chemin est correct
import Footer from "../components/Footer";

export default function Search() {
     // Appelle la fonction `fetchUser` pour récupérer les informations de l'utilisateur
    const [movies, setMovies] = useState([]); // État pour stocker les films trouvés

    const handleSearch = async (searchTerm) => {
        if (searchTerm) {
            // Appelle la fonction `searchMovieByName` et met à jour l'état `movies` avec les résultats
            const results = await searchMovieByName(searchTerm);
            setMovies(results); // Met à jour l'état avec les films trouvés
        } else {
            // Si la barre de recherche est vide, réinitialise l'état `movies` à un tableau vide
            setMovies([]);
        }
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SearchMovie movies={movies} />
            <Footer />
        </div>
    );
}
