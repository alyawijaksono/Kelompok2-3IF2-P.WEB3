-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18 Jul 2019 pada 17.32
-- Versi Server: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if2_kelompok2_bookstore`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `desc` text,
  `price` float DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `writer` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `page` varchar(255) DEFAULT NULL,
  `year_of_publish` int(11) DEFAULT NULL,
  `isbn` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `desc`, `price`, `size`, `writer`, `publisher`, `page`, `year_of_publish`, `isbn`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'Buku Kesehatan', 'Ini Buku Kesehatan', 700000, '25x15cm', 'Yuli Rahayu', 'Airlangga', '490', 2018, 2147483647, 'Edukasi Kesehatan', '2019-07-18 13:34:40', '2019-07-18 13:34:52'),
(3, 'Buku Komputer', 'Ini deskripsi', 50000, '21x15cm', 'Alya Ainun', 'Elex Media Komputindo', '300', 2016, 123456, 'Computer', '2019-07-18 13:34:48', '2019-07-18 13:34:48'),
(4, 'Buku Komputer', 'Ini deskripsi', 50000, '21x15cm', 'Alya Ainun', 'Elex Media Komputindo', '300', 2016, 123456, 'Computer', '2019-07-18 14:06:37', '2019-07-18 14:06:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_orders`
--

CREATE TABLE `detail_orders` (
  `id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bookId` int(11) DEFAULT NULL,
  `headOrderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `detail_orders`
--

INSERT INTO `detail_orders` (`id`, `qty`, `createdAt`, `updatedAt`, `bookId`, `headOrderId`) VALUES
(3, 2, '2019-07-18 14:52:44', '2019-07-18 14:52:44', 1, 4),
(4, 1, '2019-07-18 14:52:44', '2019-07-18 14:52:44', 3, 4),
(5, 2, '2019-07-18 15:10:47', '2019-07-18 15:10:47', 1, 5),
(6, 1, '2019-07-18 15:10:47', '2019-07-18 15:10:47', 3, 5),
(7, 2, '2019-07-18 15:25:07', '2019-07-18 15:25:07', 1, 6),
(8, 1, '2019-07-18 15:25:07', '2019-07-18 15:25:07', 3, 6);

-- --------------------------------------------------------

--
-- Struktur dari tabel `head_orders`
--

CREATE TABLE `head_orders` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `head_orders`
--

INSERT INTO `head_orders` (`id`, `createdAt`, `updatedAt`, `userId`) VALUES
(3, '2019-07-18 14:50:03', '2019-07-18 14:50:03', 2),
(4, '2019-07-18 14:52:44', '2019-07-18 14:52:44', 2),
(5, '2019-07-18 15:10:47', '2019-07-18 15:10:47', 2),
(6, '2019-07-18 15:25:07', '2019-07-18 15:25:07', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(1, 'Yuli Rahayu', 'yulirahayu', 'yulirahayu', 'admin', '2019-07-18 13:34:40', '2019-07-18 13:35:40'),
(2, 'Alya Ainun', 'alyaainun', 'alyaainun', 'user', '2019-07-18 13:34:40', '2019-07-18 13:35:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_orders`
--
ALTER TABLE `detail_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookId` (`bookId`),
  ADD KEY `headOrderId` (`headOrderId`);

--
-- Indexes for table `head_orders`
--
ALTER TABLE `head_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `detail_orders`
--
ALTER TABLE `detail_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `head_orders`
--
ALTER TABLE `head_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `detail_orders`
--
ALTER TABLE `detail_orders`
  ADD CONSTRAINT `detail_orders_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `books` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `detail_orders_ibfk_2` FOREIGN KEY (`headOrderId`) REFERENCES `head_orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `head_orders`
--
ALTER TABLE `head_orders`
  ADD CONSTRAINT `head_orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
