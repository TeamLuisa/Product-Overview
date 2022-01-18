CREATE TABLE photos (
  id SERIAL PRIMARY KEY
  styleid INTEGER NULL DEFAULT NULL,
  url VARCHAR NULL DEFAULT NULL,
  thumbnail_url VARCHAR NULL DEFAULT NULL

);

ALTER TABLE photos ADD CONSTRAINT fk_style FOREIGN KEY (styleid) REFERENCES styles (style_id);

CREATE INDEX style_idx on photos (styleid);