import UserProfile from "../components/UserProfile";
import getUser, { getWatchlist } from '../lib/loaders';
import { useLoaderData } from 'react-router-dom';


export async function profileLoader() {
    const user = await getUser(); // Fetches the logged-in user's information
    const watchlist = await getWatchlist(); // Optionally, fetch the user's watchlist
    console.log(user);
    // Return an object containing both user info and watchlist
    // This object will be accessible in your component via useLoaderData
    return {
      user,
      watchlist,
    };
  }
  

export default function Profile() {
    const { user } = useLoaderData();
    const { watchlist } = useLoaderData();

return (
    <div>
        <UserProfile user={user} watchlist={watchlist}/>
    </div>
);
}