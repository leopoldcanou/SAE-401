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


export default async function getUser() {
    let data = await fetch('http://localhost:8080/user', {
        method: 'GET', // Méthode de la requête
        credentials: 'include', // Inclure les cookies
        mode: 'cors', // Mode de requête
    });
    let answer = await data.json();
    return answer;
}