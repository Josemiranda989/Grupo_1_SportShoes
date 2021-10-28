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
    password varchar(150) NOT NULL,
    address varchar(250) NOT NULL,
    avatar varchar(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

-- CONTENIDO DE TABLA USERS
insert into
    users (
        user_id,
        fullName,
        userName,
        country,
        email,
        password,
        address,
        avatar,
        created_at
    )
values
    (
        1,
        'Andromache Bennough',
        'abennough0',
        'United States',
        'abennough0@state.tx.us',
        'oDHi8dqXU',
        '19128 Anhalt Avenue',
        'https://robohash.org/voluptatibusiureet.png?size=200x200&set=set1',
        '2021-06-18 14:44:22'
    ),
    (
        2,
        'Jean Duly',
        'jduly1',
        'United States',
        'jduly1@deliciousdays.com',
        'XmQsXg',
        '8356 Morning Lane',
        'https://robohash.org/utametdolores.png?size=200x200&set=set1',
        '2021-01-03 14:37:43'
    ),
    (
        3,
        'Phylis M''cowis',
        'pmcowis2',
        'United States',
        'pmcowis2@hugedomains.com',
        'tvRHxc4yElJ',
        '11821 Knutson Center',
        'https://robohash.org/voluptatemestlibero.png?size=200x200&set=set1',
        '2021-04-07 16:37:11'
    ),
    (
        4,
        'Valeria Porker',
        'vporker3',
        'United States',
        'vporker3@networksolutions.com',
        'y74iZn',
        '13618 Vernon Circle',
        'https://robohash.org/etautatque.png?size=200x200&set=set1',
        '2021-01-26 10:42:11'
    ),
    (
        5,
        'Olivier McGhie',
        'omcghie4',
        'United States',
        'omcghie4@oracle.com',
        'bnS350',
        '010 Continental Terrace',
        'https://robohash.org/utearumnon.png?size=200x200&set=set1',
        '2021-07-05 18:58:26'
    ),
    (
        6,
        'Jose Miranda',
        'josemiranda989',
        'Argentina',
        'josemiranda989@gmail.com',
        '2a10XpHGYHJIr8J3Sx8ecx/BC.3IJgB4oJPvOI1kui5jRh8BtSExKM/Ky',
        '010 Continental Terrace',
        '1632328081960-img.jpg',
        '2021-07-05 18:58:26'
    ),
    (
        7,
        'Gabriel Kohen',
        'gabokohen',
        'Argentina',
        'gabokohen@gmail.com',
        '2a10X8VrYlVzNcNIcKfwR4/qxeh5.PTq/zaQ8fVZfgBpIPGAg8QT8qofG',
        '010 Continental Terrace',
        '1632511645031-img.jpeg',
        '2021-07-05 18:58:26'
    ),
    (
        8,
        'Gabriel Figueroa',
        'gabrielfigue',
        'Argentina',
        'gabriel_leo510@hotmail.com',
        '2a10fuSBl4T7QiuU3mwJejxQb.XdIGpVd9yYYqVJHL./fCpsMdHfHktpS',
        '010 Continental Terrace',
        '1632511484424-img.jpg',
        '2021-07-05 18:58:26'
    );

-- CREACION DE TABLA PRODUCTS
CREATE TABLE IF NOT EXISTS products (
    product_id int(11) NOT NULL AUTO_INCREMENT,
    productName varchar(50) NOT NULL,
    price int(11) NOT NULL,
    description varchar(250) NOT NULL,
    img1 varchar(250) NOT NULL,
    category varchar(50) NOT NULL,
    color varchar(50) NOT NULL,
    brand varchar(50) NOT NULL,
    size int(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id)
);

-- CONTENIDO DE TABLA PRODUCTS
insert into
    products (
        product_id,
        productName,
        price,
        description,
        img1,
        category,
        color,
        brand,
        size,
        created_at
    )
values
    (
        1,
        'Adidas-Flowers',
        '97.36',
        'adidas Superstar Shoes have graced the glossy hardwood of basketball courts, the concrete floors of arenas and millions of miles of city sidewalks',
        '1.png',
        'Women´s',
        'Fuscia',
        'Adidas',
        8,
        '2021-03-01 16:29:49'
    ),
    (
        2,
        'Adidas-pw',
        '107.77',
        'Lace closure provides a secure fit.',
        '1.png',
        'Men´s',
        'Indigo',
        'Adidas',
        10,
        '2021-09-16 08:37:12'
    ),
    (
        3,
        'Adidas-Superstan',
        '97.75',
        'Features an iconic full-grain leather upper.',
        '1.png',
        'Women´s',
        'Puce',
        'Adidas',
        8,
        '2021-05-09 14:13:28'
    ),
    (
        4,
        'Adidas-Ultraboost',
        '122.61',
        'Seamless Primeknit forefoot is stretchy and breathable for a soft feel that doesn’t irritate or rub.',
        '1.png',
        'Men´s',
        'Blue',
        'Adidas',
        10,
        '2020-12-23 19:17:34'
    ),
    (
        5,
        'Crocs-blue',
        '71.50',
        'The water-friendly and buoyant design adds functionality.',
        '1.png',
        'Women´s',
        'Puce',
        'Crocs',
        8,
        '2021-09-18 00:41:42'
    ),
    (
        6,
        'Newbalance-Vision',
        '75.78',
        'Translucent outsole with VISION print adds standout style.',
        '1.png',
        'Women´s',
        'Purple',
        'New Balance',
        7,
        '2021-03-18 21:12:57'
    ),
    (
        7,
        'Crocs-green',
        '83.79',
        'Translucent outsole with VISION print adds standout style.',
        '1.png',
        'Men´s',
        'Crimson',
        'Crocs',
        9,
        '2021-04-23 18:30:04'
    ),
    (
        8,
        'Crocs-red',
        '75.09',
        'The water-friendly and buoyant design adds functionality.',
        '1.png',
        'Women´s',
        'Blue',
        'Crocs',
        8,
        '2020-12-06 10:13:46'
    ),
    (
        9,
        'Newbalance Wnl',
        '148.50',
        'The water-friendly and buoyant design adds functionality.',
        '1.png',
        'Men´s',
        'Goldenrod',
        'New Balance',
        9,
        '2020-11-01 00:21:17'
    ),
    (
        10,
        'Newbalance-327white',
        '147.12',
        'Features a mix of 1970s aesthetics and modern logo graphics.',
        '1.png',
        'Men´s',
        'Indigo',
        'New Balance',
        8,
        '2021-10-23 20:33:36'
    ),
    (
        11,
        'Newbalance-Fuel',
        '130.11',
        'Features a mix of 1970s aesthetics and modern logo graphics.',
        '1.png',
        'Men´s',
        'Red',
        'New Balance',
        8,
        '2021-07-03 11:13:48'
    ),
    (
        12,
        'Newbalance-Wnl 327',
        '120.61',
        'Features a mix of 1970s aesthetics and modern logo graphics.',
        '1.png',
        'Men´s',
        'Yellow',
        'New Balance',
        9,
        '2021-09-18 18:26:18'
    ),
    (
        13,
        'Nike-AirForce',
        '109.55',
        'Full-length FuelCell midsole provides a pinnacle of propulsion and energy return.',
        'img1.png',
        'Men´s',
        'Green',
        'Nike',
        6,
        '2021-06-15 19:49:14'
    ),
    (
        14,
        'Nike-AirMax',
        '77.36',
        'Features a mix of 1970s aesthetics and modern logo graphics.',
        '1.png',
        'Men´s',
        'Fuscia',
        'Nike',
        8,
        '2021-06-18 04:36:44'
    ),
    (
        15,
        'Nike-Blazer',
        '85.35',
        'Leather upper for a comfortable fit and premium look',
        '1.png',
        'Men´s',
        'Fuscia',
        'Nike',
        8,
        '2021-02-26 21:16:52'
    ),
    (
        16,
        'Nike-Huarache',
        '83.22',
        ' Mesh, leather, suede, and/or synthetic upper. See specific styles for materials.',
        '1.png',
        'Men´s',
        'Turquoise',
        'Nike',
        9,
        '2020-12-03 02:04:18'
    ),
    (
        17,
        'Nike-LeBron',
        '129.02',
        'Autoclave construction fuses the midsole and outsole for a sleek look.',
        '1.png',
        'Men´s',
        'Yellow',
        'Nike',
        8,
        '2020-12-31 03:05:49'
    ),
    (
        18,
        'Vans-brown',
        '138.16',
        'Neoprene inner bootie design keeps your foot locked in with ample support and dynamic comfort.',
        '1.png',
        'Men´s',
        'Maroon',
        'Vans',
        7,
        '2021-06-11 08:23:45'
    ),
    (
        19,
        'Vans-Ofthe',
        '105.37',
        'KnitPosite 2.0 heat-molded yarns offer lightweight breathability and stretchy comfort.',
        '1.png',
        'Men´s',
        'Teal',
        'Vans',
        9,
        '2021-04-15 06:58:44'
    ),
    (
        20,
        'Vans-Old',
        '125.19',
        ' Features classic Vans style built in a canvas-and-suede upper with iconic sidestripe. Materials on select styles vary.',
        '1.png',
        'Men´s',
        'Indigo',
        'Vans',
        8,
        '2020-12-02 00:12:41'
    ),
    (
        21,
        'Vans-Old2',
        '94.24',
        'Features classic Vans style built in a canvas-and-suede upper with iconic sidestripe. Materials on select styles vary.',
        '1.png',
        'Women´s',
        'Green',
        'Vans',
        8,
        '2021-09-08 09:23:20'
    ),
    (
        22,
        'Vans Old Skool Spongebob',
        '115.91',
        'SpongeBob imprints show love to your favorite Bikini-Bottom creatures',
        '1.png',
        'Women´s',
        'Puce',
        'Vans',
        7,
        '2021-02-14 19:00:52'
    );



-- CONTENIDO DE TABLA CART

-- CREACION DE TABLA CARTPRODUCTS
CREATE TABLE IF NOT EXISTS cartproduct (
    id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    product_id int(11) NOT NULL,
    quantity int unsigned NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
