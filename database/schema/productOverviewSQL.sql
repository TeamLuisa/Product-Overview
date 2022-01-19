-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table product
--
-- ---
-- CREATE DATABASE Product_Overview;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR NULL DEFAULT NULL,
  slogan VARCHAR NULL DEFAULT NULL,
  description VARCHAR NULL DEFAULT NULL,
  category VARCHAR NULL DEFAULT NULL,
  default_price VARCHAR NULL DEFAULT NULL,
  id_product INTEGER NULL DEFAULT NULL
);

---
-- Table styles
--
-- ---

DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
  productId INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  style_id INTEGER NULL DEFAULT NULL,
  original_price VARCHAR NULL DEFAULT NULL,
  sale_price VARCHAR NULL DEFAULT NULL,
  default_style BLOB NULL DEFAULT NULL,
  id SERIAL PRIMARY KEY,
  name VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table feature
--
-- ---

DROP TABLE IF EXISTS feature;

CREATE TABLE feature (
  id SERIAL PRIMARY KEY,
  feature VARCHAR NULL DEFAULT NULL,
  value VARCHAR NULL DEFAULT NULL,
  product_id INTEGER NULL DEFAULT NULL
);

-- ---
-- Table photos
--
-- ---

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id_style INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  thumbnail_url VARCHAR NULL DEFAULT NULL,
  url VARCHAR NULL DEFAULT NULL,
  id SERIAL PRIMARY KEY
);

-- ---
-- Table skus
--
-- ---

DROP TABLE IF EXISTS skus;

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleId INTEGER NULL DEFAULT NULL,
  size VARCHAR NULL DEFAULT NULL,
  quantity INTEGER NULL DEFAULT NULL
);

-- ---
-- Table related
--
-- ---

DROP TABLE IF EXISTS related;

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER NULL DEFAULT NULL,
  related_product_id INTEGER NULL DEFAULT NULL
);

-- ---
-- Table cart
--
-- ---

DROP TABLE IF EXISTS cart;

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_session INTEGER NULL DEFAULT NULL,
  product_id INTEGER NULL DEFAULT NULL,
  active INTEGER NULL DEFAULT NULL
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE styles ADD FOREIGN KEY (productId) REFERENCES product (id);
-- ALTER TABLE styles ADD FOREIGN KEY (style_id) REFERENCES skus (id);
-- ALTER TABLE feature ADD FOREIGN KEY (product_id) REFERENCES product (id);
-- ALTER TABLE photos ADD FOREIGN KEY (id_style) REFERENCES styles (style_id);
-- ALTER TABLE related ADD FOREIGN KEY (current_product_id) REFERENCES product (id);
-- ALTER TABLE cart ADD FOREIGN KEY (product_id) REFERENCES product (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE product ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE styles ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE feature ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE skus ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE related ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE cart ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO product (id,name,slogan,description,category,default_price,id_product) VALUES
-- (,,,,,,);
-- INSERT INTO styles (productId,style_id,original_price,sale_price,default_style,id,name) VALUES
-- (,,,,,,);
-- INSERT INTO feature (id,feature,value,product_id) VALUES
-- (,,,);
-- INSERT INTO photos (id_style,thumbnail_url,url,id) VALUES
-- (,,,);
-- INSERT INTO skus (id,styleId,size,quantity) VALUES
-- (,,,);
-- INSERT INTO related (id,current_product_id,related_product_id) VALUES
-- (,,);
-- INSERT INTO cart (id,user_session,product_id,active) VALUES
-- (,,,);