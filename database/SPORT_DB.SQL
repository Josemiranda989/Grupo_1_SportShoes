DROP DATABASE IF EXISTS SportShoes_DB;
CREATE DATABASE sportshoes_db;
use sportshoes_db;

-- CREACION DE TABLA USERS
CREATE TABLE IF NOT EXISTS users (
    user_id int(11) NOT NULL AUTO_INCREMENT,
    fullName varchar(50) NOT NULL,
    userName varchar(50) NOT NULL,
    country varchar(20) NOT NULL,
    email varchar(250) NOT NULL,
    password varchar(50) NOT NULL,
    adress varchar(250) NOT NULL,
    avatar varchar(250) NOT NULL,
    category varchar(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

-- CONTENIDO DE TABLA USERS

insert into users (user_id, fullName, userName,country, email, password, address, avatar, created_at) 
values 
 (1, 'Andromache Bennough', 'abennough0','United States', 'abennough0@state.tx.us', 'oDHi8dqXU', '19128 Anhalt Avenue', 'https://robohash.org/voluptatibusiureet.png?size=200x200&set=set1', '2021-06-18 14:44:22'),
 (2, 'Jean Duly', 'jduly1','United States', 'jduly1@deliciousdays.com', 'XmQsXg', '8356 Morning Lane', 'https://robohash.org/utametdolores.png?size=200x200&set=set1', '2021-01-03 14:37:43'),
 (3, 'Phylis M''cowis', 'pmcowis2','United States', 'pmcowis2@hugedomains.com', 'tvRHxc4yElJ', '11821 Knutson Center', 'https://robohash.org/voluptatemestlibero.png?size=200x200&set=set1', '2021-04-07 16:37:11'),
 (4, 'Valeria Porker', 'vporker3','United States', 'vporker3@networksolutions.com', 'y74iZn', '13618 Vernon Circle', 'https://robohash.org/etautatque.png?size=200x200&set=set1', '2021-01-26 10:42:11'),
 (5, 'Olivier McGhie', 'omcghie4','United States','omcghie4@oracle.com', 'bnS350', '010 Continental Terrace', 'https://robohash.org/utearumnon.png?size=200x200&set=set1', '2021-07-05 18:58:26'),
 (6, 'Jose Miranda', 'josemiranda989','Argentina', 'josemiranda989@gmail.com', '$2a$10$XpHGYHJIr8J3Sx8ecx/BC.3IJgB4oJPvOI1kui5jRh8BtSExKM/Ky', '010 Continental Terrace', '1632328081960-img.jpg', '2021-07-05 18:58:26'),
 (7, 'Gabriel Kohen', 'gabokohen','Argentina', 'gabokohen@gmail.com', '$2a$10$X8VrYlVzNcNIcKfwR4/qxeh5.PTq/zaQ8fVZfgBpIPGAg8QT8qofG', '010 Continental Terrace', '1632511645031-img.jpeg', '2021-07-05 18:58:26'),
 (8, 'Gabriel Figueroa', 'gabrielfigue','Argentina', 'gabriel_leo510@hotmail.com', '$2a$10$fuSBl4T7QiuU3mwJejxQb.XdIGpVd9yYYqVJHL./fCpsMdHfHktpS', '010 Continental Terrace', '1632511484424-img.jpg', '2021-07-05 18:58:26');
 




-- CREACION DE TABLA PRODUCTS
CREATE TABLE IF NOT EXISTS products (
    products_id int(11) NOT NULL AUTO_INCREMENT,
    productName varchar(50) NOT NULL,
    price int(11) NOT NULL,
    description varchar(250) NOT NULL,
    img varchar(250) NOT NULL,
    category varchar(50) NOT NULL,
    color varchar(50) NOT NULL,
    brand varchar(50) NOT NULL,
    size int(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (products_id)
);

-- CONTENIDO DE TABLA PRODUCTS

insert into products (product_id, productName, price, description, img1, category, color, brand, size, created_at) 
values 
 (1, 'Adidas-Flowers', '$97.36', 'adidas Superstar Shoes have graced the glossy hardwood of basketball courts, the concrete floors of arenas and millions of miles of city sidewalks', '1.png', 'Women´s', 'Fuscia', 'Adidas', 8, '2021-03-01 16:29:49'),
 (2, "Adidas-pw", '$107.77', null, null, null, 'Indigo', null, null, '2021-09-16 08:37:12'),
 (3, null, '$97.75', null, null, null, 'Puce', null, null, '2021-05-09 14:13:28'),
 (4, null, '$122.61', null, null, null, 'Blue', null, null, '2020-12-23 19:17:34'),
 (5, null, '$71.50', null, null, null, 'Puce', null, null, '2021-09-18 00:41:42'),
 (6, null, '$75.78', null, null, null, 'Purple', null, null, '2021-03-18 21:12:57'),
 (7, null, '$83.79', null, null, null, 'Crimson', null, null, '2021-04-23 18:30:04'),
 (8, null, '$75.09', null, null, null, 'Blue', null, null, '2020-12-06 10:13:46'),
 (9, null, '$148.50', null, null, null, 'Goldenrod', null, null, '2020-11-01 00:21:17'),
 (10, null, '$147.12', null, null, null, 'Indigo', null, null, '2021-10-23 20:33:36'),
 (11, null, '$130.11', null, null, null, 'Red', null, null, '2021-07-03 11:13:48'),
 (12, null, '$120.61', null, null, null, 'Yellow', null, null, '2021-09-18 18:26:18'),
 (13, null, '$109.55', null, null, null, 'Green', null, null, '2021-06-15 19:49:14'),
 (14, null, '$77.36', null, null, null, 'Fuscia', null, null, '2021-06-18 04:36:44'),
 (15, null, '$85.35', null, null, null, 'Fuscia', null, null, '2021-02-26 21:16:52'),
 (16, null, '$83.22', null, null, null, 'Turquoise', null, null, '2020-12-03 02:04:18'),
 (17, null, '$129.02', null, null, null, 'Yellow', null, null, '2020-12-31 03:05:49'),
 (18, null, '$138.16', null, null, null, 'Maroon', null, null, '2021-06-11 08:23:45'),
 (19, null, '$105.37', null, null, null, 'Teal', null, null, '2021-04-15 06:58:44'),
 (20, null, '$125.19', null, null, null, 'Indigo', null, null, '2020-12-02 00:12:41'),
 (21, null, '$94.24', null, null, null, 'Green', null, null, '2021-09-08 09:23:20'),
 (22, null, '$115.91', null, null, null, 'Puce', null, null, '2021-02-14 19:00:52');




-- CREACION DE TABLA CART
CREATE TABLE IF NOT EXISTS cart (
    cart_id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- CONTENIDO DE TABLA CART

-- CREACION DE TABLA CARTPRODUCTS
CREATE TABLE IF NOT EXISTS cartproducts (
  id int(11) NOT NULL AUTO_INCREMENT,
  cart_id int(11) NOT NULL,
  product_id int(11) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(products_id),
  FOREIGN KEY (cart_id) REFERENCES cart(cart_id)
);

-- CONTENIDO DE TABLA CARTPRODUCTS: