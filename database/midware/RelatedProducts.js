const db = require('../dbConnection.js');

const RelatedProducts = async (req, res) => {
  const product_id = req.params.product_id;
  const getProductInfo = `select ARRAY(select related_product_id::INTEGER from related where current_product_id = ${product_id});`
  var result =  await db.query(getProductInfo);
  var finalResult = result[0].array;
  res.send(finalResult);
}

module.exports = RelatedProducts;