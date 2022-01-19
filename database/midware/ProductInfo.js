const db = require('../dbConnection.js');

const ProductInfo = async (req, res) => {
  const product_id = req.params.product_id;
  // const getProductInfo = `select * from product where id = ${product_id}`
  // var result =  await db.query(getProductInfo);
  // const getFeatureInfo = 'select feature, value from features where product_id = ' + product_id;
  // var response = result[0];
  // response.features= await db.query(getFeatureInfo);
  // res.send(response);
  const getProductInfo = `select p.*, (select json_agg(final) from (select feature, value from features where product_id = ${product_id}) as final) as features from product as p, features as f where p.id = ${product_id} and f.product_id  = p.id limit 1;`
  var result =  await db.query(getProductInfo);
  res.send(result);
}

module.exports = ProductInfo;