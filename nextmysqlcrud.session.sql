ALTER TABLE product ADD COLUMN image VARCHAR(200) AFTER description;

-- @block
DESCRIBE product;

-- @block

SELECT * FROM product;