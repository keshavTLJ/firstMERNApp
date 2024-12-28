const express = require('express');
const productController = require('../controller/productController');

const productRouter = express.Router();

productRouter
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .post('/', productController.createProduct)
//   .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

module.exports = productRouter;