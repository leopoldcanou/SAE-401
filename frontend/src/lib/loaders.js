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


export async function getWatchlist() {
    let data = await fetch('http://localhost:8080/api/watchlist', {
        method: 'GET', // Méthode de la requête
        credentials: 'include', // Inclure les cookies
        mode: 'cors', // Mode de requête
    });
    let answer = await data.json();
    console.log(answer);
    return answer;
}


export async function addWatchlist(id) {
  let data = await fetch(`http://localhost:8080/api/watchlist/add/${id}`, {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}

export async function removeWatchlist(id) {
  let data = await fetch(`http://localhost:8080/api/watchlist/remove/${id}`, {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}

export async function clearWatchlist() {
  let data = await fetch('http://localhost:8080/api/watchlist/clear', {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}

export async function changeUsername(username) {
  let data = await fetch(`http://localhost:8080/api/user/change-username/${username}`, {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}

export async function changeFirstname(firstname) {
  let data = await fetch(`http://localhost:8080/api/user/change-firstname/${firstname}`, {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}

export async function changeLastname(lastname) {
  let data = await fetch(`http://localhost:8080/api/user/change-lastname/${lastname}`, {
    method: 'GET', // Méthode de la requête
    credentials: 'include', // Inclure les cookies
    mode: 'cors', // Mode de requête
  });
  let answer = await data.json();
  console.log(answer);
  return answer;
}