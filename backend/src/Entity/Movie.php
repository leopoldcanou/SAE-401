<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movie'])]
class Movie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['json_category'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    private Collection $category;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $description = null;

    #[ORM\Column(length: 10)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $duration = null;

    #[ORM\Column(length: 4)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $year = null;

    #[ORM\Column(length: 10)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $rating = null;

    #[ORM\Column(length: 10)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $age = null;

    #[ORM\Column(length: 512)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $img = null;

    #[ORM\Column(length: 512)]
    #[Groups(['json_category', 'json_featured'])] // Ajoutez 'json_featured' au groupe
    private ?string $wideimg = null;

    #[ORM\OneToMany(targetEntity: Featured::class, mappedBy: 'movie')]
    private Collection $featureds;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->featureds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDuration(): ?string
    {
        return $this->duration;
    }

    public function setDuration(string $duration): static
    {
        $this->duration = $duration;

        return $this;
    }

    public function getYear(): ?string
    {
        return $this->year;
    }

    public function setYear(string $year): static
    {
        $this->year = $year;

        return $this;
    }

    public function getRating(): ?string
    {
        return $this->rating;
    }

    public function setRating(string $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(string $age): static
    {
        $this->age = $age;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): static
    {
        $this->img = $img;

        return $this;
    }

    public function getWideimg(): ?string
    {
        return $this->wideimg;
    }

    public function setWideimg(string $wideimg): static
    {
        $this->wideimg = $wideimg;

        return $this;
    }

    /**
     * @return Collection<int, Featured>
     */
    public function getFeatureds(): Collection
    {
        return $this->featureds;
    }

    public function addFeatured(Featured $featured): static
    {
        if (!$this->featureds->contains($featured)) {
            $this->featureds->add($featured);
            $featured->setMovie($this);
        }

        return $this;
    }

    public function removeFeatured(Featured $featured): static
    {
        if ($this->featureds->removeElement($featured)) {
            // set the owning side to null (unless already changed)
            if ($featured->getMovie() === $this) {
                $featured->setMovie(null);
            }
        }

        return $this;
    }

        public function __toString(): string
    {
        return $this->name;
    }
}
