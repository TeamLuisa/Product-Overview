const express = require('express');
const db = require('./dbConnection.js');
const ListProducts = require('./midware/ListProducts.js');
const ProductInfo = require('./midware/ProductInfo.js');
const ProductStyles = require('./midware/ProductStyles.js');
const RelatedProducts = require('./midware/RelatedProducts.js');

const path = require('path')

var app = express();

app.use(express.json());
app.set('port', 4000);
app.listen(app.get('port'));

db.connect();
//   .then((obj) => {
//     // Can check the server version here (pg-promise v10.1.0+):
//     console.log('pgp connected!');
//     obj.done(); // success, release the connection;
//   })
//   .catch((error) => {
//     console.log('ERROR:', error.message || error);
//   });

app.get('/products', (req, res)  => {
  ListProducts(req, res);
})

app.get('/products/:product_id', (req, res)  => {
  ProductInfo(req, res);
})

app.get('/products/:product_id/styles', (req, res)  => {
  ProductStyles(req, res);
})

app.get('/products/:product_id/related', (req, res)  => {
  RelatedProducts(req, res);
})


// if (!module.parent) {
//   app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
// };