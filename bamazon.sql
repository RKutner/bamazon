DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR (50),
price DECIMAL(10,2),
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Two-Fisted Jesus Tales, Book 1: The Book of the Job", "Books", 13.86, 10),
("Nicholas Cage Mermaid Pillow", "Home & Kitchen", 22.0, 1),
("Daddle Saddle", "Sports & Outdoors", 45.99, 8),
("Catnip-Infused Champagne for Cats", "Pet Supplies", 17.99, 2),
("Deluxe Box of Nothing", "Home & Kitchen", 9.95, 2),
("MySack Girl's Golf Ball Storage Sack", "Sports & Outdoors", 16.95, 8),
("Farting Animals Coloring Book", "Books", 5.99, 48),
("Talking Toilet Paper Spindle", "Home & Kitchen", 14.95, 2),
("Coyote Urine", "Sports & Outdoors", 14.95, 1),
("Candle for Introverts", "Home & Kitchen", 20.58, 2);

SELECT * FROM products;
