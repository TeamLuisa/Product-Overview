CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NULL DEFAULT NULL,
  feature VARCHAR NULL DEFAULT NULL,
  value VARCHAR NULL DEFAULT NULL
);

ALTER TABLE features ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product (id);

CREATE INDEX product_idx on features (product_id);