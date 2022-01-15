const db = require('../dbConnection.js');

const ProductStyles = async (req, res) => {
  const product_id = req.params.product_id;
  // var finalResult = {};
  // finalResult.product_id = "" + product_id;
  // const getStyles = 'select * from styles where productid = ' + product_id;
  // finalResult.results = await db.query(getStyles);
  // var result = finalResult.results;
  // for (var i = 0; i < result.length; i++) {
  //   if (result[i].default_style === 1) {
  //     result[i]['default?'] = true;
  //   } else {
  //     result[i]['default?'] = false;
  //   };
  //   delete result[i].default_style;
  //   const getPhotos = `select thumbnail_url, url from photos where styleid = ${result[i].style_id}`;
  //   result[i].photos = await db.query(getPhotos)
  // };
  const getStyle = `select s.style_id as style_id, s.name as name, s.original_price as original_price, s.sale_price as sale_price, default_style as "default?", (select json_agg(photo) from (select p.thumbnail_url, p.url from photos p where styleid = s.style_id) as photo) as photos, (select json_object_agg(id, json_build_object('quantity', quantity, 'size', size)) from skus where styleid = s.style_id) as skus from styles s where s.productid = ${product_id};`
  var finalResult = {};
  finalResult.product_id = "" + product_id;
  finalResult.results = await db.query(getStyle);

  res.send(finalResult);
};

module.exports = ProductStyles;

// json_agg(json_build_object('id', photos.id, 'url', photos.url)) AS photos