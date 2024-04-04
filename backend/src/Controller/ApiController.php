<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use App\Repository\FeaturedRepository;
use App\Repository\MovieRepository;
use Symfony\Component\Security\Core\Security;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Watchlist;


class ApiController extends AbstractController
{




    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/api/movie/{name}', name: 'app_api_movie')]
    public function readMovie(Movie $mov, SerializerInterface $serializer): Response
    {
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/category/{name}', name: 'app_api_category')]
    public function readCategory(Category $mov, SerializerInterface $serializer): Response
    {
        $data = $serializer->normalize($mov, null, ['groups' => 'json_category']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/featured', name: 'app_api_featured')]
    public function readFeatured(FeaturedRepository $featuredRepository, SerializerInterface $serializer): Response
    {
        $data = $serializer->normalize($featuredRepository->findAll(), null, ['groups' => 'json_featured']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/search/{name}', name: 'api_search_movies')]
    public function searchMovies(string $name, MovieRepository $movieRepository, SerializerInterface $serializer): Response
    {
        // Utilise la méthode findByNameLike du MovieRepository pour rechercher les films
        $movies = $movieRepository->findByNameLike($name);

        // Utilise le Serializer pour normaliser les données des films
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);

        // Renvoie les données sous forme de réponse JSON
        return new JsonResponse($data);
    }




    #[Route('/user', name: 'app_api_user')]
    public function getConnectedUser(): Response
    {
        // $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        if (!$user instanceof User) {
            return new Response(json_encode(''));
        } else {
            $payload = [
                'email' => $user->getEmail(),
                'roles' => $user->getRoles(),
                'username' => $user->getUsername(),
                'firstName' => $user->getFirstName(),
                'lastName' => $user->getLastName(),
            ];

            return new Response(json_encode($payload));
        }
    }

    #[Route('/api/watchlist', name: 'app_api_watchlist')]
    public function userWatchlist(SerializerInterface $serializer): Response
    {
        $user = $this->getUser();

        // Assurez-vous que $user est bien une instance de votre entité User
        if (!$user instanceof User) {
            return $this->json(['message' => 'User not found'], Response::HTTP_FORBIDDEN);
        }

        $watchlists = $user->getWatchlists();

        // Le groupe de sérialisation 'json_watchlist' doit être défini dans vos entités
        $data = $serializer->serialize($watchlists, 'json', ['groups' => ['json_watchlist']]);

        return JsonResponse::fromJsonString($data);
    }




    #[Route('/api/watchlist/add/{movieId}', name: 'app_api_watchlist_add')]
    public function addMovieToWatchlist(int $movieId, MovieRepository $movieRepository, EntityManagerInterface $entityManager): Response
    {
        // Récupère l'utilisateur actuellement connecté
        $user = $this->getUser();

        // Vérifie si un utilisateur est connecté et si c'est une instance de votre entité User
        if (!$user instanceof User) {
            return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
        }

        $movie = $movieRepository->find($movieId);

        if (!$movie) {
            return $this->json(['message' => 'Movie not found'], Response::HTTP_NOT_FOUND);
        }

        // Vérifie si le film est déjà dans la watchlist de l'utilisateur
        foreach ($user->getWatchlists() as $watchlistItem) {
            if ($watchlistItem->getMovie() === $movie) {
                return $this->json(['message' => 'Movie is already in the watchlist'], Response::HTTP_CONFLICT);
            }
        }

        // Ajoute le film à la watchlist
        $watchlist = new Watchlist();
        $watchlist->setUser($user);
        $watchlist->setMovie($movie);
        $entityManager->persist($watchlist);
        $entityManager->flush();

        return $this->json(['message' => 'Movie added to watchlist successfully']);
    }

    #[Route('/api/watchlist/remove/{movieId}', name: 'app_api_watchlist_remove')]
    public function removeMovieFromWatchlist(int $movieId, MovieRepository $movieRepository, EntityManagerInterface $entityManager): Response
    {
        // Récupère l'utilisateur actuellement connecté
        $user = $this->getUser();

        // Vérifie si un utilisateur est connecté et si c'est une instance de votre entité User
        if (!$user instanceof User) {
            return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
        }

        $movie = $movieRepository->find($movieId);

        if (!$movie) {
            return $this->json(['message' => 'Movie not found'], Response::HTTP_NOT_FOUND);
        }

        // Vérifie si le film est dans la watchlist de l'utilisateur
        $watchlistItem = null;
        foreach ($user->getWatchlists() as $watchlistItem) {
            if ($watchlistItem->getMovie() === $movie) {
                break;
            }
        }

        // Si le film n'est pas dans la watchlist de l'utilisateur
        if (!$watchlistItem) {
            return $this->json(['message' => 'Movie not found in watchlist'], Response::HTTP_NOT_FOUND);
        }

        // Supprime le film de la watchlist
        $entityManager->remove($watchlistItem);
        $entityManager->flush();

        return $this->json(['message' => 'Movie removed from watchlist successfully']);
    }



    #[Route('/api/watchlist/clear', name: 'app_api_watchlist_clear')]
    public function clearWatchlist(EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        // Vérifie si l'utilisateur est connecté
        if (!$user instanceof User) {
            return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
        }

        // Parcourt et supprime chaque élément de la watchlist de l'utilisateur
        foreach ($user->getWatchlists() as $watchlistItem) {
            $entityManager->remove($watchlistItem);
        }
        $entityManager->flush();

        return $this->json(['message' => 'Watchlist cleared successfully']);
    }



// route for change username

#[Route('/api/user/change-username/{username}', name: 'app_api_user_change_username')]
public function changeUsername(string $username, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
{
    $user = $this->getUser();

    if (!$user instanceof User) {
        return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
    }

    $userWithSameUsername = $userRepository->findOneBy(['username' => $username]);

    if ($userWithSameUsername) {
        return $this->json(['message' => 'Username already taken'], Response::HTTP_CONFLICT);
    }

    $user->setUsername($username);
    $entityManager->flush();

    return $this->json(['message' => 'Username changed successfully']);
}


// change firstName

#[Route('/api/user/change-firstname/{firstName}', name: 'app_api_user_change_firstname')]
public function changeFirstName(string $firstName, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
{
    $user = $this->getUser();

    if (!$user instanceof User) {
        return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
    }

    $user->setFirstName($firstName);
    $entityManager->flush();

    return $this->json(['message' => 'First name changed successfully']);
}

// change lastName

#[Route('/api/user/change-lastname/{lastName}', name: 'app_api_user_change_lastname')]
public function changeLastName(string $lastName, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
{
    $user = $this->getUser();

    if (!$user instanceof User) {
        return $this->json(['message' => 'User not found or not logged in'], Response::HTTP_FORBIDDEN);
    }

    $user->setLastName($lastName);
    $entityManager->flush();

    return $this->json(['message' => 'Last name changed successfully']);
}
}