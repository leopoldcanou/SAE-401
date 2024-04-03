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
        }
        else {
          $payload = [
              'email' => $user->getEmail(),
              'roles' => $user->getRoles(),
          ];
          
          return new Response(json_encode($payload));
        }
 
    }


}
