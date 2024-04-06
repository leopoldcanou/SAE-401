-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : sam. 06 avr. 2024 à 00:59
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE4_DWeb_DI_01`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Horror'),
(2, 'Comedy'),
(3, 'Action'),
(4, 'Drama'),
(5, 'Thriller');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240315100855', '2024-03-18 23:44:39', 58),
('DoctrineMigrations\\Version20240315134426', '2024-03-18 23:44:40', 6),
('DoctrineMigrations\\Version20240326141700', '2024-03-26 14:17:07', 32),
('DoctrineMigrations\\Version20240329104946', '2024-03-29 10:49:59', 18),
('DoctrineMigrations\\Version20240401171629', '2024-04-01 17:16:35', 79),
('DoctrineMigrations\\Version20240403183736', '2024-04-03 18:38:25', 15),
('DoctrineMigrations\\Version20240403214650', '2024-04-03 21:46:52', 59),
('DoctrineMigrations\\Version20240403222954', '2024-04-03 22:30:01', 34);

-- --------------------------------------------------------

--
-- Structure de la table `featured`
--

CREATE TABLE `featured` (
  `id` int NOT NULL,
  `movie_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `featured`
--

INSERT INTO `featured` (`id`, `movie_id`) VALUES
(1, 3),
(2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wideimg` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `description`, `duration`, `year`, `rating`, `age`, `img`, `wideimg`, `video`) VALUES
(1, 'Five Nights at Freddy\'s', '<div>Can you survive five nights? A security guard starts working at Freddy Fazbear\'s Pizza. When he spends his first night on the job, he realizes that the night shift at Freddy\'s won\'t be so easy to get through.</div>', '1 h 49 m', '2023', '5.5', '15+', '/img/movies/five_nights_at_freddys.webp', '/img/movies/five_nights_at_freddys__wide.webp', 'https://www.youtube.com/embed/0VH9WCFV6XQ?si=qMbIhW-1VMBCs2fn'),
(2, 'Wonka', '<div>Based on the extraordinary character from Donald and the Chocolate Factory, Roald Dahl\'s most iconic children\'s book and one of the best-selling children\'s books of all time, comes \\\"Wonka.\\\" The film tells the wonderful story of how the world\'s greatest inventor, magician and chocolatier became the beloved Willy Wonka we know today.</div>', '1 h 52 m', '2023', '7.1', '7+', '/img/movies/wonka.webp', '/img/movies/wonka__wide.webp', 'https://www.youtube.com/embed/otNh9bTjXWg?si=VBYXyyU4MzFBaRbQ'),
(3, 'Joker', '<div>Arthur, a man met with cruelty and contempt by society. During the day he works as a clown and in the evenings he tries to break through as a stand-up comedian... but it feels like the laughs are always at his expense. He is completely out of sync with reality and his uncontrollable and inappropriate laughter, which only increases as he tries to control it, leads to more taunts and even violence.</div>', '2 h 2 m', '2019', '8.4', '15+', '/img/movies/joker.webp', '/img/movies/joker__wide.webp', 'https://www.youtube.com/embed/zAGVQLHvwOY?si=Dg08Zt98Y9TqIx40'),
(4, 'The Batman', '<div>For two years, Bruce Wayne has watched over the streets of Gotham City as Batman. When an assassin targets Gotham\'s elite in a series of sadistic murders, a trail of cryptic clues leads Batman into the underworld. The evidence leads closer and closer to his own family and the extent of the killer\'s plans becomes clear. Batman must forge new alliances and uncover the culprit to save Gotham City.</div>', '2 h 56 m', '2022', '7.8', '15+', '/img/movies/the_batman.webp', '/img/movies/the_batman__wide.webp', 'https://www.youtube.com/embed/mqqft2x_Aa4?si=eClN9BXwDv-zbjXG'),
(5, 'American Psycho', '<div>Patrick Bateman, a young man who works at his father\'s firm on Wall Street, hides a dark side from his friends and colleagues. On the outside, everything seems normal, but what no one knows is that Patrick secretly enjoys killing people for no reason whatsoever. The film is based on the novel by Bret Easton Ellis.</div>', '1 h 41 m', '2000', '7.6', '15+', '/img/movies/american_psycho.webp', '/img/movies/american_psycho__wide.webp', 'https://www.youtube.com/embed/81mibtQWWBg?si=7cYAedrHpWtvc2ik'),
(6, 'Fight Club', '<div>Jack hates his normal life and when Tyler Durden enters it is a welcome punch in the face. Together they start a secret club that expands into a bigger and bigger business, but at the same time Tyler gains more and more control over Jack. This provocative, black, humorous masterpiece is much more than a violent action film. A modern classic.</div>', '2 h 14 m', '1999', '8.8', '15+', '/img/movies/fight_club.webp', '/img/movies/fight_club__wide.webp', 'https://www.youtube.com/embed/BdJKm16Co6M?si=jDaz4EIM9eWXYIep'),
(7, 'Drive', '<div>Winner of the Director\'s Award at the Cannes Film Festival in 2011. In Drive we meet a stunt driver from Hollywood who dreams of being successful on the professional racing tracks. At the same time, he freelances as a driver in the criminal world and angers some of Los Angeles\' most dangerous men. There is only one way for him to survive, he must drive fast!</div>', '1 h 40 m', '2011', '7.8', '15+', '/img/movies/drive.webp', '/img/movies/drive__wide.webp', 'https://www.youtube.com/embed/KBiOF3y1W0Y?si=ieWTANq1DDP7tsik'),
(8, 'Nightcrawler', '<div>Lou Bloom, a determined young man who, in his desperate search for work, gets hooked on crime journalism. When he finds a group of freelance photographers filming car crashes, fires, murders and other mayhem, Lou plunges into the deadly world of nightcrawling - where every police siren is a gift from above and victims are converted into dollars and cents. The film was nominated for an Oscar for best original screenplay.</div>', '1 h 57 m', '2014', '7.8', '15+', '/img/movies/nightcrawler.webp', '/img/movies/nightcrawler__wide.webp', 'https://www.youtube.com/embed/u1uP_8VJkDQ?si=pctuo-ctZpt37vxs'),
(9, 'Seven', '<div>During a routine call, the police find a man murdered in the middle of a meal. Next to the body, someone has written the word \"Gluttony\". At the next murder scene, someone has written \"Greed\" in blood by the victim. Officers Sommerseth and Mills realize they are hunting a serial killer who murders after the Seven Deadly Sins. Don\'t miss a modern classic with Brad Pitt.</div>', '2 h 06 m', '1995', '8.6', '15+', '/img/movies/seven.webp', '/img/movies/seven__wide.webp', 'https://www.youtube.com/embed/znmZoVkCjpI?si=ikgXrp_TsrNfslpw'),
(10, 'The Godfather', '<div>Mafia leader Don Vito Corleone rules his powerful empire with a brutal system of favors and favors. When he dies, one of the sons must take over: lawyer Tom, playboy Sonny, loyal Fredo - or Michael, the youngest and least willing. The first part of Francis Ford Coppola\'s magnificent masterpiece, constantly ranked among the best films in the world.</div>', '2 h 48 m', '1972', '9.2', '15+', '/img/movies/the_godfather.webp', '/img/movies/the_godfather__wide.webp', 'https://www.youtube.com/embed/UaVTIH8mujA?si=BbuLh5Eer5TE0Hb7'),
(11, 'Goodfellas', '<div>Martin Scorsese\'s blockbuster film stars Robert De Niro in this mafia film that received no less than six Oscar nominations in 1990. Based on a best-selling true-life book, De Niro plays scarred mob boss Jimmy \"The Gent\" Conway, who has his own special way of dealing the shops on.</div>', '2 h 29 m', '1990', '8.7', '15+', '/img/movies/goodfellas.webp', '/img/movies/goodfellas__wide.webp', 'https://www.youtube.com/embed/2ilzidi_J8Q?si=uqhDCLbSQWpbyxz-'),
(12, 'The Godfather 2', '<div>Part 2 of the epic story of the Corleone mafia family depicts young Vito\'s journey from Sicily to New York, where he makes his way in the underworld. In parallel, we also get to follow the family\'s development from the 1950s, when the son Michael Corleone takes over as Godfather and invests in moving the business to Las Vegas. But the higher up in society he gets, the more dangerous his enemies become.</div>', '3 h 14 m', '1974', '9', '15+', '/img/movies/the_godfather_2.webp', '/img/movies/the_godfather_2__wide.webp', 'https://www.youtube.com/embed/9O1Iy9od7-A?si=ReDa9A8KcvY4KdCY'),
(13, 'Scarface', '<div>Already in the concentration camp in Miami, the young Cuban Tony Montana learns the brutal truth. It is only crime that pays off for a poor refugee. The booming cocaine trade becomes his springboard to success and Tony is smarter, more ruthless and hungrier than all his competitors. Al Pacino gives an unforgettable performance as one of the most ruthless gangsters ever portrayed on film.</div>', '2 h 50 m', '1983', '8.3', '15+', '/img/movies/scarface.webp', '/img/movies/scarface__wide.webp', 'https://www.youtube.com/embed/vREl66xmXsE?si=LsQxR9PLxaWhq2oj');

-- --------------------------------------------------------

--
-- Structure de la table `movie_category`
--

CREATE TABLE `movie_category` (
  `movie_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie_category`
--

INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
(1, 1),
(1, 5),
(2, 2),
(3, 4),
(3, 5),
(4, 3),
(4, 4),
(5, 4),
(6, 5),
(7, 3),
(8, 4),
(8, 5),
(9, 5),
(10, 4),
(10, 5),
(11, 3),
(12, 4),
(12, 5),
(13, 3);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`, `username`) VALUES
(3, 'leopold.canou@etu.unilim.fr', '[\"ROLE_USER\", \"ROLE_ADMIN\"]', '$2y$13$1DqN6LjcWMNl2d4wph1BlOqcz6aga6RR12E./uzyVdQiV7EDvsZwG', 'Léopold', 'Canou', 'leopold'),
(4, 'leopold.canou@gmail.com', '[]', '$2y$13$W8NuCmP6CjpCpWe0Ov09heYWab6RDu116fNZVt5wuduZx01Rv9rJu', 'Léopold', 'Canou', 'leopold2');

-- --------------------------------------------------------

--
-- Structure de la table `watchlist`
--

CREATE TABLE `watchlist` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `movie_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `featured`
--
ALTER TABLE `featured`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_3C1359D48F93B6FC` (`movie_id`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD PRIMARY KEY (`movie_id`,`category_id`),
  ADD KEY `IDX_DABA824C8F93B6FC` (`movie_id`),
  ADD KEY `IDX_DABA824C12469DE2` (`category_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`);

--
-- Index pour la table `watchlist`
--
ALTER TABLE `watchlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_340388D3A76ED395` (`user_id`),
  ADD KEY `IDX_340388D38F93B6FC` (`movie_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `featured`
--
ALTER TABLE `featured`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `watchlist`
--
ALTER TABLE `watchlist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `featured`
--
ALTER TABLE `featured`
  ADD CONSTRAINT `FK_3C1359D48F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`);

--
-- Contraintes pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD CONSTRAINT `FK_DABA824C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DABA824C8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `watchlist`
--
ALTER TABLE `watchlist`
  ADD CONSTRAINT `FK_340388D38F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  ADD CONSTRAINT `FK_340388D3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
