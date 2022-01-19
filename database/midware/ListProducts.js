const db = require('../dbConnection.js');

const ListProducts = async (req, res) => {
  const page = req.params.page || 1;
  const count = req.params.count || 5;
  const getProduct = 'select * from product limit ' + page * count;
  var result =  await db.query(getProduct);
  // const test = 'select * from product p, styles s where p.id = s.productid and p.id = 40344';
  // var test1 = await db.query(test);
  // // var finalResult = result.concat(test1);
  // res.send(test1);
  res.send(result);
}

module.exports = ListProducts;