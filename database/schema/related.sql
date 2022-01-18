CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER NULL DEFAULT NULL,
  related_product_id INTEGER NULL DEFAULT NULL
);

ALTER TABLE related ADD CONSTRAINT fk_product FOREIGN KEY (current_product_id) REFERENCES product (id);

CREATE INDEX related_product_idx on photos (current_product_id);