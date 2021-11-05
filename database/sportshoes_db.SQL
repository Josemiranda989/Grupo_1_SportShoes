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
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
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
        avatar
    )
values
    (
        1,
        'Jose Miranda',
        'josemiranda989',
        'Argentina',
        'josemiranda989@gmail.com',
        '$2a$10$FBMOF3fafBVcnoPaofmDoOX5Lz7l7XBqhcXY28JaN7Gz24qOurIb6',
        '010 Continental Terrace',
        'jose.jpg'
    ),
    (
        2,
        'Gabriel Figueroa',
        'Gabi',
        'Argentina',
        'gabriel_leo510@hotmail.com',
        '$2a$10$g4hy9GUAwuW4XAe0r4xaJuAhioQs0IS5pmTA86nI1TnUOlPwjpWqu',
        'Republica 1730',
        'gabriel.jpeg'
    ),
    (
        3,
        'Gabriel Kohen',
        'Gabo',
        'Argentina',
        'gabokohen@gmail.com',
        '$2a$10$or5sj0brM0JYapo54nrGMOvJS58DREYmMdM1NhebZbio.erUiVV7W',
        'Continental Terrace 122',
        'gabo.jpeg'
    ),
    (
        4,
        'Invitado Nuevo',
        'Invitado',
        'Bolivia',
        'invitado@gmail.com',
        '$2a$10$ZyNDu4.8pMivokru37EoSezQN5QrCYGLOINobQypa26cBpxvWUw8C',
        'Continental Terrace 122',
        'batman.png'
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
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
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
        size
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
        8
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
        10
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
        8
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
        10
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
        8
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
        7
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
        9
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
        8
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
        9
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
        8
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
        8
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
        9
    ),
    (
        13,
        'Nike-AirForce',
        '109.55',
        'Full-length FuelCell midsole provides a pinnacle of propulsion and energy return.',
        '1.png',
        'Men´s',
        'Green',
        'Nike',
        6
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
        8
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
        8
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
        9
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
        8
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
        7
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
        9
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
        8
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
        8
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
        7
    );

-- CREACION DE TABLA CARTPRODUCTS
CREATE TABLE IF NOT EXISTS cartproduct (
    id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    product_id int(11) NOT NULL,
    quantity int unsigned NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);