CREATE TABLE cart (
  id INTEGER,
  user_session INTEGER NULL DEFAULT NULL,
  product_id INTEGER NULL DEFAULT NULL,
  active INTEGER NULL DEFAULT NULL
);

ALTER TABLE common.client_contact DROP CONSTRAINT IF EXISTS  client_contact_contact_id_fkey;

ALTER TABLE common.client_contact
    ADD CONSTRAINT client_contact_contact_id_fkey
    FOREIGN KEY (contact_id) REFERENCES common.contact_item(id)


ALTER TABLE related ADD CONSTRAINT fk_product FOREIGN KEY (current_product_id) REFERENCES product (id);

ALTER TABLE skus ADD CONSTRAINT fk_style FOREIGN KEY (styleid) REFERENCES styles (id);


ALTER TABLE cart DROP CONSTRAINT cart_pkey;

ALTER TABLE styles ADD PRIMARY KEY (id);


CREATE TABLE styles (
  id INTEGER,
  productId INTEGER NULL DEFAULT NULL,
  name VARCHAR NULL DEFAULT NULL,
  sale_price VARCHAR NULL DEFAULT NULL,
  original_price VARCHAR NULL DEFAULT NULL,
  default_style INTEGER NULL DEFAULT NULL
);

CREATE TABLE skus (
  id INTEGER,
  styleid INTEGER NULL DEFAULT NULL,
  size VARCHAR NULL DEFAULT NULL,
  quantity INTEGER NULL DEFAULT NULL
);

COPY styles FROM '/Users/houhengli/Downloads/styles.csv' DELIMITER ',' (FORMAT csv);

\copy styles
FROM '/Users/houhengli/Downloads/styles.csv'
DELIMITER ','
CSV HEADER;

ALTER TABLE styles
RENAME COLUMN id TO style_id;

-- select *, json_agg(json_build_object('feature', features.feature, 'value', features.value) where id = {product_id}) as features from product where id = {product_id}

select json_agg(albums)
from (
  select * from albums where artist_id = 12
) as albums;

select * from (select * from product where id = 1 INNER JOIN features on product.id = features.product_id);

select row_to_json(product) from (select feature, value from features where f.product_id = p.id) as

select row_to_json(p), f.feature as feature, f.value as value from product as p RIGHT OUTER JOIN features as f on p.id = f.product_id where p.id = 1;

select row_to_json(p), f.feature from product as p features as f where id = 1;

select row_to_json(cool) from (select p.*, (select json_agg(final) from (select feature, value from features where product_id = 1) as final) as feature from product as p, features as f where p.id = 1 and f.product_id  = p.id limit 1) as cool;

-- product style database;
select s.style_id as style_id, s.name as name, s.original_price as original_price, s.sale_price as sale_price, default_style as "default?", (select json_agg(photo) from (select p.thumbnail_url, p.url from photos p where styleid = s.style_id) as photo) as photos from styles s where s.productid = 1;

select row_to_json(sku) from (select sk.quantity, sk.size from skus sk where sk.styleid = s.style_id) as

select (json_build_object(id, json_build_object('quantity', quantity, 'size', size))) from skus where styleid = 1;

select (json_build_object(id, json_build_object('quantity', quantity, 'size', size))) from skus where styleid = 1;

select json_object_agg(id, json_build_object('quantity', quantity, 'size', size)) from skus where styleid = s.style_id;


`select p.*, (select json_agg(f) from (select f.feature, f.value from features) as features) from product as p INNER JOIN features as f on p.id = f.product_id where p.id = 1 GROUP BY p.id`

`select s.style_id as style_id, s.name as name, s.original_price as original_price, s.sale_price as sale_price, default_style as "default?", (select json_agg(photo) from (select p.thumbnail_url, p.url from photos p where styleid = s.style_id) as photo) as photos, (select json_object_agg(id, json_build_object('quantity', quantity, 'size', size)) from skus where styleid = s.style_id) as skus from styles s where s.productid = ${product_id};`

select style_id, name, size, quantity from styles s INNER JOIN skus sk on s.style_id = sk.styleid INNER JOIN photos p ON sk.styleid = p.styleid limit 10;

select related_product_id from related where current_product_id = ${product_id};

CREATE

--  psql --host=ec2-54-167-20-92.compute-1.amazonaws.com --port=5432 --username=ubuntu --password --dbname=product_overview

 \copy photos from '/Users/houhengli/Downloads/photos.csv' WITH DELIMITER ',' CSV HEADER;