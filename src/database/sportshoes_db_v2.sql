
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `paymentMethod` varchar(25) NOT NULL,
  `shippingMethod` varchar(25) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
); 

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
); 


CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `size` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
)

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `address` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) 


ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_886af709-241b-4177-a045-d7a5c2c7e39b` (`userId`);


ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_06ee2bbc-90a5-4413-8ff9-d229c0bc71b9` (`orderId`),
  ADD KEY `FK_6e92068c-e9d1-41a4-8e51-09c4bb672b53` (`productId`);


ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `orders`
  ADD CONSTRAINT `FK_886af709-241b-4177-a045-d7a5c2c7e39b` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);


ALTER TABLE `order_items`
  ADD CONSTRAINT `FK_06ee2bbc-90a5-4413-8ff9-d229c0bc71b9` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FK_6e92068c-e9d1-41a4-8e51-09c4bb672b53` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

