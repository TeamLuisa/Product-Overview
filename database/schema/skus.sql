CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleid INTEGER NULL DEFAULT NULL,
  size VARCHAR NULL DEFAULT NULL,
  quantity INTEGER NULL DEFAULT NULL
);

ALTER TABLE skus ADD CONSTRAINT fk_style FOREIGN KEY (styleid) REFERENCES styles (style_id);

CREATE INDEX sku_style_idx on skus (styleid);