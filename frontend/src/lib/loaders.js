export async function fetchCategory(name) {
    let answer = await fetch(`http://localhost:8080/api/category/${name}`);
    let data = await answer.json();
    return data;
}

export async function fetchMovieTitle(name) {
    let answer = await fetch(`http://localhost:8080/api/movie/${name}`);
    let data = await answer.json();
    return data;
}

export async function fetchFeatured() {
    let answer = await fetch(`http://localhost:8080/api/featured`);
    let data = await answer.json();
    return data;
}

export async function searchMovieByName(name) {
    let answer = await fetch(`http://localhost:8080/api/search/${name}`);
    let data = await answer.json();
    console.log(data);
    return data;
    }

