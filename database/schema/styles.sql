CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  productid INTEGER NULL DEFAULT NULL,
  name VARCHAR NULL DEFAULT NULL,
  sale_price VARCHAR NULL DEFAULT NULL,
  original_price VARCHAR NULL DEFAULT NULL,
  default_style boolean NULL DEFAULT NULL
);

ALTER TABLE styles ADD CONSTRAINT fk_product FOREIGN KEY (productid) REFERENCES product (id);

CREATE INDEX prodct_idx on styles (productid);