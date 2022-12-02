--
-- Estructura de tabla para la tabla `products`
--
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
    `deletedAt` datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `users`
--
CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `fullName` varchar(50) NOT NULL,
    `userName` varchar(50) NOT NULL,
    `country` varchar(50) NOT NULL,
    `email` text NOT NULL,
    `password` varchar(255) NOT NULL,
    `admin` tinyint(1) NOT NULL,
    `address` varchar(255) NOT NULL,
    `avatar` varchar(255) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `deletedAt` datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
    `id` int(11) NOT NULL,
    `userId` int(11) NOT NULL,
    `total` decimal(10, 2) NOT NULL,
    `paymentMethod` varchar(25) NOT NULL,
    `shippingMethod` varchar(25) DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `deletedAt` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    key userId_idx(`userId`)
);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `order_items`
--
CREATE TABLE `order_items` (
    `id` int(11) NOT NULL,
    `orderId` int(11) NOT NULL,
    `productId` int(11) DEFAULT NULL,
    `name` varchar(100) NOT NULL,
    `price` decimal(10, 2) NOT NULL,
    `quantity` int(11) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `deletedAt` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY orderId_idx (`orderId`),
    KEY productId_idx (`productId`)
);
