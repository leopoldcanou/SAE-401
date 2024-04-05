import { useState } from "react";
import {
  changeUsername,
  changeFirstname,
  changeLastname,
  clearWatchlist,
  logoutUser,
} from "../lib/loaders";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ user, watchlist }) {
  // États pour les valeurs des inputs
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFocused, setIsFocused] = useState({
    username: false,
    firstName: false,
    lastName: false,
  });

  const handleFocus = (field) => setIsFocused({ ...isFocused, [field]: true });
  const handleBlur = (field, value) =>
    setIsFocused({ ...isFocused, [field]: value !== "" });

  // Fonction pour mettre à jour le username
  const updateUsername = async () => {
    if (username) {
      const response = await changeUsername(username);
      console.log("Réponse de la mise à jour du username: ", response);
      window.location.reload(); // Rafraîchir la page après la mise à jour
    }
  };

  // Fonction pour mettre à jour le firstName
  const updateFirstName = async () => {
    if (firstName) {
      const response = await changeFirstname(firstName);
      console.log("Réponse de la mise à jour du firstName: ", response);
      window.location.reload(); // Rafraîchir la page après la mise à jour
    }
  };

  // Fonction pour mettre à jour le lastName
  const updateLastName = async () => {
    if (lastName) {
      const response = await changeLastname(lastName);
      console.log("Réponse de la mise à jour du lastName: ", response);
      window.location.reload(); // Rafraîchir la page après la mise à jour
    }
  };

  const clearWatchlistUser = async () => {
    const response = await clearWatchlist();
    console.log("Réponse de la suppression de la watchlist: ", response);
    window.location.reload(); // Rafraîchir la page après la suppression
  };



  const navigate = useNavigate(); // Instanciation de useNavigate

  const logoutcurrentUser = async () => {
    try {
      const response = await logoutUser(); // Supposons que cette fonction réalise la déconnexion
      console.log(response); // Affiche la réponse du serveur, facultatif
      navigate('/home'); // Redirection vers /home après la déconnexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  return (
    <div className="mx-4 mt-20">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl text-bold font-roboto text-primary-foreground">
          User Profile
        </h2>
        <button
          onClick={logoutcurrentUser}
          className="px-4 py-2 ml-2 rounded-md bg-primary-yellow text-primary-black"
        >
          Logout
        </button>
      </div>

      {/* Username */}
      <div className="flex flex-col px-2 py-3 my-4 rounded-md bg-primary-lightgray">
        <p className="text-base font-roboto text-primary-foreground">
          Username  : {user.username}
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="relative flex flex-row items-center w-full h-full rounded-lg bg-primary-lightgray">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => handleFocus("username")}
              onBlur={() => handleBlur("username", username)}
              className="w-full h-12 px-4 py-2 duration-150 ease-in-out bg-transparent rounded-md outline-none text-md text-primary-foreground"
            />
            <button
              onClick={updateUsername}
              className="px-4 py-2 ml-2 rounded-md bg-primary-yellow text-primary-black"
            >
              Change
            </button>
          </div>
        </div>
      </div>
      {/* First Name */}
      <div className="flex flex-col px-2 py-3 my-4 rounded-md bg-primary-lightgray">
        <p className="text-base font-roboto text-primary-foreground">
          Prénom  : {user.firstName}
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="relative flex flex-row items-center w-full h-full rounded-lg bg-primary-lightgray">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => handleFocus("firstName")}
              onBlur={() => handleBlur("firstName", firstName)}
              className="w-full h-12 px-4 py-2 duration-150 ease-in-out bg-transparent rounded-md outline-none text-md text-primary-foreground"
            />
            <button
              onClick={updateFirstName}
              className="px-4 py-2 ml-2 rounded-md bg-primary-yellow text-primary-black"
            >
              Change
            </button>
          </div>
        </div>
      </div>
      {/* Last Name */}
      <div className="flex flex-col px-2 py-3 my-4 rounded-md bg-primary-lightgray">
        <p className="text-base font-roboto text-primary-foreground">
          Nom  : {user.lastName}
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="relative flex flex-row items-center w-full h-full rounded-lg bg-primary-lightgray">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => handleFocus("lastName")}
              onBlur={() => handleBlur("lastName", lastName)}
              className="w-full h-12 px-4 py-2 duration-150 ease-in-out bg-transparent rounded-md outline-none text-md text-primary-foreground"
            />
            <button
              onClick={updateLastName}
              className="px-4 py-2 ml-2 rounded-md bg-primary-yellow text-primary-black"
            >
              Change
            </button>
          </div>
        </div>
      </div>
      {/* Section Watchlist */}
      <div className="mt-8">
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-bold font-roboto text-primary-foreground">
            Watchlist
          </h3>
          <button
            onClick={clearWatchlistUser}
            className="px-4 py-2 ml-2 rounded-md bg-primary-yellow text-primary-black"
          >
            Clear
          </button>
        </div>
        <div className="mt-4">
          {watchlist.map(({ movie }) => (
            <div
              key={movie.id}
              className="flex flex-row items-start gap-3 p-4 mb-4 rounded-lg bg-primary-lightgray text-primary-foreground md:flex-row"
            >
              <img
                src={movie.img}
                alt={movie.name}
                className="w-32 h-auto rounded-md md:h-auto md:w-48"
              />
              <div className="mt-4 ml-0 md:ml-4 md:mt-0">
                <h4 className="text-lg font-semibold">
                  {movie.name} ({movie.year})
                </h4>
                <p>Rating: {movie.rating}</p>
                <p>Duration: {movie.duration}</p>
                <p>Age: {movie.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
