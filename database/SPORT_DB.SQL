DROP DATABASE IF EXISTS SportShoes_DB;
CREATE DATABASE sportshoes_db;
use sportshoes_db;

-- CREACION DE TABLA USERS
CREATE TABLE IF NOT EXISTS users (
    user_id int(11) NOT NULL AUTO_INCREMENT,
    fullName varchar(50) NOT NULL,
    userName varchar(50) NOT NULL,
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

-- CONTENIDO DE TABLA CARTPRODUCTS